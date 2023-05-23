<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstadoController;

Route::get('/api/estados', [EstadoController::class, 'index']);
