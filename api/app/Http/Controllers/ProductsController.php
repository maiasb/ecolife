<?php

namespace App\Http\Controllers;

use App\Domain\Services\ProductsService;

class ProductsController extends Controller
{
    private ProductsService $productsService;

    public function __construct(ProductsService $productsService) {
        $this->productsService = $productsService;
    }

    public function index() {
        return $this->productsService->findProducts();
    }
}
