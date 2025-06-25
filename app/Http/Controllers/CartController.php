<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $cartItems = $request->user()
            ->cartItems()
            ->with('product')
            ->get();

        return inertia('cart', compact('cartItems'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'cart_items' => ['array'],
            'cart_items.*.product_id' => ['required', 'exists:products,id'],
            'cart_items.*.qty' => ['required', 'integer', 'min:1'],
        ]);

        $userId = $request->user()->id;
        $products = Product::findMany(
            collect($request->cart_items)->pluck('product_id')
        )->keyBy('id');

        foreach ($request->cart_items as $item) {
            $productId = $item['product_id'];
            $qty = $item['qty'];

            if ($products->has($productId)) {
                CartItem::updateOrInsert(
                    ['user_id' => $userId, 'product_id' => $productId],
                    ['qty' => $qty, 'price' => $products[$productId]->price]
                );
            }
        }

        CartItem::where('user_id', $userId)
            ->whereNotIn('product_id', $products->keys())
            ->delete();

        return back();
    }

    public function updateSingle(Request $request)
    {
        $request->validate([
            'product_id' => ['required', 'exists:products,id'],
            'qty' => ['required', 'integer', 'min:1'],
        ]);

        $product = Product::findOrFail($request->product_id);

        CartItem::updateOrInsert([
            'user_id' => $request->user()->id,
            'product_id' => $request->product_id,
        ], [
            'qty' => $request->qty,
            'price' => $product->price,
        ]);

        return back();
    }

    public function checkout(Request $request)
    {
        $user = $request->user();
        $cartItems = $user->cartItems()
            ->with('product')
            ->get();

        if ($cartItems->isEmpty()) {
            return back()->with('flash', [
                'type' => 'error',
                'message' => 'Keranjang belanja anda kosong.',
            ]);
        }

        DB::transaction(function () use ($user, $cartItems) {
            $order = $user->orders()->create();
            $total = 0;

            foreach ($cartItems as $item) {
                $order->lines()->create([
                    'product_id' => $item->product_id,
                    'qty' => $item->qty,
                    'price' => $item->price,
                ]);
                $total += $item->qty * $item->price;
            }

            $order->update(['total' => $total]);

            $user->cartItems()->delete();
        });

        return to_route('orders.index');
    }

    public function destroy(Request $request, Product $product)
    {
        CartItem::where('user_id', $request->user()->id)
            ->where('product_id', $product->id)
            ->delete();

        return back();
    }
}
