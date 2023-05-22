<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;

class MessageController extends Controller
{
    public function index()
    {
        return response()->json(['ovo' => 'esquerdo'], Response::HTTP_OK);
    }
}
