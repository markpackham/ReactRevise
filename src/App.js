import React, {Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out the rubbish',
                completed: false
            },
            {
                id: 2,
                title: 'Brush teeth',
                completed: true
            },
            {
                id: 3,
                title: 'Feed the sheep',
                completed: false
            },
        ]
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
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    //Add a list item
    addTodo = (title) => {
        const newTodo = {
            id: 4,
            //In ES6 since the key & value are the same we don't have to do title: title
            title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos} markComplete={this.markComplete}
                           delTodo={this.delTodo}
                    />
                </div>
            </div>
        );
    }
}

export default App;
