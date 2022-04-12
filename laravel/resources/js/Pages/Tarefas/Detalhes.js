import React, {useEffect} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ValidationErrors from "@/Components/ValidationErrors.js";
import Textarea from "@/Components/Textarea.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faPenToSquare, faTrashCan, faPlay, faCheck} from "@fortawesome/free-solid-svg-icons";
import {Inertia} from "@inertiajs/inertia";
import StatusBadge from "@/Components/Tarefas/StatusBadge.js";
import Modal from "@/Components/Modal.js";
import HtmlEditor from "@/Components/HtmlEditor.js";


const ComentarioForm = ({onHandleChange, data}) => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="about"
                       className="block mt-2 text-sm font-medium text-gray-700">
                    Comentário
                </label>
                <div className="mt-1">
                    {/*<Textarea
                        id="conteudo"
                        name="conteudo"
                        className="mt-1 block w-full"
                        value={data.conteudo}
                        handleChange={onHandleChange}
                    />*/}
                    <HtmlEditor value={data.descricao} name="conteudo" handleChange={(newContent) => onHandleChange('conteudo', newContent)} />
                </div>
            </div>
        </form>
    );
}

export default function TarefasDetalhes(props) {

    const {data, setData, post, put, processing, errors} = useForm({
        id: null,
        conteudo: '',
        tarefa_id: props.data.id,
        user_id: props.auth.user.id
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const saveComentario = () => {
        if (data.id) {
            put(route('tarefa_comentarios.update', data.id));
        } else {
            post(route('tarefa_comentarios.store'));
        }
    };
    function deleteComentario(id) {
        if (confirm('Tem certeza que deseja apagar seu comentário?')) {
            Inertia.delete(route('tarefa_comentarios.destroy', id));
        }
    };

    function deleteItem(id) {
        if (confirm('Tem certeza que deseja apagar a tarefa?')) {
            Inertia.delete(route('tarefas.destroy', id));
        }
    };

    function changeStatus(status = 1) {

        let dataPatch = {
            status: status,
        }
        Inertia.patch(route("tarefas.update", props.data.id), dataPatch);
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detalhes da
                Tarefa: <b>{props.data.titulo}</b></h2>}
        >
            <Head title="Detalhes da Tarefa"/>

            <div className="pb-12 pt-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {errors.length > 0 ? <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <ValidationErrors errors={errors}/>
                            </div>
                        </div>
                        : <></>
                    }

                    <div className="bg-white mt-5 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="w-full">
                                <h3 className="inline-block mb-1 text-2xl font-extrabold uppercase">{props.data.titulo}</h3>
                                <StatusBadge status={props.data.status}
                                             className={`float-right ` + (props.data.status === 1 ? `animate-pulse` : ``)}>{props.data.status_nome}</StatusBadge>
                            </div>

                            <p className="mb-5 text-sm">
                                <span className="text-gray-400">Criado por {props.data.user.name} em {props.data.created_at}</span>
                                {(() => {
                                    if (props.data.status === 1) {
                                        return (
                                            <>
                                                <span className="mx-3">|</span><span className="animate-pulse text-green-600 font-semibold">Iniciado por <b>{props.data.user_start.name}</b> em {props.data.inicio}</span>

                                                {/*{props.data.users_executando.map((userExec, i) => <b key={i}> {userExec.name}</b>).reduce((accu, elem) => {
                                                        return accu === null ? [elem] : [...accu, ',', elem]
                                                    }, null)}*/}
                                            </>
                                        );
                                    }else if(props.data.status === 2){
                                        return (
                                            <>
                                                <span className="mx-3">|</span><span className="text-blue-600 font-semibold">Finalizado por <b>{props.data.user_finish.name}</b> em {props.data.fim}</span>
                                            </>
                                        );
                                    }
                                })()}
                            </p>
                            <h5 className="mb-1 font-bold uppercase">Descrição da Tarefa:</h5>
                            <div className="mb-6" dangerouslySetInnerHTML={{__html: props.data.descricao}}/>

                            <h6 className="mb-1 font-bold uppercase">Usuários envolvidos:</h6>
                            <div className="mb-5 text-sm">
                                {props.data.users.map((userTarefa, i) =>
                                    <span key={i} className={userTarefa.pivot.executando ? `text-green-600 font-bold` : ``}> {userTarefa.name}</span>
                                ).reduce((accu, elem) => {
                                    return accu === null ? [elem] : [...accu, ',', elem]
                                }, null)}
                            </div>

                            <div className="flex w-full mt-4">
                                <div className="flex items-center justify-start w-2/5">

                                    <button onClick={() => deleteItem(props.data.id)} hidden={props.data.user_id !== props.auth.user.id}
                                            className="px-5 py-2 border-red-500 border text-red-500 rounded uppercase transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
                                            title="Excluir Tarefa">
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </div>
                                <div className="flex items-center justify-end w-3/5">

                                    <Link href={route('tarefas.index')}
                                          className="px-5 py-2 ml-5 mr-5 bg-gray-200 border-transparent text-gray-900 rounded uppercase transition duration-300 hover:bg-gray-300 focus:outline-none"
                                          title="Listagem de Tarefas">
                                        Voltar
                                    </Link>

                                    <Link href={route('tarefas.edit', props.data.id)} hidden={props.data.status === 2}
                                          className="px-5 py-2 mr-5 bg-blue-500 border-transparent text-white rounded uppercase transition duration-300 hover:bg-blue-700 focus:outline-none"
                                          title="Editar Tarefa">
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </Link>

                                    <Modal modalTitle="Adicionar Comentário"
                                           openBtnText={<FontAwesomeIcon icon={faCommentDots}/>}
                                           openBtnTitle="Adicionar Comentário"
                                           closeBtnText="Cancelar" actionBtnText="Salvar"
                                           actionOpen={() => setData({
                                               id: null,
                                               conteudo: '',
                                               tarefa_id: props.data.id,
                                               user_id: props.auth.user.id
                                           })}
                                           actionConfirm={() => saveComentario()}>
                                        <ComentarioForm onHandleChange={setData} data={data} />
                                    </Modal>

                                    {(() => {
                                        if (props.data.status === 0) {
                                            return (
                                                <button onClick={() => changeStatus(1)}
                                                        className="px-5 py-2 ml-5 bg-green-500 border text-white rounded uppercase transition duration-300 hover:bg-green-700 focus:outline-none">
                                                    <FontAwesomeIcon icon={faPlay}/>
                                                </button>
                                            );
                                        } else if (props.data.status === 1) {
                                            return (
                                                <button onClick={() => changeStatus(2)}
                                                        className="px-5 py-2 ml-5 bg-green-700 border text-white rounded uppercase transition duration-300 hover:bg-green-900 focus:outline-none">
                                                    <FontAwesomeIcon icon={faCheck}/>
                                                </button>
                                            );
                                        }
                                    })()}

                                </div>
                            </div>
                        </div>
                    </div>

                    {props.data.comentarios.map((comentario) =>
                        <div key={comentario.id} className="bg-white mt-5 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="w-full">
                                    <h3 className="inline-block mb-2 text-lg font-bold text-gray-900">{comentario.user.name}:</h3>
                                    <div className="mb-6" dangerouslySetInnerHTML={{__html: comentario.conteudo}}/>
                                    <div className="w-full">
                                        <small className="italic">Comentado em {comentario.created_at}</small>
                                        {(() => {
                                            if (comentario.user_id == props.auth.user.id) {
                                                return (
                                                    <>
                                                        {/*<Link href={route('tarefas.edit', comentario.id)}
                                                              className="float-right px-5 py-2 ml-4 bg-indigo-500 border-indigo-500 border text-white text-xs rounded uppercase transition duration-300 hover:bg-indigo-700 focus:outline-none"
                                                              title="Editar Tarefa">
                                                            <FontAwesomeIcon icon={faPenToSquare}/>
                                                        </Link>*/}
                                                        <Modal modalTitle="Editar Comentário"
                                                               openBtnText={<FontAwesomeIcon icon={faPenToSquare}/>}
                                                               openBtnTitle="Editar Comentário"
                                                               openBtnClass="float-right px-5 py-2 ml-4 bg-indigo-500 border-indigo-500 border text-xs"
                                                               closeBtnText="Cancelar" actionBtnText="Salvar"
                                                               actionOpen={() => setData({
                                                                   id: comentario.id,
                                                                   conteudo: comentario.conteudo,
                                                                   tarefa_id: props.data.id,
                                                                   user_id: props.auth.user.id
                                                               })}
                                                               actionConfirm={() => saveComentario()}>
                                                            <ComentarioForm onHandleChange={onHandleChange} data={data} />
                                                        </Modal>

                                                        <button onClick={() => deleteComentario(comentario.id)}
                                                                className="float-right px-5 py-2 border-red-500 border text-red-500 text-xs rounded uppercase transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
                                                                title="Excluir Tarefa">
                                                            <FontAwesomeIcon icon={faTrashCan}/>
                                                        </button>
                                                    </>
                                                );
                                            }
                                        })()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
