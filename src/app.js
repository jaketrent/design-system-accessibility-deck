import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Presentation from './presentation'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Presentation />
      </BrowserRouter>
    )
  }
}
