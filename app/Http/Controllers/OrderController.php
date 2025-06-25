<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Spatie\LaravelPdf\Enums\Format;
use Spatie\LaravelPdf\Enums\Orientation;

use function Spatie\LaravelPdf\Support\pdf;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = $request->user()
            ->orders()
            ->latest()
            ->get();

        return inertia('orders/index', compact('orders'));
    }

    public function show(Request $request, Order $order)
    {
        $order->load('lines.product');

        return inertia('orders/show', compact('order'));
    }

    public function pdf(Request $request, Order $order)
    {
        $order->load('lines.product');

        return pdf('orders.pdf', compact('order'))
            ->format(Format::A5)
            ->orientation(Orientation::Landscape)
            ->margins(10, 10, 10, 10)
            ->name('order-'.$order->id.'.pdf');
    }
}
