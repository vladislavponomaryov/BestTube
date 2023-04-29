import React from 'react'
import { useQuery } from 'react-query'

import styles from '@/screens/channel/sections/style.module.sass'

import VideoContent from '@/ui/videoContent'

import PlaylistService from '@/services/playlist.service'

const Playlists = ({ id }) => {
	const { data: playlist } = useQuery(`playlist${id}`, () => PlaylistService.getById(id))
	const { data: playlistItems } = useQuery(`playlistItems${id}`, () => PlaylistService.getItems(id))

	return (
		<>
			{playlist && playlistItems && (
				<>
					<div className={styles.title}>
						<h4>{playlist.snippet.title}</h4>
						<span className='_icon-play'></span>PLAY ALL
					</div>
					<VideoContent videoList={playlistItems} videoCount={5} />
				</>
			)}
		</>
	)
}

export default Playlists