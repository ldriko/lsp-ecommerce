<?php

namespace App\Http\Controllers;

class CartController extends Controller
{
    public function index()
    {
        return inertia('cart');
    }
}
