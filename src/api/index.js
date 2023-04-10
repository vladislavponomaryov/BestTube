import axios from "axios";

const KEY = 'AIzaSyB-76jg5_R43PsWZLgdpMeIVMv8m3rbJoI'

const instance = axios.create({
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
    getChannelData(id) {
        return instance.get(`/channels`, {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: id
            }
        })
    }
}