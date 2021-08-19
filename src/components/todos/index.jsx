import React, { Component } from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import shortid from 'shortid';
import Controller from '../controllers';
import ListView from '../list-item';
import TableView from '../table-view';
import TodoForm from '../todo-form';

class Todos extends Component {
    state = {
        todos: [
            {
                id: 'dkfjdfdkjf',
                text: 'react is awesome',
                description: 'yo yo you fa pa pui',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'dfedfdre',
                text: 'dambo is a killer person',
                description: 'he is very very noughty man',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'dfedfgfgfdre',
                text: 'he is panu',
                description: 'he is very very noughty man',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filter: 'all'
    };
    toggleSelect = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isSelect = !todo.isSelect;
        this.setState({todos});
    }
    toggleComplete = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isComplete = !todo.isComplete;
        this.setState({todos});
    }
    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }
    performSearch = () => {
        return this.state.todos.filter(todo => {
            return todo.text
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
        }
            
    )
    }
    handleSearch = (value) => {
        this.setState({searchTerm: value});
    }
    createTodo = todo => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;
        const todos = [todo, ...this.state.todos];
        this.setState({todos});
        this.toggleForm();
    }
    handleFilter = (filter) => {
        this.setState({filter: filter})
    }
    performFilter = (todos) => {
        const {filter} = this.state;
        if(filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }
    changeView = (event) => {
        this.setState({view: event.target.value})
    }
    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete);
        this.setState({todos});
    }
    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({todos});
    }
    reset = () => {
        this.setState({
            isOpenTodoForm: false,
            searchTerm: '',
            view: 'list',
            filter: 'all'
        })
    }

    getView = () => {
        let allTodos = this.performSearch();
        allTodos = this.performFilter(allTodos);
        return this.state.view === 'list' ? (
            <ListView 
            todos={allTodos} 
            toggleSelect={this.toggleSelect} 
            toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView
             todos={allTodos} 
             toggleSelect={this.toggleSelect} 
             toggleComplete={this.toggleComplete}
             />
        )
    }

    render() {
        return (
            <div>
                <h1 className='display-4 text-center my-3'>Stact Todos</h1>
                <div className='my-5'>
                    <Controller
                    term={this.state.searchTerm}
                    handleSearch={this.handleSearch}
                    toggleForm={this.toggleForm}
                    view={this.state.view}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearCompleted={this.clearCompleted}
                    clearSelected={this.clearSelected}
                    reset={this.reset}
                    />
                </div>
                <div>
                    {this.getView()}
                </div>
                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader>Create new todo item</ModalHeader>
                    <ModalBody>
                        <TodoForm
                        createTodo={this.createTodo}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default Todos;