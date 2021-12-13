import { Component } from 'react';

import Home from '../home/home';
import New from '../new/new';

class Full extends Component {
    render() {
        return (
            <>
                <New addGradient={this.props.addGradient}/>
                <Home deleteGradient={this.props.deleteGradient} data={this.props.data}/>
                {this.props.edit}
            </>
        )
    }
}

export default Full;
