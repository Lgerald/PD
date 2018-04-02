import React from 'react'
import Select from 'react-select'
//import PropTypes from 'prop-types'

export default class BoroughForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      value: [],
      rtl: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleCheckBox = this.toggleCheckBox.bind(this)
    this.toggleRtl = this.toggleRtl.bind(this)
  }
  handleChange(value) {
    this.setState({value})
  }
  toggleCheckBox(e) {
    this.setState({
      [e.target.value]: e.target.checked
    })
  }
  toggleRtl(e) {
    let rtl = e.target.checked
    this.setState = {rtl}
  }

  render() {
    const {disabled, stayOpen, value, removeSelected, rtl} = this.state
    const options = [
      {label: 'Manhattan', value: 'Manhattan'},
      {label: 'Brooklyn', value: 'Brooklyn'},
      {label: 'Bronx', value: 'Queens'},
      {label: 'Long Island', value: 'Long Island'}
    ]
    return (
      <div>
        <Select
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleChange}
          options={options}
          removeSelected={removeSelected}
          rtl={rtl}
          simpleValue
          value={value}
          placeholder="Borough"
        />
      </div>
    )
  }
}

// Preference.propTypes = {
//   options: {
//     value: PropTypes.string
//   }
// }
