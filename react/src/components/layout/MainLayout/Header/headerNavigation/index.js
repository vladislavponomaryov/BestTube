import userAvatar from 'react/src/assets/images/userAvatars/10.png'
import {useAuth} from 'react/src/hooks/useAuth'
import {useNavigate} from 'react-router-dom'

import Button from 'react/src/components/ui/button/Button'

export default function HeaderNavigation() {
	const { isAuth } = useAuth() // TODO: auth
	const navigate = useNavigate()

	return (
		<nav className='end'>
			<button id='button-mobile-search' className='icon'>
				<span className='_icon-search'></span>
			</button>
			<button className='button-create icon'>
				<span className='_icon-create'></span>
			</button>
			<button className='button-apps icon'>
				<span className='_icon-apps'></span>
			</button>
			<button className='button-notifications icon'>
				<span className='_icon-notifications'></span>
			</button>
			{isAuth ? (
				<button className='button-user'>
					<img src={userAvatar} alt='User avatar' />
				</button>
			) : (
				<Button classname={'button-user'} handler={() => navigate('/login')}>
					Login
				</Button>
			)}
		</nav>
	)
}
