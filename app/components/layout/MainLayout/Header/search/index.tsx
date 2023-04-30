import cn from 'clsx'
import { useState } from 'react'

import styles from '@/components/layout/MainLayout/Header/search/style.module.scss'

export default function Search() {
	let [mobileSearchClass, setMobileSearchClass] = useState('')

	// mobile search
	/*useEffect(() => {
		document.querySelector('#button-mobile-search').addEventListener('click', () => {
			changeClass('visible')
		})

		document.querySelector('#button-back').addEventListener('click', () => {
			changeClass('')
		})
	}, [])*/

	return (
		<div className={cn('center', styles.center, [mobileSearchClass])}>
			<div className={styles.search}>
				<button className={cn('icon', styles.buttonBack)}>
					<span className='_icon-leftBottom'></span>
				</button>
				<div className={styles.searchBar}>
					<label htmlFor='searchField'></label>
					<input className={styles.searchField} placeholder='Search' />
					<button className={cn('icon', styles.searchButton)}>
						<span className='_icon-search'></span>
					</button>
				</div>
				<button className={cn('icon', styles.buttonSearchMicro)}>
					<span className='_icon-mic'></span>
				</button>
			</div>
		</div>
	)
}
