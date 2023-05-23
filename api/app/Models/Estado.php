<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    protected $table = 'estado';

    protected $fillable = [
        'id',
        'codigo_uf',
        'nome',
        'uf',
        'regiao',
    ];
}
