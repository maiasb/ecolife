<?php

namespace App\Http\Controllers;

use App\Domain\Services\EstadoService;

class EstadoController extends Controller
{
    private EstadoService $estadoService;

    public function __construct(EstadoService $estadoService) {
        $this->estadoService = $estadoService;
    }

    public function index() {
        return $this->estadoService->findEstados();
    }
}
