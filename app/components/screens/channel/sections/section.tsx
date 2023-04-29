import styles from '@/screens/channel/sections/style.module.sass'

import Playlist from '@/ui/playlist'

export default function Section({ section }) {
	const playlistId = section?.contentDetails?.playlists

	return <div className={styles.category}>{playlistId && <Playlist id={playlistId[0]} />}</div>
}
