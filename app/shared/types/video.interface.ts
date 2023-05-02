export interface IVideo {
	contentDetails: IContentDetails
	etag: string
	id: string
	kind: string
	snippet: ISnippet
	statistics: IStatistics
}

interface ISnippet {
	categoryId: string
	channelId: string
	channelTitle: string
	defaultAudioLanguage?: string | undefined
	description: string
	liveBroadcastContent: string
	localized: ILocalized
	publishedAt: string
	tags?: string[] | undefined
	thumbnails: IThumbnails
	title: string
}

interface ILocalized {
	description: string
	title: string
}

interface IStatistics {
	commentCount: string
	favoriteCount: string
	likeCount: string
	viewCount: string
}

interface IContentDetails {
	caption: string
	contentRating: any
	definition: string
	dimension: string
	duration: string
	licensedContent: boolean
	projection: string
	videoId?: string
}

interface IThumbnails {
	default: IImage
	high: IImage
	maxres?: IImage | undefined
	medium: IImage
	standard: IImage
}

interface IImage {
	height: number
	width: number
	url: string
}
