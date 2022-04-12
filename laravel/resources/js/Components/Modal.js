import React from 'react';

const Modal = ({
                   openBtnText = 'Abrir Modal',
                   openBtnClass = '',
                   openBtnTitle = 'Abrir Modal',
                   closeBtnText = 'Fechar',
                   actionBtnText = '',
                   modalTitle = 'Título da Modal',
                   actionConfirm = () => {
                   },
                   actionOpen = () => {
                   },
                   width = 'w-2/4',
                   children
               }) => {
    const [showModal, setShowModal] = React.useState(false);

    const callOpen = () => {
        actionOpen();
        setShowModal(true);
    }
    const callConfirm = () => {
        actionConfirm();
        setShowModal(false);
    }

    return (
        <>
            <button
                className={`bg-indigo-500 text-white active:bg-indigo-700 font-bold uppercase px-5 py-2 rounded shadow outline-none focus:outline-none ease-linear transition-all duration-150 ` + openBtnClass}
                type="button"
                title={openBtnTitle}
                onClick={() => callOpen()}
            >
                {openBtnText}
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-4/5 my-6 mx-auto">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between px-5 py-4 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="mb-1 text-2xl font-semibold">
                                        {modalTitle}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-gray-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span
                                            className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-5 py-4 flex-auto">
                                    {children}
                                </div>
                                {/*footer*/}
                                <div
                                    className="items-center justify-end px-5 py-4 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="float-left text-gray-900 bg-gray-200 font-bold uppercase px-5 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150 hover:bg-gray-300 rounded"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {closeBtnText}
                                    </button>
                                    {(() => {
                                        if (actionBtnText) {
                                            return (
                                                <button
                                                    className="float-right bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => callConfirm()}
                                                >
                                                    {actionBtnText}
                                                </button>
                                            );
                                        }
                                    })()}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
                </>
            ) : null}
        </>
    );
}

export default Modal;
