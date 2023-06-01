<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * @property int id
 * @property string nome
 * @property int preco
 * @property int categoria_id
 * @property string created_at
 * @property string updated_at
 */
class Products extends Model
{
    protected $table = 'produtos';
    protected $fillable = [
        'id',
        'nome',
        'preco',
        'categoria_id',
        'created_at',
        'updated_at',
    ];
}
