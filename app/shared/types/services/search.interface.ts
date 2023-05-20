export interface ISearch {
	etag: string
	kind: string
	id: {
		kind: string
		videoId: string
	}
	snippet: {
		channelId: string
		channelTitle: string
		description: string
		liveBroadcastContent: string
		publishTime: string
		publishedAt: string
		title: string
		thumbnails: IThumbnails
	}
}

interface IThumbnails {
	default: IImage
	high: IImage
	medium: IImage
}

interface IImage {
	height: number
	width: number
	url: string
}
