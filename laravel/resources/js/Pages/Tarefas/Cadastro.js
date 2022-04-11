import React, {useEffect} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ValidationErrors from "@/Components/ValidationErrors.js";
import Label from "@/Components/Label.js";
import Input from "@/Components/Input.js";
import Checkbox from "@/Components/Checkbox.js";
import Button from "@/Components/Button.js";
import Textarea from "@/Components/Textarea.js";

export default function TarefasCadastro(props) {

    const {data, setData, post, put, processing, errors} = useForm(props.data);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if(props.data.id){
            put(route('tarefas.update', props.data.id));
        }else{
            post(route('tarefas.store'));
        }

    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editando Tarefa '{data.titulo}'</h2>}
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


                                <div className="flex items-center justify-end mt-4">

                                    <Button className="ml-4" processing={processing}>
                                        Salvar
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
