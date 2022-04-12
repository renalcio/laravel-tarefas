<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarefas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('user_start_id')->nullable()->constrained('users');
            $table->foreignId('user_finish_id')->nullable()->constrained('users');
            $table->string('titulo');
            $table->tinyInteger('status')->nullable()->default(0);
            $table->longText('descricao');
            $table->dateTime('inicio')->nullable();
            $table->dateTime('fim')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tarefas');
    }
};
