import instance from '@/api/index'

class SearchService {
	async getByKeyword(keyword: string | string[] | undefined) {
		return instance
			.get('search', {
				params: {
					part: 'snippet',
					q: keyword,
					maxResults: 25,
					regionCode: 'US',
				},
			})
			.then(({ data }) => data.items)
	}
}

export default new SearchService()
