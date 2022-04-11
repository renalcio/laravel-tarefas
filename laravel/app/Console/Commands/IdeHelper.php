<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class IdeHelper extends Command
{

    protected $signature = 'idehelper';


    protected $description = 'laravel ide-helper helper';


    public function handle()
    {
        Artisan::call('ide-helper:generate');
        Artisan::call('ide-helper:models -N',);
        Artisan::call('ide-helper:meta');
    }
}
