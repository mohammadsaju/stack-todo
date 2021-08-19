import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default class TodoForm extends Component {
    state = {
        text: '',
        description: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTodo(this.state);
        event.target.reset();
        this.setState({text: '', description: ''});
    }
    createTodo = (todo) => {

    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                    className='my-3'
                    name='text'
                    placeholder='Add a Task'
                    value={this.state.text}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input
                    className='my-3'
                    type='textarea'
                    name='description'
                    placeholder='About the task'
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit' className='btn btn-primary'>Create Task</Button>
            </Form>
        )
    }
}
