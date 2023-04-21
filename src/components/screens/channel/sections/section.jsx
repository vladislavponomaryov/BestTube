import Playlist from 'components/screens/channel/sections/playlist'

export default function Section({ section }) {
	const playlistId = section?.contentDetails?.playlists

	return <div className='category'>{playlistId && <Playlist id={playlistId[0]} />}</div>
}
