import cn from 'clsx'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import styles from '@/components/layout/MainLayout/Header/search/style.module.scss'

import { useActions } from '@/hooks/useActions'
import { useApp } from '@/hooks/useApp'

export default function Search() {
	const { isOpenMobileSearch } = useApp()
	const { setIsOpenMobileSearch } = useActions()
	const { push } = useRouter()

	const { register, handleSubmit, reset } = useForm({ mode: 'onChange' })

	const onSubmit = (data: any) => {
		push({ pathname: `/search`, query: { search_query: data.search_query } })
	}

	return (
		<div className={cn('center', styles.center, { [styles.visible]: isOpenMobileSearch })}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={cn(styles.search, 'search')}>
					<button
						className={cn('icon', styles.buttonBack, { [styles.visible]: isOpenMobileSearch })}
						onClick={() => setIsOpenMobileSearch(!isOpenMobileSearch)}
					>
						<span className='_icon-leftBottom'></span>
					</button>

					<div className={styles.searchBar}>
						<label htmlFor='searchField'></label>
						<input className={styles.searchField} placeholder='Search' {...register('search_query', { required: true })} />
						<button className={cn('icon', styles.searchButton)} type='submit'>
							<span className='_icon-search'></span>
						</button>
					</div>

					{/*<button className={cn('icon', styles.buttonSearchMicro)}>
						<span className='_icon-mic'></span>
					</button>*/}
				</div>
			</form>
		</div>
	)
}
