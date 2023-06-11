<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsCategoriesController;

Route::controller(ProductsCategoriesController::class)->group(function () {
    Route::get('/produtos/categorias', 'index');
});
