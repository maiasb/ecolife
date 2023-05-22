<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bairro extends Model
{
    protected $table = 'bairro';

    protected $fillable = [
        'id',
        'codigo',
        'nome',
        'uf',
    ];
}
