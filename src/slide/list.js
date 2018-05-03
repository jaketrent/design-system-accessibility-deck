import React from 'react'
import styleable from 'react-styleable'
import * as Text from '@pluralsight/ps-design-system-text/react'

import css from './list.module.css'

export default styleable(css)(props => (
  <div className={props.css.slide}>
    <Text.Heading>
      <h1>{props.title}</h1>
    </Text.Heading>
    <div className={props.css.titleBar} />
    <Text.List type={Text.List.types.bulleted}>
      {props.list.map((item, i) => (
        <Text.List.Item key={i} className={props.css.item}>
          {item}
        </Text.List.Item>
      ))}
    </Text.List>
    <div>{props.children}</div>
  </div>
))
