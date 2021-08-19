import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';

const BulkController = ({clearSelected, clearCompleted, reset}) => {
    return (
        <ButtonGroup>
            <Button color='danger' onClick={clearSelected}>Clear selected</Button>
            <Button color='danger' onClick={clearCompleted}>Clear completed</Button>
            <Button color='danger' onClick={reset}>Reset All</Button>
        </ButtonGroup>
    )
}

export default BulkController;