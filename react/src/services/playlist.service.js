import {instance} from 'react/src/api'

class PlaylistService {
	async getById(id) {
		return instance
			.get(`/playlists`, {
				params: {
					part: 'snippet',
					id: id
				}
			})
			.then(data => data?.data?.items[0])
	}
	async getItems(id) {
		return instance
			.get(`/playlistItems`, {
				params: {
					part: 'snippet,contentDetails',
					playlistId: id
				}
			})
			.then(data => data?.data?.items)
	}
}

export default new PlaylistService()
