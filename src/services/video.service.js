import { instance } from 'api'

class VideoService {
	async getPopularVideos(count) {
		return instance.get(`/videos`, {
			params: {
				part: 'snippet,contentDetails,statistics',
				maxResults: count,
				chart: 'mostPopular',
				regionCode: 'US'
			}
		})
	}
	async getVideo(id) {
		return instance.get('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				id: id
			}
		})
	}
}

export default new VideoService()
