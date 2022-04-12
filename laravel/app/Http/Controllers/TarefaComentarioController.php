<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTarefaComentarioRequest;
use App\Http\Requests\UpdateTarefaComentarioRequest;
use App\Models\TarefaComentario;
use Illuminate\Support\Facades\Redirect;

class TarefaComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTarefaComentarioRequest $request)
    {
        //Criar model
        $comentario = new TarefaComentario();
        $comentario->fill($request->all());
        $comentario->save();

        return Redirect::route('tarefas.show', $comentario->tarefa_id);
    }

    /**
     * Display the specified resource.
     */
    public function show(TarefaComentario $tarefaComentario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TarefaComentario $tarefaComentario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTarefaComentarioRequest $request, TarefaComentario $tarefaComentario)
    {

        $tarefaComentario->fill($request->all())->save();

        return Redirect::route('tarefas.show', $tarefaComentario->tarefa_id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TarefaComentario $tarefaComentario)
    {

        $tarefaId = $tarefaComentario->tarefa_id;

        $tarefaComentario->delete();

        return Redirect::route('tarefas.show', $tarefaId);
    }
}
