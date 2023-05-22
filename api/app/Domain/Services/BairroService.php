<?php

namespace App\Domain\Services;

use App\Domain\Repositories\BairroRepository;

class BairroService extends BaseService
{
    private BairroRepository $messageRepository;

    public function __construct(BairroRepository $messageRepository) {
        $this->messageRepository = $messageRepository;
    }

    public function findBairros() {
        return $this->messageRepository->query()->get();
    }
}
