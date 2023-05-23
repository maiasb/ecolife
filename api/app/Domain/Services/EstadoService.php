<?php

namespace App\Domain\Services;

use App\Domain\Repositories\EstadoRepository;

class EstadoService extends BaseService
{
    private EstadoRepository $estadoRepository;

    public function __construct(EstadoRepository $estadoRepository) {
        $this->estadoRepository = $estadoRepository;
    }

    public function findEstados() {
        return $this->estadoRepository->query()->get();
    }
}
