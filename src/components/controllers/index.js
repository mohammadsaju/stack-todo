import React from 'react';
import { Row, Col } from 'reactstrap';
import BulkController from './BulkController';
import FilterController from './FilterController';
import SearchPanel from './SearchPanel';
import ViewController from './ViewController';

const Controller = ({term, handleSearch, toggleForm, handleFilter, view, changeView, clearCompleted, clearSelected, reset}) => {
    return (
       <div>
        <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
        />
        <Row className='mt-4'>
            <Col md={{size: 4}}>
                <FilterController handleFilter={handleFilter}/>
            </Col>
            <Col md={{size: 4}}>
                <ViewController view={view} changeView={changeView}/>
            </Col>
            <Col md={{size: 4}}>
                <div className='ms-auto'>
                   <BulkController clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset}/>
                </div>
            </Col>
        </Row>
       </div>
    )
}

export default Controller;
