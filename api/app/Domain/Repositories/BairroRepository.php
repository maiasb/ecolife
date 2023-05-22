<?php

namespace App\Domain\Repositories;

use App\Models\Bairro;

class BairroRepository extends BaseRepository
{
    public function model(): string
    {
        return Bairro::class;
    }
}
