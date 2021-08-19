import React from 'react';
import {CustomInput, Button, Table} from 'reactstrap';

const RowItem = ({todo, toggleSelect, toggleComplete}) => (
            <tr>
            <th scope='row'>
                <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
                />
            </th>
            <th>{todo.time.toDateString()}</th>
            <th>{todo.text}</th>
            <th>
                <Button
                className='ms-auto'
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </th>
        </tr>
    )

const TableView = ({todos, toggleSelect, toggleComplete}) => {
    return(
        <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <RowItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
                />
            ) 
            )}
        </tbody>
    </Table>
    )
};

export default TableView;