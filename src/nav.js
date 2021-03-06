import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'
import { withRouter } from 'react-router'

import css from './nav.module.css'

const slideUrl = props => `/${props.i}`
const go = (history, i) => history.push(slideUrl({ i }))

class Nav extends React.Component {
  handleKeyUp = e => {
    const keys = {
      37: 'prev',
      39: 'next'
    }
    const buttonEl = this[keys[e.which]]
    if (buttonEl) buttonEl.click()
  }
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp)
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp)
  }
  render() {
    const { props } = this
    return (
      <div className={props.css.nav}>
        <Button
          appearance={Button.appearances.flat}
          innerRef={el => (this.prev = el)}
          onClick={_ => go(props.history, props.prev)}
          disabled={typeof props.prev === 'undefined'}
          size={Button.sizes.xSmall}
          icon={<Icon id={Icon.ids.caretLeft} />}
        />
        <Button
          appearance={Button.appearances.flat}
          innerRef={el => (this.next = el)}
          onClick={_ => go(props.history, props.next)}
          disabled={typeof props.next === 'undefined'}
          size={Button.sizes.xSmall}
          icon={<Icon id={Icon.ids.caretRight} />}
        />
      </div>
    )
  }
}
Nav.propTypes = {
  prev: PropTypes.number,
  next: PropTypes.number
}

export default withRouter(styleable(css)(Nav))
