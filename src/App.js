import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Todos from './components/todos';

const App = () => {
  return (
    <Container className='my-4'>
      <Row>
        <Col>
          <Todos/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;


