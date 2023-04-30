import styles from '@/components/layout/MainLayout/Drawer/MiniDrawer/style.module.sass'

export default function MiniDrawer() {
	return (
		<div className={styles.miniGuide}>
			<ul>
				<li>
					<a href='/'>
						<span className='_icon-home-fill'></span>
						Home
					</a>
				</li>
				<li>
					<a href='/'>
						<span className='_icon-explore'></span>
						Explore
					</a>
				</li>
				<li>
					<a href='/'>
						<span className='_icon-subscriptions'></span>
						Subscriptions
					</a>
				</li>
				<li>
					<a href='/'>
						<span className='_icon-library'></span>
						Library
					</a>
				</li>
			</ul>
		</div>
	)
}
