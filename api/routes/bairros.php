<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BairroController;

Route::get('/api/bairros', [BairroController::class, 'index']);
