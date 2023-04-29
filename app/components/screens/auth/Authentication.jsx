import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import AuthService from 'services/auth.service'

import MainLayout from 'components/layout/MainLayout'

import Button from 'components/ui/button/Button'
import Field from 'components/ui/field/Field'

const Authentication = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	const onSubmit = data => mutate(data)

	const { mutate, isLoading } = useMutation(['auth'], ({ email, password }) => AuthService.main(type, email, password), {
		onSuccess: data => {
			console.log(data)
			reset()
		}
	})

	return (
		<MainLayout>
			<h1>Authentication</h1>
			{isLoading && <h3>Loading...</h3>}
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
