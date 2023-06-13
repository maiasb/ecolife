<?php

namespace App\Domain\Services;

use App\Domain\Repositories\ProductsRepository;

class ProductsService extends BaseService
{
    private ProductsRepository $productsRepository;

    public function __construct(ProductsRepository $productsRepository) {
        $this->productsRepository = $productsRepository;
    }

    public function findProducts()
    {
        return $this->productsRepository->query()->get();
    }

    public function create(array $filters)
    {
        return $this->productsRepository->create([
            'nome' => $filters['name'],
            'descricao' => $filters['description'],
            'preco' => $filters['price'],
            'categoria_id' => $filters['idCategory'],
        ]);
    }
}
