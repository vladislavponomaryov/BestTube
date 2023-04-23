import {instance} from 'react/src/api'

class VideoService {
	async getById(id) {
		return instance
			.get('/videos', {
				params: {
					part: 'snippet,contentDetails,statistics',
					id: id
				}
			})
			.then(data => data?.data?.items[0])
	}
	async getPopular(count) {
		return instance
			.get(`/videos`, {
				params: {
					part: 'snippet,contentDetails,statistics',
					maxResults: count,
					chart: 'mostPopular',
					regionCode: 'US'
				}
			})
			.then(data => data?.data?.items)
	}
}

export default new VideoService()
