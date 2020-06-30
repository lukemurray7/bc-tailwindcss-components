import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { onClick, type, text } = props

  return (
    <button type="button" onClick={onClick} className={`rounded-lg border bg-blue-500 p-2`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'default',
}

export default Button;
