import React, { Component } from 'react'
import Admindriverscard from './Admindriverscard'
import Admindriverslist from './Admindriverslist'

export class Serviceprovider extends Component {
  render() {
    return (
      <div>
        <Admindriverscard/>
        <Admindriverslist/>
      </div>
    )
  }
}

export default Serviceprovider
