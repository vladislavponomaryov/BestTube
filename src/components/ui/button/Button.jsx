import React from 'react'

const Button = ({ classname, children, handler }) => {
	return <button onClick={handler}>{children && children}</button>
}

export default Button
