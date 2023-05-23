<?php

namespace App\Http\Controllers;

use App\Domain\Services\BairroService;
use Symfony\Component\HttpFoundation\Response;

class BairroController extends Controller
{
    private BairroService $bairroService;
    public function __construct(BairroService $bairroService) {
        $this->bairroService = $bairroService;
    }
    public function index()
    {
        $data = $this->bairroService->findBairros();

        return response()->json($data, Response::HTTP_OK);
    }
}
