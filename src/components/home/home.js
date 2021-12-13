import { Component } from 'react';
import Gradient from '../gradientitem/gradient';

import './home.css'

class Home extends Component {

    render() {

        const gradients = this.props.data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <Gradient
                key={id}
                {...itemProps}
                deleteGradient={() => this.props.deleteGradient(id)}/>
            )
        })
        

        return (
            <div className="home">
                {gradients}
            </div>
        )
    }
}

export default Home;