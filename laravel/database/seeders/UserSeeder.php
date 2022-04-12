<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Renalcio',
            'email' => 'renalcio.c@gmail.com',
            'password' => Hash::make('qwe123'),
        ]);
        User::create([
            'name' => 'Fulano',
            'email' => 'fulano@gmail.com',
            'password' => Hash::make('qwe123'),
        ]);
    }
}
