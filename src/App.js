import React, { Component, PropTypes } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hello world</h1>
        <p>Welcome to react...</p>
        <p>{name}, react seems cool...</p>
      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

App.defaultProps = {
  name: "Anastasiya"  
}

// const App = () => <h1>Hello word from stateless!!!</h1>

export default App;
