<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;


class UserTarefa extends Pivot
{
    protected $attributes = [
        'executando' => 0,
    ];
}
