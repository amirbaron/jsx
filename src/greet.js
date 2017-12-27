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
        return (<div>
            <input onChange={this.onChange}/>
            <div>
                Hey {this.state.greet}
            </div>
        </div>);

    }
}

export default Greeter;