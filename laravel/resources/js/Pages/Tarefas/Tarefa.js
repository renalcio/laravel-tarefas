import React, {useEffect} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ValidationErrors from "@/Components/ValidationErrors.js";
import Label from "@/Components/Label.js";
import Input from "@/Components/Input.js";
import Checkbox from "@/Components/Checkbox.js";
import Button from "@/Components/Button.js";
import Textarea from "@/Components/Textarea.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {Inertia} from "@inertiajs/inertia";

export default function TarefasCadastro(props) {

    const {data, setData, post, put, processing, errors} = useForm(props.data);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (props.data.id) {
            put(route('tarefas.update', props.data.id));
        } else {
            post(route('tarefas.store'));
        }

    };

    function deleteItem(id) {
        if (confirm("Tem certeza que deseja apagar a tarefa?")) {
            Inertia.delete(route("tarefas.destroy", id));
        }
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editando Tarefa
                '{data.titulo}'</h2>}
        >
            <Head title="Gerenciador de Tarefas"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ValidationErrors errors={errors}/>

                            <form onSubmit={submit}>
                                <div>
                                    <Label forInput="titulo" value="Título"/>

                                    <Input
                                        type="text"
                                        name="titulo"
                                        value={data.titulo}
                                        className="mt-1 block w-full"
                                        autoComplete="titulo"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="about" className="block mt-2 text-sm font-medium text-gray-700">
                                        Descrição
                                    </label>
                                    <div className="mt-1">
                                        <Textarea
                                            id="descricao"
                                            name="descricao"
                                            className="mt-1 block w-full"
                                            value={data.descricao}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Descreva os detalhes da tarefa
                                    </p>
                                </div>


                                <div className="flex w-full mt-4">
                                    <div className="flex items-center justify-start w-2/5">

                                        <button onClick={() => deleteItem(data.id)}
                                                className="px-5 py-2 ml-2 border-red-500 border text-red-500 rounded uppercase transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                            Excluir
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-end w-3/5">

                                        <Link href={route('tarefas.show', data.id)}
                                              className="px-5 py-2 ml-4 bg-blue-500 border-transparent text-white rounded uppercase transition duration-300 hover:bg-blue-700 focus:outline-none">
                                            Detalhes
                                        </Link>

                                        <Link href={route('tarefas.index')}
                                              className="px-5 py-2 ml-4 bg-gray-500 border-transparent text-white rounded uppercase transition duration-300 hover:bg-gray-700 focus:outline-none">
                                            Cancelar
                                        </Link>

                                        <Button className="ml-4 bg-green-500 hover:bg-green-700" processing={processing}>
                                            Salvar
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
