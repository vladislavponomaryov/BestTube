import userAvatar from 'assets/images/userAvatars/10.png'
import Button from 'components/ui/button/Button'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function HeaderNavigation() {
	const { isAuth } = useAuth()
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