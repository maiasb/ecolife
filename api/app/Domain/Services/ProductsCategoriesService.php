<?php

namespace App\Domain\Services;

use App\Domain\Repositories\ProductsCategoriesRepository;

class ProductsCategoriesService extends BaseService
{
    private ProductsCategoriesRepository $productsCategoriesRepository;

    public function __construct(ProductsCategoriesRepository $productsCategoriesRepository) {
        $this->productsCategoriesRepository = $productsCategoriesRepository;
    }

    public function findCategories() {
        return $this->productsCategoriesRepository->query()->get();
    }
}
