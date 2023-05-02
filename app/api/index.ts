import axios from 'axios'

const KEY = 'AIzaSyB-76jg5_R43PsWZLgdpMeIVMv8m3rbJoI'

const instance = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		key: KEY,
	},
})

export default instance
