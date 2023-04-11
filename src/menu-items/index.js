import img1 from '../assets/images/userAvatars/9.png'
import img2 from '../assets/images/userAvatars/8.png'
import img3 from '../assets/images/userAvatars/7.png'
import img4 from '../assets/images/userAvatars/6.png'

const dashboard = {
    id: 'group-full',
    title: '',
    type: 'group',
    children: [
        {
            id: 'group-1',
            title: '',
            type: 'group',
            children: [
                {
                    id: 'home',
                    title: 'Home',
                    type: 'item',
                    url: '/',
                    icon: 'home-fill'
                },
                {
                    id: 'explore',
                    title: 'Explore',
                    type: 'item',
                    url: '/',
                    icon: 'explore'
                },
                {
                    id: 'subscriptions',
                    title: 'Subscriptions',
                    type: 'item',
                    url: '/channel',
                    icon: 'subscriptions'
                }
            ]
        },
        {
            id: 'group-2',
            title: '',
            type: 'group',
            children: [
                {
                    id: 'library',
                    title: 'Library',
                    type: 'item',
                    url: '/',
                    icon: 'library'
                },
                {
                    id: 'history',
                    title: 'History',
                    type: 'item',
                    url: '/',
                    icon: 'history'
                },
                {
                    id: 'your-videos',
                    title: 'Your Videos',
                    type: 'item',
                    url: '/',
                    icon: 'yourVideos'
                },
                {
                    id: 'watch-later',
                    title: 'Watch Later',
                    type: 'item',
                    url: '/',
                    icon: 'watchLater'
                },
                {
                    id: 'liked-videos',
                    title: 'Liked Videos',
                    type: 'item',
                    url: '/',
                    icon: 'Liked'
                }
            ]
        },
        {
            id: 'group-3',
            title: 'Subscriptions',
            type: 'group'
        },
        {
            id: 'group-4',
            title: 'More from youtube',
            type: 'group',
            children: [
                {
                    id: 'youtube-premium',
                    title: 'Youtube Premium',
                    type: 'item',
                    url: '/',
                    icon: 'premium'
                },
                {
                    id: 'gaming',
                    title: 'Gaming',
                    type: 'item',
                    url: '/',
                    icon: 'gaming'
                },
                {
                    id: 'live',
                    title: 'Live',
                    type: 'item',
                    url: '/',
                    icon: 'live'
                },
                {
                    id: 'sports',
                    title: 'Sports',
                    type: 'item',
                    url: '/',
                    icon: 'sports'
                }
            ]
        },
        {
            id: 'group-5',
            title: '',
            type: 'group',
            children: [
                {
                    id: 'settings',
                    title: 'Settings',
                    type: 'item',
                    url: '/',
                    icon: 'settings'
                },
                {
                    id: 'report-history',
                    title: 'Report History',
                    type: 'item',
                    url: '/',
                    icon: 'report'
                },
                {
                    id: 'help',
                    title: 'Help',
                    type: 'item',
                    url: '/',
                    icon: 'help'
                },
                {
                    id: 'send-feedback',
                    title: 'Send feedback',
                    type: 'item',
                    url: '/',
                    icon: 'feedback'
                }
            ]
        }
    ]
}

export default dashboard