<?php

namespace App\Domain\Repositories;

use App\Models\ProductCategory;

class ProductsCategoriesRepository extends BaseRepository
{
    public function model(): string
    {
        return ProductCategory::class;
    }
}
