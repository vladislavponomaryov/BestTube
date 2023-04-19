import userAvatar from '../../../../../assets/images/userAvatars/10.png'

export default function HeaderNavigation() {
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
			<button className='button-user'>
				<img src={userAvatar} alt='User avatar' />
			</button>
		</nav>
	)
}
