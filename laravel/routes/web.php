<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('dashboard');
    /*return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);*/
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

//Tarefas
Route::resource('tarefas', \App\Http\Controllers\TarefaController::class)->middleware(['auth', 'verified'])->missing(function (Request $request) {
    return Redirect::route('tarefas.index');
});
Route::resource('tarefa_comentarios', \App\Http\Controllers\TarefaComentarioController::class)->middleware(['auth', 'verified'])->missing(function (Request $request) {
    return Redirect::route('tarefa_comentarios.index');
});
