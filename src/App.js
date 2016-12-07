import React, { Component, PropTypes } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      age: 22
    }
  }

  update(e) {
    this.setState({age: e.target.value})
  }

  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hello world</h1>
        <p>Welcome to react...</p>
        <p>{name}, react seems cool...</p>
        <Widget update={this.update.bind(this)}></Widget>
        <p>I am {this.state.age} years old</p>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update}/>

App.propTypes = {
  name: PropTypes.string.isRequired
}

App.defaultProps = {
  name: "Anastasiya"
}

// const App = () => <h1>Hello word from stateless!!!</h1>

export default App;
