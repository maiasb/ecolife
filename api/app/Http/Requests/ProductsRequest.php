<?php

namespace App\Http\Requests;

class ProductsRequest extends BaseRequests
{
    public function onStore()
    {
        return [
            'nome'    => 'required',
            'preco' => 'required',
            'categoria_id' => 'required',
        ];
    }
}
