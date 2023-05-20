import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { useQuery } from 'react-query'

import Feature from '@/screens/channel/feature'
import ChannelProfile from '@/screens/channel/profile'
import Sections from '@/screens/channel/sections'
import styles from '@/screens/channel/style.module.sass'

import ChannelService from '@/services/channel.service'

const toolbarItemsData = ['Home', 'Videos', 'Playlists', 'Community', 'Channels', 'About']

export const Channel: FC<any> = ({ channelItem, id }) => {
	const { data } = useQuery(`channel${id}`, () => ChannelService.getById(id))
	const channel = data
	let featureId = channel?.brandingSettings?.channel?.unsubscribedTrailer

	const toolbarItems = toolbarItemsData.map((item, index) => {
		return (
			<li
				className={cn(styles.li, {
					[styles.active]: index === 0,
				})}
				key={index}
			>
				{item}
			</li>
		)
	})

	// TODO: Desktop channel profile

	return (
		<div className={styles.content}>
			{channel && (
				<>
					<Image
						src={channel?.brandingSettings?.image?.bannerExternalUrl + '=w2000-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'}
						alt='Channel background'
						width={2000}
						height={300}
						className={styles.banner}
					/>
					<header className={styles.profileHeader}>
						<div className={styles.wrapper}>
							<ChannelProfile channel={channel} />
							<ul className={styles.toolbar}>{toolbarItems}</ul>
						</div>
					</header>
					<div className={styles.list}>
						{featureId && <Feature id={featureId} />}
						<Sections id={id} />
					</div>
				</>
			)}
		</div>
	)
}
