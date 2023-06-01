<?php

namespace App\Domain\Services;

use App\Domain\Repositories\ProductsRepository;

class ProductsService extends BaseService
{
    private ProductsRepository $productsRepository;

    public function __construct(ProductsRepository $productsRepository) {
        $this->productsRepository = $productsRepository;
    }

    public function findProducts() {
        return $this->productsRepository->query()->get();
    }
}
