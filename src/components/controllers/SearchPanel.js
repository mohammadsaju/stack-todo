import React from 'react';
import {Input, Button} from 'reactstrap';

const SearchPanel = ({term, handleSearch, toggleForm}) => {
    return (
        <div className='d-flex'>
            <Input
            className='me-3'
            placeholder='search for todos...'
            value={term}
            onChange={(e) => handleSearch(e.target.value)}
            />
            <Button className='btn btn-secondary' onClick={toggleForm}>New</Button>
        </div>
    )
}

export default SearchPanel;
