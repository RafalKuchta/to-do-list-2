import React, { Component } from 'react';

const currentDate = new Date().toISOString().slice(0, 10)
class AddTask extends Component {
    state = {
        text: "",
        date: currentDate,
        checked: false,
    }

    addText = e => {
        this.setState({
            text: e.target.value
        })
    }

    addDate = e => {
        this.setState({
            date: e.target.value
        })
    }

    addChecked = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    addTask = () => {
        if (this.state.text.length > 3) {
            this.props.add(this.state);
            this.setState({
                text: "",
                date: currentDate,
                checked: false,
            })
        } else {
            return alert("Za mało znaków")
        }
    }

    render() {
        return (
            <div className="form">
                <input type="taxt" placeholder="wpisz zadanie..." value={this.state.text} onChange={this.addText} />
                <input type="checkbox" name="important" id="important" checked={this.state.checked} onChange={this.addChecked} />
                <label htmlFor="important">Priorytet</label><br />

                <label htmlFor="date">Do kiedy</label>
                <input className="date" type="date" value={this.state.date} onChange={this.addDate} /><br />

                <button onClick={this.addTask}><i class="fas fa-plus"></i></button>
            </div>
        );
    }
}

export default AddTask;