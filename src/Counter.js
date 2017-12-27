import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    onCounterClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        const button = <button className="button" onClick={this.onCounterClick}>
            CLICK HERE
        </button>;

        return (<div className="counter_container">
            <div className="counter_label">
                Counter is:
            </div>
            <div className="counter_value">
                {this.state.counter}
            </div>
            {button}
        </div>);
    }
}

export default Counter;