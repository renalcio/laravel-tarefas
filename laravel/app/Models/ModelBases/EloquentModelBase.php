<?php

namespace App\Models\ModelBases;

use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

class EloquentModelBase extends Model
{

    protected function serializeDate(DateTimeInterface $date)
    {
        return Carbon::instance($date)->toISOString(true);
    }

}
