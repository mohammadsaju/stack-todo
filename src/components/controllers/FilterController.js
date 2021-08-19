import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';

const FilterController = ({handleFilter}) => {
    return (
        <ButtonGroup>
            <Button onClick={() => handleFilter('all')}>All</Button>
            <Button onClick={() => handleFilter('running')}>running</Button>
            <Button onClick={() => handleFilter('completed')}>completed</Button>
        </ButtonGroup>
    )
}

export default FilterController;
