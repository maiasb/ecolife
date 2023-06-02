<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsCategoriesController;

Route::get('/produtos/categorias', [ProductsCategoriesController::class, 'index']);
