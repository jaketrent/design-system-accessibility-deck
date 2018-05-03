import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'
import OpenSlide from './open'
import ListSlide from './list'
import TitleSlide from './title'

import css from './index.module.css'

const Slide = styleable(css)(props => {
  const { css, ...propsNoCss } = props
  if (props.open) return <OpenSlide {...propsNoCss} />
  else if (props.list) return <ListSlide {...propsNoCss} />
  else if (props.title) return <TitleSlide {...propsNoCss} />
  else
    return (
      <div className={props.css.slide}>
        {props.title}
        {props.children}
      </div>
    )
})
Slide.propTypes = {
  title: PropTypes.string
}

export default Slide
