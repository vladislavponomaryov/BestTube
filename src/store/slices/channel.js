import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [
		{
			kind: 'youtube#channel',
			etag: 'EnjPLXJPwpesTQT_bx8aweCNe2A',
			id: 'UCZGYJFUizSax-yElQaFDp5Q',
			snippet: {
				title: 'Star Wars',
				description:
					'Welcome to the official Star Wars YouTube channel -- home to a galaxy of Star Wars videos including trailers, behind-the-scenes featurettes, and original series. Enjoy breaking news, in-depth looks into your favorite Star Wars content, and insights into legendary Star Wars characters.\n\n\nAt Lucasfilm, we are committed to bringing great stories, characters, and experiences to fans around the world.  We strive to foster an inclusive, diverse, respectful, and safe environment for all fans. We ask the same of our fan communities. As such, we reserve the right to take action including but not limited to hiding, deleting, blocking, and reporting any posts on this account or page. Please also be aware that Lucasfilm & The Walt Disney Company do not accept or consider unsolicited idea submissions.\n',
				customUrl: '@starwars',
				publishedAt: '2005-08-27T17:10:49Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/NLJIsq7K-Qr7AMpHkLstcm9F_ZQzel_CYngyfJvAuBoOzyICVBlpXZzmGlMFqhD1PoV1bJwoxyk=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Star Wars',
					description:
						'Welcome to the official Star Wars YouTube channel -- home to a galaxy of Star Wars videos including trailers, behind-the-scenes featurettes, and original series. Enjoy breaking news, in-depth looks into your favorite Star Wars content, and insights into legendary Star Wars characters.\n\n\nAt Lucasfilm, we are committed to bringing great stories, characters, and experiences to fans around the world.  We strive to foster an inclusive, diverse, respectful, and safe environment for all fans. We ask the same of our fan communities. As such, we reserve the right to take action including but not limited to hiding, deleting, blocking, and reporting any posts on this account or page. Please also be aware that Lucasfilm & The Walt Disney Company do not accept or consider unsolicited idea submissions.\n'
				},
				country: 'US'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUZGYJFUizSax-yElQaFDp5Q'
				}
			},
			statistics: {
				viewCount: '1403884826',
				subscriberCount: '3990000',
				hiddenSubscriberCount: false,
				videoCount: '1754'
			},
			brandingSettings: {
				channel: {
					title: 'Star Wars',
					description:
						'Welcome to the official Star Wars YouTube channel -- home to a galaxy of Star Wars videos including trailers, behind-the-scenes featurettes, and original series. Enjoy breaking news, in-depth looks into your favorite Star Wars content, and insights into legendary Star Wars characters.\n\n\nAt Lucasfilm, we are committed to bringing great stories, characters, and experiences to fans around the world.  We strive to foster an inclusive, diverse, respectful, and safe environment for all fans. We ask the same of our fan communities. As such, we reserve the right to take action including but not limited to hiding, deleting, blocking, and reporting any posts on this account or page. Please also be aware that Lucasfilm & The Walt Disney Company do not accept or consider unsolicited idea submissions.\n',
					keywords: '"star wars" "star wars official" starwars "george lucas" starwars.com',
					unsubscribedTrailer: 'HnzNZ0Mdx4I',
					country: 'US'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/_ja8rsj6dmMU5TlsPtPoZv1i4mR2ZMdgs5Xb0EJ7DGCixeJOa3zA1Ig02cO2ZJWfUZHY7Saqi4E'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: 'y6gMjIcd5NGyC_Zdg4j7vbElLNI',
			id: 'UCq7OHvWO6Z3u-LztFdrcU-g',
			snippet: {
				title: 'Illumination',
				description:
					'Connect with Illumination!\n\nhttps://www.instagram.com/illuminationent\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n',
				customUrl: '@illumination',
				publishedAt: '2009-11-18T23:01:15Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/-AGJo5fWy7Eex7YQIO-vkf2NPzeHYq9T8BfO_lOFRycB83d2GOJBzge-uzqs1gnDymBHV4xDkg=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/-AGJo5fWy7Eex7YQIO-vkf2NPzeHYq9T8BfO_lOFRycB83d2GOJBzge-uzqs1gnDymBHV4xDkg=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/-AGJo5fWy7Eex7YQIO-vkf2NPzeHYq9T8BfO_lOFRycB83d2GOJBzge-uzqs1gnDymBHV4xDkg=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Illumination',
					description:
						'Connect with Illumination!\n\nhttps://www.instagram.com/illuminationent\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n'
				},
				country: 'US'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUq7OHvWO6Z3u-LztFdrcU-g'
				}
			},
			statistics: {
				viewCount: '2653344041',
				subscriberCount: '3490000',
				hiddenSubscriberCount: false,
				videoCount: '410'
			},
			brandingSettings: {
				channel: {
					title: 'Illumination',
					description:
						'Connect with Illumination!\n\nhttps://www.instagram.com/illuminationent\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n',
					keywords: '"Despicable Me" "Steve Carrell" Minions Trailer Movie little yellow Gru Pharrell',
					trackingAnalyticsAccountId: 'UA-48328707-2',
					unsubscribedTrailer: 'RjNcTBXTk4I',
					country: 'US'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/8Q3UNktgq3Z7-ZI2AoHpA_Mf5UAOKqKvF8GXSIwXvvYAi8Js97cKukn-TOKfsLO5n4bYypc4fOE'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: 'EVEKKiwkhkLGaK4kJmKFolB-Prs',
			id: 'UCvAhDxNNUDhi78tMXVGBUaQ',
			snippet: {
				title: 'Tavarish',
				description:
					'My name is Tavarish and I make videos about buying, modifying, and breaking cars. I also have opinions, most of which are wrong.',
				customUrl: '@tavarish',
				publishedAt: '2006-02-20T19:06:18Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJVsjZUGUy876PBa1nE6eg864QnbnzfK70V3fZir=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJVsjZUGUy876PBa1nE6eg864QnbnzfK70V3fZir=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJVsjZUGUy876PBa1nE6eg864QnbnzfK70V3fZir=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Tavarish',
					description:
						'My name is Tavarish and I make videos about buying, modifying, and breaking cars. I also have opinions, most of which are wrong.'
				},
				country: 'US'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUvAhDxNNUDhi78tMXVGBUaQ'
				}
			},
			statistics: {
				viewCount: '387666893',
				subscriberCount: '2430000',
				hiddenSubscriberCount: false,
				videoCount: '548'
			},
			brandingSettings: {
				channel: {
					title: 'Tavarish',
					description:
						'My name is Tavarish and I make videos about buying, modifying, and breaking cars. I also have opinions, most of which are wrong.',
					country: 'US'
				},
				image: {
					bannerExternalUrl: 'https://lh3.googleusercontent.com/ORgIU3rjVJIdl55HWDbRWAqPQtJBlDHr1x5uEMmY8kJ-s1gmgshHZKnHQbFcVJ7hf5Bx4nil'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: 'qohOz9dDsw0m26wzffru9zxu48c',
			id: 'UCnwY6fAhE3ePu0F2nMP-DLg',
			snippet: {
				title: 'Lucasfilm',
				description: '',
				customUrl: '@lucasfilm',
				publishedAt: '2018-06-18T20:47:19Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/4_rR766TTQzYQCqfuYGgTbY1tRRXuJmAP55LZ1a_MM4894gApkvoxL-jje845-f6yjzs7es-pA=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/4_rR766TTQzYQCqfuYGgTbY1tRRXuJmAP55LZ1a_MM4894gApkvoxL-jje845-f6yjzs7es-pA=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/4_rR766TTQzYQCqfuYGgTbY1tRRXuJmAP55LZ1a_MM4894gApkvoxL-jje845-f6yjzs7es-pA=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Lucasfilm',
					description: ''
				},
				country: 'US'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUnwY6fAhE3ePu0F2nMP-DLg'
				}
			},
			statistics: {
				viewCount: '38073201',
				subscriberCount: '116000',
				hiddenSubscriberCount: false,
				videoCount: '103'
			},
			brandingSettings: {
				channel: {
					title: 'Lucasfilm',
					keywords: 'Lucasfilm "Star Wars" "Indiana Jones"',
					unsubscribedTrailer: 'eQfMbSe7F2g',
					country: 'US'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/D9u_OyEHT4RLog412dxwBkeDtzbTDjNKN5AhLw8jDUS7knv6JHWrzMSKCauDGDYpK-yhOS78x-o'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: 'QlHcSycjTaO3nZVHqzI3q2cfadY',
			id: 'UCcHtke0raf8vNYLM1Hbq3Jw',
			snippet: {
				title: 'Imagen Noticias',
				description:
					'Imagen Noticias te trae el día a día de los acontecimientos nacionales e internacionales más importantes. Entérate en tiempo real de la vida pública, política y noticias de máxima importancia, con la mejor cobertura y acompañado de grandes periodistas como lo son: Ciro Gómez Leyva, Yuriria Sierra y Francisco Zea',
				customUrl: '@imagennoticias',
				publishedAt: '2012-02-10T18:09:40Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJVg5kdd-dPsyPUGXvqsixXQyRftt1rYT3qrsYkOqg=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJVg5kdd-dPsyPUGXvqsixXQyRftt1rYT3qrsYkOqg=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJVg5kdd-dPsyPUGXvqsixXQyRftt1rYT3qrsYkOqg=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Imagen Noticias',
					description:
						'Imagen Noticias te trae el día a día de los acontecimientos nacionales e internacionales más importantes. Entérate en tiempo real de la vida pública, política y noticias de máxima importancia, con la mejor cobertura y acompañado de grandes periodistas como lo son: Ciro Gómez Leyva, Yuriria Sierra y Francisco Zea'
				},
				country: 'MX'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUcHtke0raf8vNYLM1Hbq3Jw'
				}
			},
			statistics: {
				viewCount: '3245032941',
				subscriberCount: '4140000',
				hiddenSubscriberCount: false,
				videoCount: '152942'
			},
			brandingSettings: {
				channel: {
					title: 'Imagen Noticias',
					description:
						'Imagen Noticias te trae el día a día de los acontecimientos nacionales e internacionales más importantes. Entérate en tiempo real de la vida pública, política y noticias de máxima importancia, con la mejor cobertura y acompañado de grandes periodistas como lo son: Ciro Gómez Leyva, Yuriria Sierra y Francisco Zea',
					keywords: 'noticias "noticias hoy" "noticias ultima hora" news mexico',
					unsubscribedTrailer: 'XRCikdO1dFU',
					country: 'MX'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/Z4Y2-_Cd8T8yKGc16XJBLSEVdSmyg-yCqSh5LfKpcwfL-y4s02LLXq1KYHqXChU00AlGQK1vV40'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: 'gMvS9V0vK2AdZpabu5l70yNHijY',
			id: 'UCtHaxi4GTYDpJgMSGy7AeSw',
			snippet: {
				title: 'Michael Reeves',
				description: '🌰',
				customUrl: '@michaelreeves',
				publishedAt: '2016-04-15T09:37:57Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/ytc/AGIKgqNG6SZn6eUaTzudRqbfVyY-KH541t31cHbMQhDRJA=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/ytc/AGIKgqNG6SZn6eUaTzudRqbfVyY-KH541t31cHbMQhDRJA=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/ytc/AGIKgqNG6SZn6eUaTzudRqbfVyY-KH541t31cHbMQhDRJA=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Michael Reeves',
					description: '🌰'
				},
				country: 'US'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUtHaxi4GTYDpJgMSGy7AeSw'
				}
			},
			statistics: {
				viewCount: '381037402',
				subscriberCount: '7050000',
				hiddenSubscriberCount: false,
				videoCount: '50'
			},
			brandingSettings: {
				channel: {
					title: 'Michael Reeves',
					description: '🌰',
					country: 'US'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/ou5mwPT6yeWBVsORHMiDrCrOpgXAc-yKKtKJmudJ9v7RXUAHV6Woqm27dxGgiiiYAG9uehV0iA'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: '1QfUHFUW1HCQkZX9NOE_RKm68wU',
			id: 'UCuaFvcY4MhZY3U43mMt1dYQ',
			snippet: {
				title: 'Walt Disney Studios',
				description:
					'Watch all of the latest trailers, clips, and videos from upcoming Disney movies!\n\n\nAt The Walt Disney Company, we are committed to bringing great stories, characters, and experiences to guests around the world. We strive to foster an inclusive, diverse, respectful, and safe environment for all fans. We ask the same of our fan communities. As such, we reserve the right to take action including but not limited to hiding, deleting, blocking, and reporting any posts on this account or page. Please also be aware that The Walt Disney Company does not accept or consider unsolicited idea submissions.\n',
				customUrl: '@disneymovietrailers',
				publishedAt: '2008-11-18T20:34:44Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/ytc/AGIKgqPAwOO32aO87fk44XuWJzCrYPlI0SsG-5p9sB2qiQ=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/ytc/AGIKgqPAwOO32aO87fk44XuWJzCrYPlI0SsG-5p9sB2qiQ=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/ytc/AGIKgqPAwOO32aO87fk44XuWJzCrYPlI0SsG-5p9sB2qiQ=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Walt Disney Studios',
					description:
						'Watch all of the latest trailers, clips, and videos from upcoming Disney movies!\n\n\nAt The Walt Disney Company, we are committed to bringing great stories, characters, and experiences to guests around the world. We strive to foster an inclusive, diverse, respectful, and safe environment for all fans. We ask the same of our fan communities. As such, we reserve the right to take action including but not limited to hiding, deleting, blocking, and reporting any posts on this account or page. Please also be aware that The Walt Disney Company does not accept or consider unsolicited idea submissions.\n'
				},
				country: 'US'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UUuaFvcY4MhZY3U43mMt1dYQ'
				}
			},
			statistics: {
				viewCount: '1885646109',
				subscriberCount: '4350000',
				hiddenSubscriberCount: false,
				videoCount: '1392'
			},
			brandingSettings: {
				channel: {
					title: 'Walt Disney Studios',
					description:
						'Watch all of the latest trailers, clips, and videos from upcoming Disney movies!\n\n\nAt The Walt Disney Company, we are committed to bringing great stories, characters, and experiences to guests around the world. We strive to foster an inclusive, diverse, respectful, and safe environment for all fans. We ask the same of our fan communities. As such, we reserve the right to take action including but not limited to hiding, deleting, blocking, and reporting any posts on this account or page. Please also be aware that The Walt Disney Company does not accept or consider unsolicited idea submissions.\n',
					unsubscribedTrailer: 'p-5sVX7MRj8',
					country: 'US'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/372gQqhY2SibsP0wNeN23UwiHskaHpZQusHcS8TCwYMK-Yq8Q0wZOGZLKSCgtsj2LVS-Sh7a'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: 'fs2XyKUSWgxG3LC_R2B91mlw7KU',
			id: 'UC5UYMeKfZbFYnLHzoTJB1xA',
			snippet: {
				title: 'Schaffrillas Productions',
				description:
					"I make actual garbage that people mistake for quality content.\n\nBut seriously tho, this channel is home to analysis videos, YouTube Poops, live-action re-enactments of SpongeBob episodes, AMVs of musical theatre songs, and just about anything related to Tamatoa or Aardvark Matt Damon. Hope you enjoy!\n\nI'm sorry, I'm not looking for new editors at this time.\n\nI have a PO Box now; if you'd like to send me something, email me for the address!\n\nChannel banner by https://twitter.com/lovejinkles and https://twitter.com/drawlexa",
				customUrl: '@schaffrillasproductions',
				publishedAt: '2015-06-09T23:32:12Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJXgTnenj7-ik7zhzjBH3PLU7C6VozMZ8qJggdJBHg=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJXgTnenj7-ik7zhzjBH3PLU7C6VozMZ8qJggdJBHg=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/ytc/AL5GRJXgTnenj7-ik7zhzjBH3PLU7C6VozMZ8qJggdJBHg=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'Schaffrillas Productions',
					description:
						"I make actual garbage that people mistake for quality content.\n\nBut seriously tho, this channel is home to analysis videos, YouTube Poops, live-action re-enactments of SpongeBob episodes, AMVs of musical theatre songs, and just about anything related to Tamatoa or Aardvark Matt Damon. Hope you enjoy!\n\nI'm sorry, I'm not looking for new editors at this time.\n\nI have a PO Box now; if you'd like to send me something, email me for the address!\n\nChannel banner by https://twitter.com/lovejinkles and https://twitter.com/drawlexa"
				},
				country: 'US'
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UU5UYMeKfZbFYnLHzoTJB1xA'
				}
			},
			statistics: {
				viewCount: '343846153',
				subscriberCount: '1710000',
				hiddenSubscriberCount: false,
				videoCount: '445'
			},
			brandingSettings: {
				channel: {
					title: 'Schaffrillas Productions',
					description:
						"I make actual garbage that people mistake for quality content.\n\nBut seriously tho, this channel is home to analysis videos, YouTube Poops, live-action re-enactments of SpongeBob episodes, AMVs of musical theatre songs, and just about anything related to Tamatoa or Aardvark Matt Damon. Hope you enjoy!\n\nI'm sorry, I'm not looking for new editors at this time.\n\nI have a PO Box now; if you'd like to send me something, email me for the address!\n\nChannel banner by https://twitter.com/lovejinkles and https://twitter.com/drawlexa",
					unsubscribedTrailer: 'c-2Tjm2M2cg',
					country: 'US'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/GGK3w8ax-Mu7zTJqCpLlXwRP13sP41b_h3CGlK3SxWyu6aaaQ_uH1kZQdTQB75G_9eZz8FsHNg'
				}
			}
		},
		{
			kind: 'youtube#channel',
			etag: 'rJRgryf4gjqcS0vU8ei8Qm9Pokk',
			id: 'UC3XTzVzaHQEd30rQbuvCtTQ',
			snippet: {
				title: 'LastWeekTonight',
				description:
					'Breaking news on a weekly basis. Sundays at 11PM - only on HBO.\nSubscribe to the Last Week Tonight channel for the latest videos from John Oliver and the LWT team.',
				customUrl: '@lastweektonight',
				publishedAt: '2014-03-18T17:41:39Z',
				thumbnails: {
					default: {
						url: 'https://yt3.ggpht.com/PFZVDwDcjBYoTloENpGt1Cmig6xTp8W1DVH5llFv22RLuy4rWIYu9A-OrFu17sVBEmfrw9OVwp0=s88-c-k-c0x00ffffff-no-rj',
						width: 88,
						height: 88
					},
					medium: {
						url: 'https://yt3.ggpht.com/PFZVDwDcjBYoTloENpGt1Cmig6xTp8W1DVH5llFv22RLuy4rWIYu9A-OrFu17sVBEmfrw9OVwp0=s240-c-k-c0x00ffffff-no-rj',
						width: 240,
						height: 240
					},
					high: {
						url: 'https://yt3.ggpht.com/PFZVDwDcjBYoTloENpGt1Cmig6xTp8W1DVH5llFv22RLuy4rWIYu9A-OrFu17sVBEmfrw9OVwp0=s800-c-k-c0x00ffffff-no-rj',
						width: 800,
						height: 800
					}
				},
				localized: {
					title: 'LastWeekTonight',
					description:
						'Breaking news on a weekly basis. Sundays at 11PM - only on HBO.\nSubscribe to the Last Week Tonight channel for the latest videos from John Oliver and the LWT team.'
				}
			},
			contentDetails: {
				relatedPlaylists: {
					likes: '',
					uploads: 'UU3XTzVzaHQEd30rQbuvCtTQ'
				}
			},
			statistics: {
				viewCount: '3599439888',
				subscriberCount: '9180000',
				hiddenSubscriberCount: false,
				videoCount: '413'
			},
			brandingSettings: {
				channel: {
					title: 'LastWeekTonight',
					description:
						'Breaking news on a weekly basis. Sundays at 11PM - only on HBO.\nSubscribe to the Last Week Tonight channel for the latest videos from John Oliver and the LWT team.',
					unsubscribedTrailer: '_uSZwErdH3I'
				},
				image: {
					bannerExternalUrl: 'https://yt3.googleusercontent.com/jsgJS_hY6TWYKJHxsnhi0-cWuwP-G_8k0os2MPOzaTd5vnK82UH0gEc4ASHugyrFcT1QwfKVn-4'
				}
			}
		}
	]
}

const channelSlice = createSlice({
	name: 'channel',
	initialState,
	reducers: {}
})

export default channelSlice.reducer
