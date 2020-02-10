import React from 'react';
import TableHeader from "./tableheader"
import TableBody from "./tablebody";

const Table = ({columns, sortColumn, onSort, data}) => {
    return (
            <table className="table">
                <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
                <TableBody data={data} columns={columns}/>
            </table>
    );
};

export default Table;
