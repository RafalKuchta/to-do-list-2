import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

let counter = 9;
class App extends Component {
  state = {
    tasks: [

     ]
  }

  doneTask = (id) => {
    // console.log("done in App");
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks,
    })
  }

  deleteTask = (id) => {
    console.log("delete in App");
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  addTaskApp = (props) => {
    const task = {
      id: counter + 1,
      text: props.text,
      date: props.date,
      active: true,
      important: props.checked,
      finishDate: new Date().getTime()
    }
    counter++
    const tasks = [...this.state.tasks, task]

    this.setState({
      tasks
    })

  }

  render() {
    return (
      <div className="App">
        <div className="toDoApp">
          <h1>TO DO APP</h1>
        </div>

        <AddTask add={this.addTaskApp} />
        <hr />
        <TaskList tasks={this.state.tasks} done={this.doneTask} delete={this.deleteTask} />
      </div>
    );
  }
}

export default App;
