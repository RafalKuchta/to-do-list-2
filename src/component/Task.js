import React from 'react';

const Task = (props) => {
    const { text, date, id, important, active } = props.task
    // console.log(important)
    if (active) {
        return (
            <div>
                <p className="tasks">
                <div className="text">
                    {important ? <strong style={{ color: 'red' }}>{text}</strong> : <strong>{text}</strong>}
                    </div> 
                    <div className='dateDoneDelete'>
                     do {date}
                     <div className='DoneDelete'>
                    <button className="done" onClick={() => props.done(id)}><i class="fas fa-check"></i></button>
                    <button className="delete" onClick={() => props.delete(id)}><i class="far fa-trash-alt"></i></button>
                    </div>
                    </div>
                </p>
            </div>
        )
    } else {
        return (
            <div>
                <p className="tasks">
                <div className="text">
                    <strong>{text}</strong></div> 
                    <div className='dateDoneDelete'>
                    <em>zrobione do </em>
                    <div className="date">
                    {date}
                    </div>                
                    <p>Potwierdzenie wykonania</p>
                    <button className="deleteDone" onClick={() => props.delete(id)}><i class="far fa-trash-alt"></i></button>
                    </div>
                </p>
            </div>
        )
    }
}

export default Task;