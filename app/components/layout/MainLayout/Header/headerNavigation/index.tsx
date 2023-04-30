import userAvatar from 'assets/images/userAvatars/10.png'
import cn from 'clsx'
import Button from 'components/ui/button/Button'
import { useAuth } from 'hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '@/components/layout/MainLayout/Header/headerNavigation/style.module.sass'

export default function HeaderNavigation() {
	const { isAuth } = useAuth() // TODO: auth
	const { push } = useRouter()

	return (
		<nav className={cn('end', styles.end)}>
			<button className={cn('icon', styles.buttonSearchMicro)}>
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
				<button className={cn('icon', styles.buttonUser)}>
					<Image className={styles.userAvatar} src={userAvatar} alt='User avatar' />
				</button>
			) : (
				<Button classname={'button-user'} handler={() => push('/login')}>
					Login
				</Button>
			)}
		</nav>
	)
}
