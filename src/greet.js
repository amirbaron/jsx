import React, {Component} from 'react';
import './Counter.css';

class Greeter extends Component {

    constructor() {
        super();
        this.state = {greet: ''};
    }

    onChange = (e) => {
        this.setState({greet: e.target.value});
    }

    render() {
        return (<span>
            <input onChange={this.onChange}/>
            <span>
                Hey {this.state.greet}
            </span>
        </span>);

    }
}

export default Greeter;