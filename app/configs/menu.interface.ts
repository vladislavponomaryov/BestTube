export type Menu = {
	id: string
	title: string
	type: string
	children?: {
		id: string
		title: string
		type: string
		children?: MenuItem[]
	}[]
}

export type MenuItem = {
	id: string
	title: string
	type: string
	url: string
	icon: string
}
