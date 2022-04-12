import React, {useState, useContext} from 'react';

const Table = ({className = '',children}) => {

    return (
            <>
                <div className="flex flex-col items-start">
                    <table className={`min-w-full ` + className}>
                        {children}
                    </table>
                </div>
            </>
    );
};

const TableHead = ({className = '',trClassName,children}) => {
    return (
        <>
            <thead className={className}>
                <tr className={trClassName}>{children}</tr>
            </thead>
        </>
    );
};
const TableHeadItem = ({className = '',children}) => {
    return (
        <>
            <th className={`px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider ` + className}>{children}</th>
        </>
    );
};

const TableBody = ({className = '',children}) => {
    return (
        <>
            <tbody className={`bg-white ` + className}>{children}</tbody>
        </>
    );
};

const TableRow = ({className = '',children}) => {
    return (
        <>
            <tr className={className}>{children}</tr>
        </>
    );
};

const TableCell = ({className = '',children}) => {
    return (
        <>
            <td className={`px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-blue-900 text-sm leading-5 ` + className}>{children}</td>
        </>
    );
};

Table.Head = TableHead;
Table.HeadItem = TableHeadItem;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.RowItem = TableCell;

export default Table;
