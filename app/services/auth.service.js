import { instance } from 'api'
import JsCookie from 'js-cookie'

class AuthService {
	async main(type, email, password) {
		try {
			const { data } = await instance.post(`/auth/${type}`, { email, password })
			if (data.token) JsCookie.set('token', data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
