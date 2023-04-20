import { MyContext } from 'index'
import { useContext } from 'react'

export const useAuth = () => {
	const value = useContext(MyContext)

	return {
		isAuth: true
	}
}
