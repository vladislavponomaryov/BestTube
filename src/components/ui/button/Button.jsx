import React from 'react'

const Button = ({ classname, children, clickHandler = null }) => {
	return (
		<button className={classname} style={{ background: 'white' }} onClick={clickHandler}>
			{children}
		</button>
	)
}

export default Button
