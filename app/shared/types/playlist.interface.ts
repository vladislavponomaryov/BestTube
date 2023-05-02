export interface IPlaylist {
	etag: string
	id: string
	kind: string
	snippet: ISnippet
}

interface ISnippet {
	channelId: string
	channelTitle: string
	description: string
	localized: ILocalized
	publishedAt: string
	thumbnails: IThumbnails
	title: string
}

interface ILocalized {
	description: string
	title: string
}

interface IThumbnails {
	default: IImage
	high: IImage
	maxres: IImage
	medium: IImage
	standard: IImage
}

interface IImage {
	height: number
	width: number
	url: string
}

export interface IPlaylistItems {
	etag: string
	id: string
	kind: string
	contentDetails: {
		videoId: string
		videoPublishedAt: string
	}
	snippet: ISnippetItems
}

interface ISnippetItems {
	channelId: string
	channelTitle: string
	description: string
	playlistId: string
	position: string
	publishedAt: string
	title: string
	videoOwnerChannelId: string
	videoOwnerChannelTitle: string
	resourceId: {
		kind: string
		videoId: string
	}
	thumbnails: IThumbnails
}
