<?php

namespace App\Models;

use App\Models\ModelBases\EloquentModelBase;
use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Tarefa extends EloquentModelBase
{
    use HasFactory;

    protected $fillable = ['titulo', 'status', 'descricao'];

    protected $attributes = [
        'status' => 0,
    ];

    protected $appends = [
        'status_nome'
    ];

    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i',
        'updated_at' => 'datetime:d/m/Y H:i',
        'inicio'     => 'datetime:d/m/Y H:i',
        'fim'        => 'datetime:d/m/Y H:i',
        'status'     => 'int',
        'user_id'    => 'int',
        'id'         => 'int',
    ];

    //region Statics
    public static $statusNomes = [
        0 => 'Pendente',
        1 => 'Em andamento',
        2 => 'Finalizado',
    ];
    //endregion

    //region Gets
    protected function getStatusNomeAttribute()
    {
        return self::$statusNomes[$this->status] ?? 'Pendente';
    }
    //endregion

    //region Sets
    protected function setStatusAttribute($value)
    {
        $this->attributes['status'] = $value;

        if ($value == 1) {

            $this->users()->updateExistingPivot(auth()->user()->id, [
                'executando' => 1,
            ]);

            if(!$this->inicio){
                $this->inicio = Carbon::now();
            }

            if(!$this->user_start_id){
                $this->user_start_id = auth()->user()->id;
            }
        }
        else {
            if ($value == 2) {
                $this->fim = Carbon::now();

                if(!$this->user_finish_id){
                    $this->user_finish_id = auth()->user()->id;
                }
            }
        }

    }
    //endregion

    //region Overrides
    public function save(array $options = [])
    {
        if (!$this->id || !$this->user_id) {
            $this->user_id = auth()->user()->id;
        }

        return parent::save($options);
    }

    public function delete()
    {
        //Remover usuarios relacionados
        $this->users()->sync([]);

        //Remover coment??rios
        $this->comentarios()->delete();

        //Continuar
        return parent::delete(); // TODO: Change the autogenerated stub
    }
    //endregion

    //region Relations
    //Autor da Tarefa
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //Usu??rio que iniciou
    public function user_start()
    {
        return $this->hasOne(User::class, 'id', 'user_start_id');
    }

    //Usu??rio que finalizou
    public function user_finish()
    {
        return $this->hasOne(User::class, 'id', 'user_finish_id');
    }

    //Usu??rios Envolvidos na Tarefa
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_tarefa', 'tarefa_id', 'user_id')->using(UserTarefa::class)->withPivot(['executando']);
    }

    //Users Executando a Tarefa
    public function users_executando()
    {
        return $this->belongsToMany(User::class, 'user_tarefa', 'tarefa_id', 'user_id')->using(UserTarefa::class)->wherePivot('executando', 1)->withPivot(['executando']);
    }

    //Coment??rios da Tarefa
    public function comentarios()
    {
        return $this->hasMany(TarefaComentario::class, 'tarefa_id', 'id')->with('user');
    }
    //endregion


}
