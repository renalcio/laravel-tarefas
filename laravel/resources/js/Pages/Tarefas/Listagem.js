import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, InertiaLink, Link, useForm} from '@inertiajs/inertia-react';
import Table from "@/Components/Table.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare, faEye, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Inertia} from "@inertiajs/inertia";
import StatusBadge from "@/Components/Tarefas/StatusBadge.js";


export default function TarefasListagem(props) {

    function deleteItem(id) {
        console.log(id);

        if (confirm("Tem certeza que deseja apagar a tarefa?")) {
            Inertia.delete(route("tarefas.destroy", id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Listagem de Tarefas</h2>}
        >
            <Head title="Listagem de Tarefas"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Table>
                                <Table.Head>
                                    <Table.HeadItem>ID</Table.HeadItem>
                                    <Table.HeadItem>Título</Table.HeadItem>
                                    <Table.HeadItem>Autor</Table.HeadItem>
                                    <Table.HeadItem className="text-center">Status</Table.HeadItem>
                                    <Table.HeadItem className="text-center">Criado em</Table.HeadItem>
                                    <Table.HeadItem></Table.HeadItem>
                                </Table.Head>
                                <Table.Body>
                                    {props.tarefas.map((tarefa) =>
                                            <Table.Row key={tarefa.id}>
                                                <Table.RowItem>{tarefa.id}</Table.RowItem>
                                                <Table.RowItem>{tarefa.titulo}</Table.RowItem>
                                                <Table.RowItem>{tarefa.user.name}</Table.RowItem>
                                                <Table.RowItem className="text-center">

                                                    <StatusBadge status={tarefa.status}>{tarefa.status_nome}</StatusBadge>

                                                    {/*<span className={`relative inline-block px-3 py-1 font-semibold text-`+tarefa.status_color+`-900 leading-tight`}>
                                                        <span aria-hidden className={`absolute inset-0 bg-`+tarefa.status_color+`-200 opacity-50 rounded-full`}> </span>
                                                        <span className="relative text-xs">{tarefa.status_nome}</span>
                                                    </span>*/}
                                                </Table.RowItem>
                                                <Table.RowItem className="text-center">{tarefa.created_at}</Table.RowItem>
                                                <Table.RowItem className="text-right">
                                                    <Link href={route('tarefas.edit', tarefa.id)}
                                                          className="px-3 py-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">
                                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                                    </Link>

                                                    <Link href={route('tarefas.show', tarefa.id)}
                                                          className="px-3 py-2 ml-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                                                        <FontAwesomeIcon icon={faEye}/>
                                                    </Link>

                                                    <button onClick={() => deleteItem(tarefa.id)}
                                                            className="px-3 py-2 ml-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                        <FontAwesomeIcon icon={faTrashCan}/>
                                                    </button>
                                                </Table.RowItem>
                                            </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
