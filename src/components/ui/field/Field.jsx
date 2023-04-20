import React from 'react'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div>
			<input {...register(name, options)} {...rest} />
			<div>{error && error}</div>
		</div>
	)
}

export default Field
