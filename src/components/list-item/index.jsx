import React from 'react';
import {ListGroup, ListGroupItem, CustomInput, Button} from 'reactstrap';

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <CustomInput
            type='checkbox'
            id={todo.id}
            checked={todo.isSelect}
            onChange={() => toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button
            className='ms-auto'
            color={todo.isComplete ? 'danger' : 'success'}
            onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>
        </ListGroupItem>
    )
}

const ListView = ({todos, toggleComplete, toggleSelect}) => {
    return(
        <ListGroup>
            {todos.map((todo) => (
                <ListItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
                />
            )
            )}
        </ListGroup>
    )
}

export default ListView;
