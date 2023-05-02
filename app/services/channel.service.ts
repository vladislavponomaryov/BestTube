import instance from '../api'

class ChannelService {
	async getById(id: string | string[] | undefined) {
		return instance
			.get(`/channels`, {
				params: {
					part: 'snippet,contentDetails,statistics,brandingSettings',
					id: id,
				},
			})
			.then(data => data?.data?.items[0])
	}
	async getSections(id: string | string[] | undefined) {
		return instance
			.get(`/channelSections`, {
				params: {
					part: 'contentDetails',
					channelId: id,
				},
			})
			.then(data => data?.data?.items)
	}
}

export default new ChannelService()
