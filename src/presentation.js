import { Route } from 'react-router-dom'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import Slide from './slide'

const slideUrl = props => `/${props.i}`

const SlideRoute = props => (
  <Route path={slideUrl(props)} render={_ => <Slide {...props} />} />
)

const LinkNav = props => {
  const arr = React.Children.toArray(props.children)
  return React.Children.map(props.children, (child, i) =>
    React.cloneElement(child, {
      i,
      prev: i - 1 >= 0 ? i - 1 : undefined,
      next: i + 1 <= arr.length - 1 ? i + 1 : undefined
    })
  )
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Theme name={Theme.names.light}>
        <LinkNav>
          <SlideRoute title="Child">Here are things</SlideRoute>

          <SlideRoute title="Parent 2" />
        </LinkNav>
      </Theme>
    )
  }
}
