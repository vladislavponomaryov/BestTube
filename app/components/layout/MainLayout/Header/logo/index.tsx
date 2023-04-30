import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import style from '@/components/layout/MainLayout/Header/logo/style.module.sass'

import { useActions } from '@/hooks/useActions'
import { useApp } from '@/hooks/useApp'

import logo from '@/assets/images/logo.svg'

export default function Logotype() {
	const { isOpenDrawer } = useApp()
	const { setIsOpenDrawer } = useActions()

	function drawerEvent() {
		if (isOpenDrawer === null) {
			setIsOpenDrawer(false)
		} else {
			setIsOpenDrawer(!isOpenDrawer)
		}
	}

	return (
		<div className={cn('start', style.start)}>
			<button id='button-guide' className='icon' onClick={() => drawerEvent()}>
				<span className='_icon-hamburger'></span>
			</button>
			<Link href={{ pathname: '/' }} className='button-logo'>
				<div className={style.logo}>
					<Image src={logo} alt='Logotype Youtube' />
				</div>
			</Link>
		</div>
	)
}
