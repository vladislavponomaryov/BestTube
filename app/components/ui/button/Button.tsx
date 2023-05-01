import React, { FC, ReactNode } from 'react'

interface Button {
	classname: string
	children?: ReactNode
	clickHandler?: any
}

const Button: FC<Button> = ({ classname, children, clickHandler }) => {
	return (
		<button className={classname} style={{ background: 'white' }} onClick={clickHandler}>
			{children}
		</button>
	)
}

export default Button
