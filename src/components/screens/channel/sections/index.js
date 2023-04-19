import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPlaylistItems, getPlaylists, getPlaylistsInfo, getSections } from '../../../../store/slices/channel'

import Section from './item'

export default function Sections({ id }) {
	const dispatch = useDispatch()

	const channelID = id
	let playlists = useSelector(state => state.channel.playlists),
		sections = useSelector(state => state.channel.sections),
		playlistItems = useSelector(state => state.channel.playlistItems)
	let [check, changeCheck] = useState(true)
	let [fullPlaylist, changefullPlaylist] = useState(false)
	let sectionsItem

	useEffect(() => {
		dispatch(getSections(channelID))

		return () => {
			console.log('end')
			dispatch(getSections(null))
			dispatch(getPlaylistsInfo(null))
			dispatch(getPlaylistItems(null))
			changeCheck(true)
			changefullPlaylist(false)
		}
	}, [])

	useEffect(() => {
		if (sections && !playlists) {
			let pl = sections.map(section => {
				if (section?.contentDetails?.playlists) {
					return section.contentDetails.playlists[0]
				}
			})
			dispatch(getPlaylistsInfo(pl))
		}
	}, [sections])

	if (playlists && check) {
		changeCheck(false)
		playlists.forEach(item => dispatch(getPlaylistItems(item.id)))
		changefullPlaylist(true)
	}

	let array = [
		{
			kind: 'youtube#playlist',
			etag: 'd2txTyAQZVTFC4agUt9elEOa-HI',
			id: 'PL148kCvXk8pCWUMv1QsUMC0K9LW94KdL_',
			snippet: {
				publishedAt: '2023-04-06T13:57:55Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Star Wars Celebration Europe 2023',
				description:
					'Lucasfilm’s official live stream, Star Wars Celebration LIVE! 2023 will feature select panels, along with celebrity guests on the LIVE! stage, and much more.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/4XIv8_RfKko/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/4XIv8_RfKko/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/4XIv8_RfKko/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/4XIv8_RfKko/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/4XIv8_RfKko/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Star Wars Celebration Europe 2023',
					description:
						'Lucasfilm’s official live stream, Star Wars Celebration LIVE! 2023 will feature select panels, along with celebrity guests on the LIVE! stage, and much more.'
				}
			},
			contentDetails: {
				itemCount: 46
			}
		},
		{
			kind: 'youtube#playlist',
			etag: 'ZB7Sjbd_9UKx5zGlGJ3aY3920Es',
			id: 'PL148kCvXk8pCIP4ENUF3tSIG_SmVNxBU7',
			snippet: {
				publishedAt: '2019-08-24T04:20:30Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'The Mandalorian',
				description:
					'After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/XcyCwSh0t4Q/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/XcyCwSh0t4Q/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/XcyCwSh0t4Q/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/XcyCwSh0t4Q/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/XcyCwSh0t4Q/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'The Mandalorian',
					description:
						'After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.'
				}
			},
			contentDetails: {
				itemCount: 30
			}
		},
		{
			kind: 'youtube#playlist',
			etag: 'BGU95rGuR-POveTLP6vaUrRdexE',
			id: 'PL148kCvXk8pA9rHNmK_fjitW24vdLZE21',
			snippet: {
				publishedAt: '2022-12-12T18:27:01Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Star Wars Lofi',
				description: '',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/QvIhS8_1mNg/default_live.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/QvIhS8_1mNg/mqdefault_live.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/QvIhS8_1mNg/hqdefault_live.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/QvIhS8_1mNg/sddefault_live.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/QvIhS8_1mNg/maxresdefault_live.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Star Wars Lofi',
					description: ''
				}
			},
			contentDetails: {
				itemCount: 6
			}
		},
		{
			kind: 'youtube#playlist',
			etag: '4P-oH-V75d5kjnC_ZJ3zTvfZDcE',
			id: 'PL148kCvXk8pBB8MN-HRtP1E39DE4SUXO_',
			snippet: {
				publishedAt: '2022-12-07T16:56:41Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'The Bad Batch',
				description: '',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/6JX5OW8cOec/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/6JX5OW8cOec/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/6JX5OW8cOec/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/6JX5OW8cOec/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/6JX5OW8cOec/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'The Bad Batch',
					description: ''
				}
			},
			contentDetails: {
				itemCount: 26
			}
		},
		{
			kind: 'youtube#playlist',
			etag: '1HNgPscPCyrbudV_mMoulWlX6TA',
			id: 'PL148kCvXk8pBViyaR1fRFfG_N54C5ApoY',
			snippet: {
				publishedAt: '2020-01-30T20:43:02Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'This Week! In Star Wars',
				description:
					'This Week! in Star Wars is a weekly internet news show featuring a quick and snappy rundown of the week’s Star Wars news and tidbits, along with some special shout outs and historical factoids.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/gmRn-UYwBOs/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/gmRn-UYwBOs/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/gmRn-UYwBOs/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/gmRn-UYwBOs/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/gmRn-UYwBOs/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'This Week! In Star Wars',
					description:
						'This Week! in Star Wars is a weekly internet news show featuring a quick and snappy rundown of the week’s Star Wars news and tidbits, along with some special shout outs and historical factoids.'
				}
			},
			contentDetails: {
				itemCount: 147
			}
		},
		{
			kind: 'youtube#playlist',
			etag: 'u8x1vXyUTC498sMPa64m7j0BwLA',
			id: 'PL148kCvXk8pDExsot7ytrDO3ZRttxFuxH',
			snippet: {
				publishedAt: '2021-01-19T19:48:39Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Star Wars: The High Republic',
				description:
					'The High Republic is set centuries prior to the events of Star Wars: The Phantom Menace, during the prime of the Jedi Order. The stories introduce new heroes to cheer on, new worlds to explore, and new threats to face.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/f0l-OuG3BVg/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/f0l-OuG3BVg/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/f0l-OuG3BVg/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/f0l-OuG3BVg/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/f0l-OuG3BVg/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Star Wars: The High Republic',
					description:
						'The High Republic is set centuries prior to the events of Star Wars: The Phantom Menace, during the prime of the Jedi Order. The stories introduce new heroes to cheer on, new worlds to explore, and new threats to face.'
				}
			},
			contentDetails: {
				itemCount: 40
			}
		},
		{
			kind: 'youtube#playlist',
			etag: 'ILV7ssyVbq2u2KdrgPace7UA27Q',
			id: 'PL148kCvXk8pC2fMmEFdKns2Zvyvob6h9X',
			snippet: {
				publishedAt: '2022-08-03T00:47:10Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Andor',
				description:
					'Starring Diego Luna as Cassian Andor and set five years prior to Rogue One: A Star Wars Story, Andor starts streaming September 21 with a three-episode premiere, only on Disney+.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/-asb8zTiuZ4/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/-asb8zTiuZ4/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/-asb8zTiuZ4/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/-asb8zTiuZ4/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/-asb8zTiuZ4/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Andor',
					description:
						'Starring Diego Luna as Cassian Andor and set five years prior to Rogue One: A Star Wars Story, Andor starts streaming September 21 with a three-episode premiere, only on Disney+.'
				}
			},
			contentDetails: {
				itemCount: 22
			}
		},
		{
			kind: 'youtube#playlist',
			etag: 'xghnKBd9_rrsBIESwfQeRuPLRZw',
			id: 'PL148kCvXk8pD7vYbmSoyyc5fxbGLz3q0X',
			snippet: {
				publishedAt: '2022-05-27T00:43:28Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Obi-Wan Kenobi',
				description:
					'Obi-Wan Kenobi follows Ewan McGregor’s legendary Jedi Master 10 years after the events of Star Wars: Revenge of the Sith. The Empire reigns and the few surviving Jedi are in hiding, with Kenobi living in secret on Tatooine and watching over Luke Skywalker from afar.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/3Yh_6_zItPU/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/3Yh_6_zItPU/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/3Yh_6_zItPU/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/3Yh_6_zItPU/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/3Yh_6_zItPU/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Obi-Wan Kenobi',
					description:
						'Obi-Wan Kenobi follows Ewan McGregor’s legendary Jedi Master 10 years after the events of Star Wars: Revenge of the Sith. The Empire reigns and the few surviving Jedi are in hiding, with Kenobi living in secret on Tatooine and watching over Luke Skywalker from afar.'
				}
			},
			contentDetails: {
				itemCount: 20
			}
		},
		{
			kind: 'youtube#playlist',
			etag: 'MOD58zdAe0xETHp4NH3I2UhVeBM',
			id: 'PL148kCvXk8pBB0bGjvJvgM_48j6pnQnmG',
			snippet: {
				publishedAt: '2021-12-08T18:00:31Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'The Book of Boba Fett',
				description:
					'The Book of Boba Fett, a thrilling Star Wars adventure, finds legendary bounty hunter Boba Fett and mercenary Fennec Shand navigating the galaxy’s underworld when they return to the sands of Tatooine to stake their claim on the territory once ruled by Jabba the Hutt and his crime syndicate.\n\nThe Book of Boba Fett stars Temuera Morrison and Ming-Na Wen. Jon Favreau, Dave Filoni, Robert Rodriguez, Kathleen Kennedy, and Colin Wilson are the executive producers. Karen Gilchrist and Carrie Beck serve as co-executive producers, with John Bartnicki producing and John Hampian as co-producer.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/Bi9GRafMz2E/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/Bi9GRafMz2E/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/Bi9GRafMz2E/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/Bi9GRafMz2E/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/Bi9GRafMz2E/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'The Book of Boba Fett',
					description:
						'The Book of Boba Fett, a thrilling Star Wars adventure, finds legendary bounty hunter Boba Fett and mercenary Fennec Shand navigating the galaxy’s underworld when they return to the sands of Tatooine to stake their claim on the territory once ruled by Jabba the Hutt and his crime syndicate.\n\nThe Book of Boba Fett stars Temuera Morrison and Ming-Na Wen. Jon Favreau, Dave Filoni, Robert Rodriguez, Kathleen Kennedy, and Colin Wilson are the executive producers. Karen Gilchrist and Carrie Beck serve as co-executive producers, with John Bartnicki producing and John Hampian as co-producer.'
				}
			},
			contentDetails: {
				itemCount: 13
			}
		},
		{
			kind: 'youtube#playlist',
			etag: '42pVkw1MaKWxhTOj_caq7qh7Yhg',
			id: 'PL148kCvXk8pChIi9CDddq5Ykmdj4q3EBx',
			snippet: {
				publishedAt: '2020-11-03T02:55:34Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Disney+',
				description: '',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/DM_XwzOK_98/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/DM_XwzOK_98/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/DM_XwzOK_98/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/DM_XwzOK_98/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/DM_XwzOK_98/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Disney+',
					description: ''
				}
			},
			contentDetails: {
				itemCount: 22
			}
		},
		{
			kind: 'youtube#playlist',
			etag: 'tBDJknrO0KkhlpPyCKnH5HINaWo',
			id: 'PL148kCvXk8pAqgJXWEAxXIamlGOQQYAzh',
			snippet: {
				publishedAt: '2022-05-27T00:37:19Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Star Wars Celebration Anaheim 2022',
				description: '',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/YQ8iIp33_EY/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/YQ8iIp33_EY/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/YQ8iIp33_EY/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/YQ8iIp33_EY/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/YQ8iIp33_EY/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Star Wars Celebration Anaheim 2022',
					description: ''
				}
			},
			contentDetails: {
				itemCount: 21
			}
		},
		{
			kind: 'youtube#playlist',
			etag: '274rDJb_ivGRcT2ZNyNoBBuX5c0',
			id: 'PL148kCvXk8pDC7imn-Xfgpa-XSX6aiZ3H',
			snippet: {
				publishedAt: '2018-10-01T19:06:07Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Our Star Wars Stories',
				description: '',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/O6RC83H1-F8/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/O6RC83H1-F8/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/O6RC83H1-F8/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/O6RC83H1-F8/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/O6RC83H1-F8/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				localized: {
					title: 'Our Star Wars Stories',
					description: ''
				}
			},
			contentDetails: {
				itemCount: 18
			}
		}
	]

	if (fullPlaylist) {
		sectionsItem = playlists
			? playlists.map(playlist => {
					return <Section key={playlist.id} item={playlist} playlistItem={playlistItems[playlist.id]} />
			  })
			: null
	}

	//console.log(JSON.stringify(array))
	//console.log(array)

	//console.log(playlistItems)

	return <>{sectionsItem && sectionsItem}</>
}
