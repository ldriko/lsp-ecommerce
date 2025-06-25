<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show(Request $request, Product $product)
    {
        $product->load('category');

        $cartItem = $request->user()?->cartItems()
            ->where('product_id', $product->id)
            ->first();

        $product = $product->toArray();
        $allowedTags = '<p><br><strong><em><u><ul><ol><li><h1><h2><h3><h4><h5><h6><blockquote>';
        $product['description'] = strip_tags($product['description'], $allowedTags);

        return inertia('product', compact('product', 'cartItem'));
    }
}
