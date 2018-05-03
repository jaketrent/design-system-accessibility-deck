import React from 'react'
import styleable from 'react-styleable'
import * as Text from '@pluralsight/ps-design-system-text/react'

import css from './open.module.css'

export default styleable(css)(props => (
  <div className={props.css.open}>
    <Text.Heading className={props.css.title} size={Text.Heading.sizes.xLarge}>
      <h1>{props.title}</h1>
    </Text.Heading>
    <div className={props.css.titleBar} />
    <Text.Heading
      className={props.css.subtitle}
      size={Text.Heading.sizes.medium}
    >
      <h2>{props.subtitle}</h2>
    </Text.Heading>
  </div>
))
