import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '' 
        }
    }

    
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({name: "Md TAufeeque Alam"});
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }
    
    _onChange (event) {
        let x = event.target.value;
        console.log(x);
        this.setState({name: x});
    }
    
    render() {
        return (
            <div>
                <h3>Hello {this.state.name}</h3>

                <input type="text" name="name" value={this.state.name} onChange={this._onChange.bind(this)} />
            </div>
        );
    }
}

export default Content;