export interface IChannel {
	brandingSettings: IBrandingSettings
	contentDetails: {
		relatedPlaylists: {
			likes: string
			uploads: string
		}
	}
	etag: string
	id: string
	kind: string
	snippet: ISnippet
	statistics: IStatistics
}

interface IBrandingSettings {
	channel: IBrandingChannel
	image: {
		bannerExternalUrl: string
	}
}

interface IBrandingChannel {
	country?: string | undefined
	description?: string | undefined
	keywords?: string | undefined
	title?: string | undefined
	unsubscribedTrailer?: string | undefined
}

interface ISnippet {
	country?: string | undefined
	customUrl: string
	description: string
	localized: {
		description: string
		title: string
	}
	publishedAt: string
	thumbnails: {
		default: IImage
		high: IImage
		medium: IImage
	}
	title: string
}

interface IImage {
	height: number
	width: number
	url: string
}

interface IStatistics {
	hiddenSubscriberCount: boolean
	subscriberCount: string
	videoCount: string
	viewCount: string
}

export interface ISection {
	etag: string
	id: string
	kind: string
	contentDetails: {
		playlists: {}[]
	}
}
