import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    onCounterClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
            <Counter counter={this.state.counter} onCounterClick={this.onCounterClick}/>
        );
    }
}

export default App;
