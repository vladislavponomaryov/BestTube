import axios from 'axios'

const KEY = 'AIzaSyB-76jg5_R43PsWZLgdpMeIVMv8m3rbJoI'

export const instance = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		key: KEY
	}
})

export const api = {
	getPopularVideos(count) {
		return instance.get(`/videos`, {
			params: {
				part: 'snippet,contentDetails,statistics',
				maxResults: count,
				chart: 'mostPopular',
				regionCode: 'US'
			}
		})
	},
	getVideo(id) {
		return instance.get('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				id: id
			}
		})
	},
	getChannelData(id) {
		return instance.get(`/channels`, {
			params: {
				part: 'snippet,contentDetails,statistics,brandingSettings',
				id: id
			}
		})
	},
	getChannelSections(id) {
		return instance.get(`/channelSections`, {
			params: {
				part: 'contentDetails',
				channelId: id
			}
		})
	},
	getPlaylistsInfo(playlistsId) {
		return instance.get(`/playlists`, {
			params: {
				part: 'snippet',
				id: [...playlistsId]
			},
			paramsSerializer: {
				indexes: null
			}
		})
	},
	getPlaylistItems(id) {
		return instance.get(`/playlistItems`, {
			params: {
				part: 'snippet,contentDetails',
				playlistId: id
			}
		})
	}
}
