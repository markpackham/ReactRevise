import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';
/*
Unique User ID was used for the ids but is no longer
needed now we've got dummy data from
https://jsonplaceholder.typicode.com
 */
//import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
    state = {
        todos: [

            /*
            {
                id: uuid.v4(),
                title: 'Take out the rubbish',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Brush teeth',
                completed: true
            },
            {
                id: uuid.v4(),
                title: 'Feed the sheep',
                completed: false
            },
            */

        ]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(res => this.setState({todos: res.data}))
    }

    /*
    Toggle Complete (ticking toggles on off line through on list)
     */
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    //Delete task (filter out the one we're deleting)
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    }

    //Add a list item
    addTodo = (title) => {
        /*
        const newTodo = {
            id: uuid.v4(),
            //In ES6 since the key & value are the same we don't have to do title: title
            title,
            completed: false
        }
        */
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        }).then(res => this.setState({todos: [...this.state.todos, res.data]})
        )
        ;
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
