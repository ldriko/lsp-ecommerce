<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])
    ->name('home');
Route::get('/product/{product}', [ProductController::class, 'show'])
    ->name('product.show');

Route::middleware('guest')->group(function () {
    Route::get('/register', [AuthController::class, 'showRegister'])
        ->name('register');
    Route::post('/register', [AuthController::class, 'register'])
        ->name('register.post');

    Route::get('/login', [AuthController::class, 'showLogin'])
        ->name('login');
    Route::post('/login', [AuthController::class, 'login'])
        ->name('login.post');
});

Route::middleware('auth')->group(function () {
    Route::get('/logout', [AuthController::class, 'logout'])
        ->name('logout');

    Route::get('/cart', [CartController::class, 'index'])
        ->name('cart.index');
    Route::put('/cart', [CartController::class, 'update'])
        ->name('cart.update');
    Route::put('/cart/single', [CartController::class, 'updateSingle'])
        ->name('cart.update.single');
    Route::delete('/cart/{product}', [CartController::class, 'destroy'])
        ->name('cart.destroy');
});
