import { Component } from 'react';
import './gradient.css';

class Gradient extends Component {
    render() {

        const {gradient, gradient1} = this.props;
        return (
            <div className="gradient__item" style={{background: `linear-gradient(${gradient}, ${gradient1})`}}>
                <div>{gradient}</div>
                <div>{gradient1}</div>
                <div onClick={this.props.deleteGradient} className="gradient__item_delete"></div>
            </div>
            
        )
    }
}

export default Gradient;