import { Route, withRouter } from 'react-router-dom'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import Nav from './nav'
import PurposeSlide from './slide/purpose'
import Slide from './slide'

const slideUrl = props => `/${props.i}`

const SlideRoute = props => (
  <Route
    path={slideUrl(props)}
    render={_ => props.children || <Slide {...props} />}
  />
)

const Navigable = withRouter(props => {
  const currentI = parseInt(props.location.pathname.split('/').pop(), 10)
  const arr = React.Children.toArray(props.children)
  return React.Children.map(props.children, (child, i) =>
    React.cloneElement(child, {
      i
    })
  ).concat([
    <Nav
      key="nav"
      prev={currentI - 1 >= 0 ? currentI - 1 : undefined}
      next={currentI + 1 <= arr.length - 1 ? currentI + 1 : undefined}
    />
  ])
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Theme name={Theme.names.light}>
        <Navigable>
          <SlideRoute
            open
            title="Accessibility"
            subtitle="In the Design System"
          />

          <SlideRoute
            title="Design System Purposes"
            list={[
              'Common design language',
              'Consistent UI',
              'Increase speed and quality of work'
            ]}
          />

          <SlideRoute>
            <PurposeSlide />
          </SlideRoute>
        </Navigable>
      </Theme>
    )
  }
}
