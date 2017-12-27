import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {

    render() {
        const button = <button className="button" onClick={this.props.onCounterClick}>
            CLICK HERE
        </button>;

        return (<div className="counter_container">
            <div className="counter_label">
                Counter is:
            </div>
            <div className="counter_value">
                {this.props.counter}
            </div>
            {button}
        </div>);
    }
}

export default Counter;