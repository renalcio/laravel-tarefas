<?php

namespace App\Models;

use App\Models\ModelBases\EloquentModelBase;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class TarefaComentario extends EloquentModelBase
{
    use HasFactory;

    protected $fillable = ['conteudo','tarefa_id'];

    protected $touches = ['tarefa'];

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i',
        'updated_at' => 'datetime:d/m/Y H:i',
    ];

    //region Overrides
    public function save(array $options = [])
    {
        if (!$this->id || !$this->user_id) {
            $this->user_id = auth()->user()->id;
        }

        $this->tarefa->users()->syncWithoutDetaching([auth()->user()->id]);

        return parent::save($options);
    }
    //endregion

    //region Relations
    public function tarefa(){
        return $this->belongsTo(Tarefa::class);
    }

    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    //endregion

}
