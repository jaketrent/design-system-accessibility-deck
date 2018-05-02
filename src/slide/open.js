import React from 'react'
import styleable from 'react-styleable'
import * as Text from '@pluralsight/ps-design-system-text/react'

import css from './title.module.css'

export default styleable(css)(props => (
  <div className={props.css.slide}>
    <Text.Heading>
      <h1>
        {props.i} - {props.title}
      </h1>
    </Text.Heading>
    <div className={props.css.titleBar} />
    <div>{props.children}</div>
  </div>
))
