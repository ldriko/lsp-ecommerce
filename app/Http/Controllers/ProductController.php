<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{
    public function show(Product $product)
    {
        // Retrieve related products
        $relatedProducts = Product::query()
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->where('is_active', true)
            ->limit(10)
            ->get();

        // Make a copy of the product to avoid modifying the original model
        $productWithSafeHtml = $product->toArray();

        // Allow safe HTML tags in the description
        // This is a basic safe list approach - in production, use a dedicated HTML purifier
        $allowedTags = '<p><br><strong><em><u><ul><ol><li><h1><h2><h3><h4><h5><h6><blockquote>';
        $productWithSafeHtml['description'] = strip_tags($product->description, $allowedTags);

        return inertia('product', [
            'product' => $productWithSafeHtml,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}
