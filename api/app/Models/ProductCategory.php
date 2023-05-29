<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * @property int id
 * @property string nome
 * @property string created_at
 * @property string updated_at
 */
class ProductCategory extends Model
{
    const TYPE_ROOM_CATEGORY = 'QUARTO';
    const TYPE_DINING_ROOM_CATEGORY = 'SALA_JANTAR';
    const TYPE_MEETING_ROOM_CATEGORY = 'SALA_REUNIAO';
    const TYPE_WORKSPACE_CATEGORY = 'AREA_TRABALHO';
    const TYPE_LIVING_ROOM_CATEGORY = 'SALA_ESTAR';
    const TYPE_KITCHEN_CATEGORY = 'COZINHA';
    const TYPE_LIVING_SPACE_CATEGORY = 'ESPACO_CONVIVENCIA';

    protected $table = 'produtos_categorias';

    public const TYPES_CATEGORIES     = [
        self::TYPE_ROOM_CATEGORY,
        self::TYPE_DINING_ROOM_CATEGORY,
        self::TYPE_MEETING_ROOM_CATEGORY,
        self::TYPE_WORKSPACE_CATEGORY,
        self::TYPE_LIVING_ROOM_CATEGORY,
        self::TYPE_KITCHEN_CATEGORY,
        self::TYPE_LIVING_SPACE_CATEGORY,
    ];

    protected $fillable = [
        'id',
        'nome',
        'created_at',
        'updated_at',
    ];
}
