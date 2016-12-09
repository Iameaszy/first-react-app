import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import People from './People';

class App extends Component {
  constructor() {
    super()
    this.state = {
      age: 22,
      sex: 'male',
      currentEvent: '----',
      people: [{name: "fayi", age: 22}, {name: "Anastasiya", age: 20}]
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({age: ReactDOM.findDOMNode(this.refs.age.refs.inp).value})
    this.setState({sex: ReactDOM.findDOMNode(this.refs.sex.refs.inp).value})
    this.setState({currentEvent: e.type})
  }

  render() {
    const name = this.props.name;
    return (
      <div>
        <div>
          <Greeting>Hello world <Heart /></Greeting>
          <p>Welcome to react...</p>
          <p>{name}, react seems cool...</p>
          Age: <Widget ref="age" update={this.update}></Widget>
          Sex: <Widget ref="sex" update={this.update}></Widget>
        <p>I am {this.state.age} years old. My sex is {this.state.sex}</p>
        </div>

        <hr/>

        <div>
          <textarea
            cols="30"
            rows="10"
            onCopy={this.update}
            onFocus={this.update}
            onBlur={this.update}
            onKeyPress={this.update}/>
          <h1>{this.state.currentEvent}</h1>
        </div>

        <div>
          <h3>List of people</h3>
          <People people={this.state.people} />
        </div>
      </div>
    )
  }
}

const Greeting = (props) => <h1>{props.children}</h1>
const Heart = () => <span>&hearts;</span>

class Widget extends Component {
  render() {
    return (
      <input ref="inp" type="text" onChange={this.props.update}/>
    );
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
