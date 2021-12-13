import { Component } from 'react';
import './new.css';

class New extends Component {

    state = {
        gradient: '',
        gradient1: ''
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        const regex = new RegExp('^#([0-9a-f]{3}){1,2}$');

        if(regex.test(e.target.value)) {
            
        } else {
            e.nativeEvent.path[2][2].setAttribute("disabled", "disabled")
        }

        if(regex.test(e.nativeEvent.path[1].childNodes[0].value) && regex.test(e.nativeEvent.path[1].childNodes[1].value)) {
            e.nativeEvent.path[2][2].removeAttribute("disabled")
        }
    }

    onSubmit = (e) => {
            e.preventDefault();

            if (this.state.gradient && this.state.gradient1) {
                    this.props.addGradient(this.state.gradient, this.state.gradient1);
                    this.setState({
                        gradient: '',
                        gradient1: ''
                    })

                    this.setState({
                        gradient: '',
                        gradient1: ''
                    })
            }
    }

    render() {
        const {gradient, gradient1} = this.state;
        return (
            <div className="new__form">
                <form onSubmit={this.onSubmit}>
                    <div className="new__form_wrapper">
                        <input onChange={this.onChangeInput} name='gradient' value={gradient} className="new__form_input" type="text"/>
                        <input onChange={this.onChangeInput} name='gradient1' value={gradient1} className="new__form_input" type="text"/>
                    </div>
                    <button className="new__form_btn" type="submit">
                        add a new gradient
                    </button>
                </form>
            </div>
        )
    }
}

export default New;