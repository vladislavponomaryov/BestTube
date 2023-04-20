import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import MainLayout from 'components/layout/MainLayout'

import Button from 'components/ui/button/Button'
import Field from 'components/ui/field/Field'

const Authentication = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onChange' })

	const onSubmit = data => console.log(data)

	return (
		<MainLayout>
			<h1>Authentication</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					register={register}
					name='email'
					type='text'
					options={{ required: 'Email is required' }}
					error={errors?.email?.message}
					placeholder='Enter email'
				/>
				<Field
					register={register}
					name='password'
					type='password'
					options={{ required: 'Password is required' }}
					error={errors?.email?.message}
					placeholder='Enter password'
				/>
				<div>
					<Button clickHandler={() => setType('login')}>Sign In</Button>
					<Button clickHandler={() => setType('register')}>Sign Up</Button>
				</div>
			</form>
		</MainLayout>
	)
}

export default Authentication
