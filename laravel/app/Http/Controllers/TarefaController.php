<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTarefaRequest;
use App\Http\Requests\UpdateTarefaRequest;
use App\Models\Tarefa;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TarefaController extends Controller
{

    public function index()
    {
        //Todo: status da tarefa na listagem

        return Inertia::render('Tarefas/Listagem',[
            'tarefas' => Tarefa::with('user')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Tarefas/Cadastro');
    }

    public function store(StoreTarefaRequest $request)
    {
        //Criar model
        $tarefa = new Tarefa();
        $tarefa->fill($request->all());
        $tarefa->save();

        //Vincular usuário aos envolvidos
        //$tarefa->users()->sync([auth()->user()->id]);
        $tarefa->users()->sync(auth()->user()->id);

        return Redirect::route('tarefas.show', $tarefa->id);
    }

    public function show(Tarefa $tarefa)
    {
        //Todo: tela de visualição e cadastro de comentários, iniciar execução da tarefa e finalizar. (considerar tempo de inicio e fim)

        return Inertia::render('Tarefas/Detalhes', [
            'data' => $tarefa->load(['user', 'users', 'comentarios', 'users_executando', 'user_start', 'user_finish'])
        ]);
    }

    public function edit(Tarefa $tarefa)
    {
        return Inertia::render('Tarefas/Cadastro', [
            'data' => $tarefa
        ]);
    }

    public function update(UpdateTarefaRequest $request, Tarefa $tarefa)
    {

        $tarefa->fill($request->all())->save();

        return Redirect::route('tarefas.show', $tarefa->id);
    }

    public function destroy(Tarefa $tarefa)
    {
        $tarefa->delete();

        return Redirect::route('tarefas.index');
    }
}
