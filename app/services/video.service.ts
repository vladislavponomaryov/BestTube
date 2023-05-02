import instance from '../api'

class VideoService {
	async getById(id: string | string[] | undefined) {
		return instance
			.get('/videos', {
				params: {
					part: 'snippet,contentDetails,statistics',
					id: id,
				},
			})
			.then(data => data.data.items[0])
	}

	async getPopular(count: number) {
		return instance
			.get(`/videos`, {
				params: {
					part: 'snippet,contentDetails,statistics',
					maxResults: count,
					chart: 'mostPopular',
					regionCode: 'US',
				},
			})
			.then(data => data?.data?.items)
	}
}

export default new VideoService()
