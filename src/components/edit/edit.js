import { Component } from 'react';

import '../new/new.css'

class Edit extends Component {

    state = {
        gradient: this.props.data.gradient.toString(),
        gradient1: this.props.data.gradient1.toString()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        const regex = new RegExp('^#([0-9a-f]{3}){1,2}$');

        if(regex.test(e.target.value)) {
            console.log('YES')
            // e.nativeEvent.path[2][2].removeAttribute("disabled")
            
        } else {
            console.log('NO')
            e.nativeEvent.path[2][2].setAttribute("disabled", "disabled")
        }

        if(regex.test(e.nativeEvent.path[1].childNodes[0].value) && regex.test(e.nativeEvent.path[1].childNodes[1].value)) {
            e.nativeEvent.path[2][2].removeAttribute("disabled")
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newGradient = {
            ...this.state
        }
        this.props.editGradient(this.props.index, newGradient)
    }

    render() {
        return(
            <div className="new__form">
                <form onSubmit={this.onSubmit}>
                    <div className="new__form_wrapper">
                        <input onChange={this.handleChange} name='gradient' value={this.state.gradient} className="new__form_input" type="text"/>
                        <input onChange={this.handleChange} name='gradient1' value={this.state.gradient1} className="new__form_input" type="text"/>
                    </div>
                    <button className="new__form_btn" type="submit">
                        edit gradient
                    </button>
                </form>
            </div>
        )
    }
}

export default Edit;