<?php

namespace App\Domain\Repositories;

use App\Models\Estado;

class EstadoRepository extends BaseRepository
{
    public function model(): string
    {
        return Estado::class;
    }
}
