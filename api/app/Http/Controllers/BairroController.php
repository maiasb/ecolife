<?php

namespace App\Http\Controllers;

use App\Domain\Services\BairroService;
use Symfony\Component\HttpFoundation\Response;

class BairroController extends Controller
{
    private BairroService $messageService;
    public function __construct(BairroService $messageService) {
        $this->messageService = $messageService;
    }
    public function index()
    {
        $data = $this->messageService->findBairros();

        return response()->json($data, Response::HTTP_OK);
    }
}
