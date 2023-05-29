<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsCategoriesController;

Route::get('/api/produtos/categorias', [ProductsCategoriesController::class, 'index']);
