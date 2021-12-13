import { Component } from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import Home from './components/home/home';
import New from './components/new/new';
import Edit from './components/edit/edit';
import Full from './components/full/full';

import './App.css';

class App extends Component {
    constructor() {
        super()
        this.maxId = 4;
    }
    
    state = {
        data: [
            {gradient: '#713af2', gradient1: '#a46bca', id: 1},
            {gradient: '#52acf2', gradient1: '#e20caa', id: 2},
            {gradient: '#a85caa', gradient1: '#07f7f2', id: 3}
        ]
    }
    
    addGradient = (gradient, gradient1) => {
        const newItem = {
            gradient,
            gradient1,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    deleteGradient = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    editGradient = (index, newGradient) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === index) {
                    return {...item, ...newGradient}
                }
                return item
               
            })
        }))
    }

  render () { 

    const edit = Object.keys(this.state.data).map(key => {
            return <Edit
            key={key}
            data={this.state.data[key]}
            index={+key + 1}
            editGradient={this.editGradient}
            />
            })

    return (
        <>
            <header className="header">
                <div>
                    <Link to="/">HOME</Link>
                    <Link to="/new">NEW</Link>
                    <Link to="/edit">EDIT</Link>
                </div>
                <div>
                    <Link to="/full">FULL</Link>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home deleteGradient={this.deleteGradient} data={this.state.data} edit={edit}/>}/>
                <Route path="/new" element={<New addGradient={this.addGradient}/>}/>
                <Route path="/edit" element={edit}/>
                <Route path="/full" element={<Full edit={edit} addGradient={this.addGradient} deleteGradient={this.deleteGradient} data={this.state.data}/>}/>
            </Routes>
        </>
    )
  }
}

export default App;

