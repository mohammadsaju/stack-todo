import React from 'react';
import {CustomInput, Label} from 'reactstrap';

const ViewController = ({view, changeView}) => {
    return (
        <div className='d-flex'>
            <Label for='list-view' className='me-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    value='list'
                    id='list-view'
                    onChange={changeView}
                    className='d-inline-block me-2'
                    checked={view === 'list'}
                />
                listview
            </Label>
            <Label for='table-view' className='me-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    value='table'
                    id='table-view'
                    onChange={changeView}
                    className='d-inline-block me-2'
                    checked={view === 'table'}
                /> 
                Tableview
            </Label>
        </div>
    )
}

export default ViewController;
