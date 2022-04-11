<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTarefaRequest;
use App\Http\Requests\UpdateTarefaRequest;
use App\Models\Tarefa;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TarefaController extends Controller
{

    public function index()
    {
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
        $tarefa->users()->sync([auth()->user()->id]);

        return Redirect::route('tarefas.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tarefa  $tarefa
     * @return \Illuminate\Http\Response
     */
    public function show(Tarefa $tarefa)
    {
        //
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

        return Redirect::route('tarefas.index');
    }


    public function destroy(Tarefa $tarefa)
    {
        $tarefa->delete();

        return Redirect::route('tarefas.index');
    }
}
