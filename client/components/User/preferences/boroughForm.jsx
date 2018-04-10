import React from 'react'
import Select from 'react-select'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'

const BoroughForm = createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: PropTypes.string
  },
  getInitialState() {
    return {
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      value: []
    }
  },
  handleChange(value) {
    this.setState({value})
  },
  toggleCheckBox(e) {
    this.setState({
      [e.target.value]: e.target.checked
    })
  },

  render: function() {
    const {disabled, stayOpen, value, removeSelected} = this.state
    const options = [
      {label: 'Manhattan', value: 'Manhattan'},
      {label: 'Brooklyn', value: 'Brooklyn'},
      {label: 'Bronx', value: 'Bronx'},
      {label: 'Queens', value: 'Queens'},
      {label: 'Long Island', value: 'Long Island'}
    ]
    return (
      <div className="borough-form">
        <form>
          <Select
            closeOnSelect={!stayOpen}
            disabled={disabled}
            multi
            onChange={this.handleChange}
            options={options}
            removeSelected={removeSelected}
            simpleValue
            value={value}
            placeholder="Borough"
          />
        </form>
      </div>
    )
  }
})

export default BoroughForm

// export default BoroughForm

// Preference.propTypes = {
//   options: {
//     value: PropTypes.string
//   }
// }
