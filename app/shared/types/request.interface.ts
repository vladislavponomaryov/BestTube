interface IResponse<T = any> {
	config: any
	data: IData<T>
	headers: any
	request: any
	status: string
	statusText: string
}

interface IData<T = any> {
	etag: string
	items: []
	kind: string
	pageInfo: IPageInfo
}

interface IPageInfo {
	resultsPerPage: number
	totalResults: number
}
