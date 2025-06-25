<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home(Request $request)
    {
        $featured = Product::query()
            ->where('is_active', true)
            ->where('is_featured', true)->get();
        $categories = Category::all();
        $products = Product::query()
            ->where('is_active', true)->get();

        return inertia('home', compact('featured', 'categories', 'products'));
    }
}
