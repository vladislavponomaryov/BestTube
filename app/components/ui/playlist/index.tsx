import React, { FC } from 'react'
import { useQuery } from 'react-query'

import styles from '@/screens/channel/sections/style.module.sass'

import VideoContent from '@/ui/videoContent'

import { IPlaylist, IPlaylistItems } from '@/shared/types/services/playlist.interface'

import PlaylistService from '@/services/playlist.service'

interface Playlists {
	id: string
}

const Playlists: FC<Playlists> = ({ id }) => {
	const { data } = useQuery(`playlist${id}`, () => PlaylistService.getById(id))
	const playlist: IPlaylist = data
	const { data: dataItems } = useQuery(`playlistItems${id}`, () => PlaylistService.getItems(id))
	const playlistItems: IPlaylistItems[] = dataItems
	console.log(playlistItems)

	return (
		<>
			{playlist && playlistItems && (
				<>
					<div className={styles.title}>
						<h4>{playlist.snippet.title}</h4>
						<span className='_icon-play'></span>PLAY ALL
					</div>
					<VideoContent videoList={playlistItems} />
				</>
			)}
		</>
	)
}

export default Playlists
