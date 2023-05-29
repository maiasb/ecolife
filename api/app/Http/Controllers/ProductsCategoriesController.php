<?php

namespace App\Http\Controllers;

use App\Domain\Services\ProductsCategoriesService;

class ProductsCategoriesController extends Controller
{
    private ProductsCategoriesService $productsCategoriesService;

    public function __construct(ProductsCategoriesService $productsCategoriesService) {
        $this->productsCategoriesService = $productsCategoriesService;
    }

    public function index() {
        return $this->productsCategoriesService->findCategories();
    }
}
