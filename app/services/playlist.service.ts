import instance from '@/api/index'

class PlaylistService {
	async getById(id: string | string[] | undefined) {
		return instance
			.get(`/playlists`, {
				params: {
					part: 'snippet',
					id: id,
				},
			})
			.then(data => data?.data?.items[0])
	}
	async getItems(id: string | string[] | undefined) {
		return instance
			.get(`/playlistItems`, {
				params: {
					part: 'snippet,contentDetails',
					playlistId: id,
				},
			})
			.then(data => data?.data?.items)
	}
}

export default new PlaylistService()
