<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Tarefa
 *
 * @property int $id
 * @property int $user_id
 * @property string $titulo
 * @property int $status
 * @property string $descricao
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Database\Factories\TarefaFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa query()
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa whereDescricao($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa whereTitulo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Tarefa whereUserId($value)
 */
	class Tarefa extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TarefaComentario
 *
 * @property int $id
 * @property int $user_id
 * @property string $conteudo
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario query()
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario whereConteudo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TarefaComentario whereUserId($value)
 */
	class TarefaComentario extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Tarefa[] $tarefas
 * @property-read int|null $tarefas_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Tarefa[] $tarefas_criadas
 * @property-read int|null $tarefas_criadas_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\UserTarefa
 *
 * @property int $id
 * @property int $user_id
 * @property int $tarefa_id
 * @property int $executando
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa whereExecutando($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa whereTarefaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserTarefa whereUserId($value)
 */
	class UserTarefa extends \Eloquent {}
}

