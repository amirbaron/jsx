import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';
import Greeter from './greet';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Counter/>
                <Greeter/>
            </div>
        );
    }
}

export default App;
