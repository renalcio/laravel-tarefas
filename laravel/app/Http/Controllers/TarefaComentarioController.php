<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTarefaComentarioRequest;
use App\Http\Requests\UpdateTarefaComentarioRequest;
use App\Models\TarefaComentario;

class TarefaComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTarefaComentarioRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTarefaComentarioRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TarefaComentario  $tarefaComentario
     * @return \Illuminate\Http\Response
     */
    public function show(TarefaComentario $tarefaComentario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TarefaComentario  $tarefaComentario
     * @return \Illuminate\Http\Response
     */
    public function edit(TarefaComentario $tarefaComentario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTarefaComentarioRequest  $request
     * @param  \App\Models\TarefaComentario  $tarefaComentario
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTarefaComentarioRequest $request, TarefaComentario $tarefaComentario)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TarefaComentario  $tarefaComentario
     * @return \Illuminate\Http\Response
     */
    public function destroy(TarefaComentario $tarefaComentario)
    {
        //
    }
}
