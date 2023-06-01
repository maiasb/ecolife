<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::get('/api/produtos/', [ProductsController::class, 'index']);
