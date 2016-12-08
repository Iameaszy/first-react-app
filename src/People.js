import React, { PropTypes } from 'react'

const People = React.createClass({
  render () {
    return (
      <ul>
        {this.props.people.map(p =>
          <li key={p.name}>{p.name}: {p.age}</li>
        )}
      </ul>
    )
  }
})

People.propTypes = {
  people: PropTypes.array.isRequired
}

export default People;
