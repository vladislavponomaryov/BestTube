import {MyContext} from 'react/src/index'
import {useContext} from 'react'

export const useAuth = () => {
	const value = useContext(MyContext)

	return {
		isAuth: true
	}
}
