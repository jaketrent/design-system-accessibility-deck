import Card from '@pluralsight/ps-design-system-card/react'
import { EqualColumnLayout } from '@pluralsight/ps-design-system-layout/react'
import React from 'react'
import styleable from 'react-styleable'
import * as Text from '@pluralsight/ps-design-system-text/react'

import css from './purpose.module.css'

export default styleable(css)(props => (
  <div className={props.css.slide}>
    <Text.Heading>
      <h1>Design System Purposes</h1>
    </Text.Heading>
    <div className={props.css.titleBar} />
    <EqualColumnLayout count={EqualColumnLayout.counts.three}>
      <Card
        title={<Card.Title>Common design language</Card.Title>}
        image={
          <Card.Image src="https://design-system.pluralsight.com/static/img/course3.jpg" />
        }
      />
      <Card
        title={<Card.Title>Consistent UI</Card.Title>}
        image={
          <Card.Image src="https://design-system.pluralsight.com/static/img/course3.jpg" />
        }
      />
      <Card
        title={<Card.Title>Increase speed and quality of work</Card.Title>}
        image={
          <Card.Image src="https://design-system.pluralsight.com/static/img/course3.jpg" />
        }
      />
    </EqualColumnLayout>
    <div>{props.children}</div>
  </div>
))
