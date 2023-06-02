<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::get('/produtos/', [ProductsController::class, 'index']);
Route::post('/produto/', [ProductsController::class, 'store']);
