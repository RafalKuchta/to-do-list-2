import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    // console.log(props.tasks.length)
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    console.log(done)
    // done.sort((a, b) => b.finishDate - a.finishDate)
    done.sort((a, b) => {
        if (a.finishDate > b.finishDate) return -1
        if (a.finishDate < b.finishDate) return 1
        return 0
    })

    active.sort((a, b) => {
        if (a.text > b.text) return 1
        if (a.text < b.text) return -1
        return 0
    })

    const tasksActive = active.map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done} />)

    const tasksDone = done.map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done} />)

    return (
        <div className="taskList">
            <h2>Zadania do zrobienia <em>({active.length})</em></h2>
            {tasksActive}
            <hr />

            <h3>Zadania zrobione <em>({done.length})</em></h3>
            {tasksDone.length > 5 && <em>lista ostatnich 5-ciu zadań</em>}
            {tasksDone.splice(0, 5)}
        </div>
    );
}

export default TaskList;