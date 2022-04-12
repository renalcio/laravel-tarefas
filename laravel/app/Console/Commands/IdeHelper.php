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
        dump('Generate');
        Artisan::call('ide-helper:generate');
        dump('Models');
        Artisan::call('ide-helper:models -N',);
        dump('Meta');
        Artisan::call('ide-helper:meta');
    }
}
