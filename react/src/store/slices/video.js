import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [
		{
			kind: 'youtube#video',
			etag: 'Eyf5m1qLmsKDef4dpuAo5GPAk0o',
			id: 'HnzNZ0Mdx4I',
			snippet: {
				publishedAt: '2023-04-07T11:36:21Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Ahsoka | Teaser Trailer | Disney+',
				description: 'Warrior. Outcast. Rebel. Jedi.\n#Ahsoka arrives August 2023 on @DisneyPlus.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/HnzNZ0Mdx4I/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/HnzNZ0Mdx4I/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/HnzNZ0Mdx4I/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/HnzNZ0Mdx4I/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/HnzNZ0Mdx4I/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Ahsoka | Teaser Trailer | Disney+',
					description: 'Warrior. Outcast. Rebel. Jedi.\n#Ahsoka arrives August 2023 on @DisneyPlus.'
				},
				defaultAudioLanguage: 'en-US'
			},
			contentDetails: {
				duration: 'PT1M52S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '7135900',
				likeCount: '233358',
				favoriteCount: '0',
				commentCount: '19825'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'nH4zkcJGlMT-fkG2Cye-QV4GWA0',
			id: 'eQfMbSe7F2g',
			snippet: {
				publishedAt: '2023-04-07T11:57:51Z',
				channelId: 'UCnwY6fAhE3ePu0F2nMP-DLg',
				title: 'Indiana Jones and the Dial of Destiny | Official Trailer',
				description:
					'Indiana Jones and the Dial of Destiny in theaters June 30.\n\nHarrison Ford returns as the legendary hero archaeologist in the highly anticipated fifth installment of the iconic “Indiana Jones” franchise, which is directed by James Mangold (“Ford v Ferrari,” “Logan”). Starring along with Ford are Phoebe Waller-Bridge (“Fleabag”), Antonio Banderas (“Pain and Glory”), John Rhys-Davies (“Raiders of the Lost Ark”), Shaunette Renee Wilson (“Black Panther”), Thomas Kretschmann (“Das Boot”), Toby Jones (“Jurassic World: Fallen Kingdom”), Boyd Holbrook (“Logan”), Oliver Richters (“Black Widow”), Ethann Isidore (“Mortel”) and Mads Mikkelsen (“Fantastic Beasts: The Secrets of Dumbledore”). Directed by James Mangold, the film is produced by Kathleen Kennedy, Frank Marshall and Simon Emanuel, with Steven Spielberg and George Lucas serving as executive producers. John Williams, who has scored each Indy adventure since the original "Raiders of the Lost Ark" in 1981, is once again composing the score.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/eQfMbSe7F2g/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/eQfMbSe7F2g/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/eQfMbSe7F2g/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/eQfMbSe7F2g/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/eQfMbSe7F2g/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Lucasfilm',
				categoryId: '1',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Indiana Jones and the Dial of Destiny | Official Trailer',
					description:
						'Indiana Jones and the Dial of Destiny in theaters June 30.\n\nHarrison Ford returns as the legendary hero archaeologist in the highly anticipated fifth installment of the iconic “Indiana Jones” franchise, which is directed by James Mangold (“Ford v Ferrari,” “Logan”). Starring along with Ford are Phoebe Waller-Bridge (“Fleabag”), Antonio Banderas (“Pain and Glory”), John Rhys-Davies (“Raiders of the Lost Ark”), Shaunette Renee Wilson (“Black Panther”), Thomas Kretschmann (“Das Boot”), Toby Jones (“Jurassic World: Fallen Kingdom”), Boyd Holbrook (“Logan”), Oliver Richters (“Black Widow”), Ethann Isidore (“Mortel”) and Mads Mikkelsen (“Fantastic Beasts: The Secrets of Dumbledore”). Directed by James Mangold, the film is produced by Kathleen Kennedy, Frank Marshall and Simon Emanuel, with Steven Spielberg and George Lucas serving as executive producers. John Williams, who has scored each Indy adventure since the original "Raiders of the Lost Ark" in 1981, is once again composing the score.'
				},
				defaultAudioLanguage: 'en'
			},
			contentDetails: {
				duration: 'PT2M9S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '6388368',
				favoriteCount: '0',
				commentCount: '7571',
				likeCount: '2423423'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'TsJVVJm-WCuo60RfR7KVui3it3s',
			id: 'imSefM4GPpE',
			snippet: {
				publishedAt: '2023-04-10T17:00:22Z',
				channelId: 'UCq7OHvWO6Z3u-LztFdrcU-g',
				title: 'Bowser - Peaches (Official Music Video) | The Super Mario Bros. Movie',
				description:
					'Love really makes a turtle come out of his shell. #SuperMarioMovie \n\n#Peaches (from The Super Mario Bros. Movie) by Jack Black as Bowser. \nhttps://backlotmusic.ffm.to/peaches\n\nWritten by Jack Black, Aaron Horvath, Michael Jelenic, Eric Osmond & John Spiker  \nPublished by Balanga Music (BMI) \nVocals Performed by Jack Black \nProduction, Mixing, Engineering & Piano Performance by John Spiker \nRecorded at Studio Supreme, Sherman Oaks, CA \nMastered by Patricia Sullivan at Bernie Grundman Mastering\n\n--\nThe Super Mario Bros. Movie\nOnly In Theaters Now\n\nFacebook: https://uni.pictures/SMBFB\nTwitter: https://uni.pictures/SMBTW\nInstagram: https://uni.pictures/SMBIG\nTikTok: https://uni.pictures/SMBTT\nSite: https://uni.pictures/SMBSite\n\nhttps://www.instagram.com/illuminatio...\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n--\n\nFrom Nintendo and Illumination comes a new animated film based on the world of Super Mario Bros.\n \nDirected by Aaron Horvath and Michael Jelenic (collaborators on Teen Titans Go!, Teen Titans Go! To the Movies) from a screenplay by Matthew Fogel (The LEGO Movie 2: The Second Part, Minions: The Rise of Gru), the film stars Chris Pratt as Mario, Anya Taylor-Joy as Princess Peach, Charlie Day as Luigi, Jack Black as Bowser, Keegan-Michael Key as Toad, Seth Rogen as Donkey Kong, Fred Armisen as Cranky Kong, Kevin Michael Richardson as Kamek and Sebastian Maniscalco as Spike.\n \nThe film is produced by #Illumination founder and CEO Chris Meledandri and by Shigeru Miyamoto for #Nintendo. The film will be co-financed by Universal Pictures and Nintendo and released worldwide by Universal Pictures.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/imSefM4GPpE/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/imSefM4GPpE/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/imSefM4GPpE/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/imSefM4GPpE/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/imSefM4GPpE/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Illumination',
				tags: [
					'Minions',
					'Movie',
					'Trailer',
					'Despicable Me',
					'banana',
					'kevin',
					'bob',
					'official',
					'Minion',
					'stuart',
					'Illumination',
					'Illumination Entertainment',
					'minions',
					'movie clip',
					'minionnation',
					'super mario movie',
					'the super mario bros movie',
					'peaches',
					'jack black',
					'peaches music video',
					'bowser',
					'bowser peaches',
					'bowser peaches song',
					'jack black peaches'
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Bowser - Peaches (Official Music Video) | The Super Mario Bros. Movie',
					description:
						'Love really makes a turtle come out of his shell. #SuperMarioMovie \n\n#Peaches (from The Super Mario Bros. Movie) by Jack Black as Bowser. \nhttps://backlotmusic.ffm.to/peaches\n\nWritten by Jack Black, Aaron Horvath, Michael Jelenic, Eric Osmond & John Spiker  \nPublished by Balanga Music (BMI) \nVocals Performed by Jack Black \nProduction, Mixing, Engineering & Piano Performance by John Spiker \nRecorded at Studio Supreme, Sherman Oaks, CA \nMastered by Patricia Sullivan at Bernie Grundman Mastering\n\n--\nThe Super Mario Bros. Movie\nOnly In Theaters Now\n\nFacebook: https://uni.pictures/SMBFB\nTwitter: https://uni.pictures/SMBTW\nInstagram: https://uni.pictures/SMBIG\nTikTok: https://uni.pictures/SMBTT\nSite: https://uni.pictures/SMBSite\n\nhttps://www.instagram.com/illuminatio...\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n--\n\nFrom Nintendo and Illumination comes a new animated film based on the world of Super Mario Bros.\n \nDirected by Aaron Horvath and Michael Jelenic (collaborators on Teen Titans Go!, Teen Titans Go! To the Movies) from a screenplay by Matthew Fogel (The LEGO Movie 2: The Second Part, Minions: The Rise of Gru), the film stars Chris Pratt as Mario, Anya Taylor-Joy as Princess Peach, Charlie Day as Luigi, Jack Black as Bowser, Keegan-Michael Key as Toad, Seth Rogen as Donkey Kong, Fred Armisen as Cranky Kong, Kevin Michael Richardson as Kamek and Sebastian Maniscalco as Spike.\n \nThe film is produced by #Illumination founder and CEO Chris Meledandri and by Shigeru Miyamoto for #Nintendo. The film will be co-financed by Universal Pictures and Nintendo and released worldwide by Universal Pictures.'
				},
				defaultAudioLanguage: 'en-US'
			},
			contentDetails: {
				duration: 'PT1M50S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: false,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '1761879',
				likeCount: '127258',
				favoriteCount: '0',
				commentCount: '0'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'mLqPHTge4gbbpw93fBRePXgJq94',
			id: '_f-levD8D_Y',
			snippet: {
				publishedAt: '2023-04-10T16:00:24Z',
				channelId: 'UCvAhDxNNUDhi78tMXVGBUaQ',
				title: 'Rebuilding A Flooded $2,000,000 McLaren P1 | Part 1',
				description:
					'Check your car\'s history with CarVertical! Get 10% OFF here►https://bit.ly/carverticaltavarish\nSend your TERRIBLE vehicle histories here►asktavarish@gmail.com\nUse code "TAVARISH" to get 10% OFF!!!\nThanks to CarVertical for sponsoring this video! \n--------------------------------------------------------------------\nSubscribe! ►http://bit.ly/2xZGtYN\nInstagram ►https://www.instagram.com/therealtavarish\nTavarish Shirts and Merch! ►http://bit.ly/shoptavarish\n--------------------------------------------------------------------\nThanks to the companies that support this channel!\nValvoline - The Original Motor Oil►https://www.valvoline.com/\nFind your dream car on AutoTempest!►https://bit.ly/foundonautotempest\n--------------------------------------------------------------------\nQuestions? Comments? Business inquiries? Email me at asktavarish@gmail.com\n--------------------------------------------------------------------\nMy Equipment: \nSimiron Epoxy Floor Coating►https://simiron.com\nBendpak Lifts and Equipment►https://bendpak.com\n--------------------------------------------------------------------\nMusic used in this video:\nNIVIRO - You [NCS Release]►https://www.youtube.com/watch?v=2Nv5juZKhKo\n\nMalik Bash - Ghosts [NCS Release]►https://www.youtube.com/watch?v=-9Z5Nhsm7GA',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/_f-levD8D_Y/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/_f-levD8D_Y/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/_f-levD8D_Y/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/_f-levD8D_Y/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/_f-levD8D_Y/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Tavarish',
				tags: [
					'aston martin',
					'mercedes',
					'amg',
					'hyundai',
					'bmw',
					'lamborghini',
					'ferrari',
					'toyota',
					'supra',
					'mr2',
					'sw20',
					'3sgte',
					'2jz',
					'1jz',
					'sl55',
					'r230',
					'r231',
					'm113k',
					'vantage',
					'v8',
					'v12',
					'v10',
					'v6',
					'gallardo',
					'turbo',
					'cheap',
					'budget',
					'diy',
					'wrench everyday',
					'doug demuro',
					'chrisfix',
					'hoovies garage',
					'tavarish',
					'jalopnik',
					'mightycarmods',
					'motor trend',
					'roadkill',
					'hack',
					'bendpak',
					'tools',
					'lift',
					'4 post',
					'2 post',
					'quick jack',
					'welding',
					'how to',
					'tutorial',
					'p1',
					'hypercar',
					'mclaren',
					'flood',
					'hidden',
					'surprise',
					'restoration',
					'goonzquad',
					'bisforbuild',
					'topgear',
					'918',
					'laferrari',
					'bugatti',
					'chiron',
					'veyron',
					'porsche'
				],
				categoryId: '2',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Rebuilding A Flooded $2,000,000 McLaren P1 | Part 1',
					description:
						'Check your car\'s history with CarVertical! Get 10% OFF here►https://bit.ly/carverticaltavarish\nSend your TERRIBLE vehicle histories here►asktavarish@gmail.com\nUse code "TAVARISH" to get 10% OFF!!!\nThanks to CarVertical for sponsoring this video! \n--------------------------------------------------------------------\nSubscribe! ►http://bit.ly/2xZGtYN\nInstagram ►https://www.instagram.com/therealtavarish\nTavarish Shirts and Merch! ►http://bit.ly/shoptavarish\n--------------------------------------------------------------------\nThanks to the companies that support this channel!\nValvoline - The Original Motor Oil►https://www.valvoline.com/\nFind your dream car on AutoTempest!►https://bit.ly/foundonautotempest\n--------------------------------------------------------------------\nQuestions? Comments? Business inquiries? Email me at asktavarish@gmail.com\n--------------------------------------------------------------------\nMy Equipment: \nSimiron Epoxy Floor Coating►https://simiron.com\nBendpak Lifts and Equipment►https://bendpak.com\n--------------------------------------------------------------------\nMusic used in this video:\nNIVIRO - You [NCS Release]►https://www.youtube.com/watch?v=2Nv5juZKhKo\n\nMalik Bash - Ghosts [NCS Release]►https://www.youtube.com/watch?v=-9Z5Nhsm7GA'
				},
				defaultAudioLanguage: 'en'
			},
			contentDetails: {
				duration: 'PT39M27S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '1015483',
				likeCount: '72025',
				favoriteCount: '0',
				commentCount: '4556'
			}
		},
		{
			kind: 'youtube#video',
			etag: '_2BIw6EUqyOk8_n6nfhvPESW6ts',
			id: 'vrk40pZ8Kc8',
			snippet: {
				publishedAt: '2023-04-10T14:30:15Z',
				channelId: 'UCtHaxi4GTYDpJgMSGy7AeSw',
				title: 'a boring video',
				description:
					"this is some stuff i do in between videos\n\nmusic:\nElija who - a random song they DM'd me a year ago (comic shop 92bpm)\nSummer Salt - Driving to Hawaii\nAllem Iversom - Downwards",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/vrk40pZ8Kc8/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/vrk40pZ8Kc8/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/vrk40pZ8Kc8/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/vrk40pZ8Kc8/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/vrk40pZ8Kc8/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Michael Reeves',
				tags: ['sand'],
				categoryId: '23',
				liveBroadcastContent: 'none',
				localized: {
					title: 'a boring video',
					description:
						"this is some stuff i do in between videos\n\nmusic:\nElija who - a random song they DM'd me a year ago (comic shop 92bpm)\nSummer Salt - Driving to Hawaii\nAllem Iversom - Downwards"
				},
				defaultAudioLanguage: 'en'
			},
			contentDetails: {
				duration: 'PT10M10S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '2118541',
				likeCount: '288861',
				favoriteCount: '0',
				commentCount: '9667'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'xv0_dPDidsfYVDVtXNRvFKNrVkk',
			id: 'PUXbKplNrdI',
			snippet: {
				publishedAt: '2023-04-10T13:04:51Z',
				channelId: 'UCcHtke0raf8vNYLM1Hbq3Jw',
				title: 'Julián Figueroa: Así se enteró Maribel Guardia de la muerte de su hijo | Noticias con Francisco Zea',
				description:
					'Muere #JuliánFigueroa a los 28 años de edad. Así se enteró #MaribelGuardia de la noticia:\nDescanse en paz. \n\nVisita nuestro sitio web: http://www.imagentv.com\nNo te pierdas Imagen Noticias con Francisco Zea de lunes a viernes en punto de las 5:45 am por Imagen Televisión.\n\nSíguenos en nuestras redes sociales:\nFacebook: https://www.facebook.com/ImagenTVNoticias/\nhttps://www.facebook.com/ImagenZea/\n \nTwitter:\n@ImagenTVMex    https://twitter.com/ImagenTVMex\n@ImagenZea    https://twitter.com/imagenZea\n \nAquí encontrarás la mejor información nacional e internacional de Imagen Noticias con Francisco Zea, Yuriria Sierra y Ciro Gómez Leyva.\n\n¡Déjanos tus comentarios, da like, comparte y suscríbete!',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/PUXbKplNrdI/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/PUXbKplNrdI/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/PUXbKplNrdI/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/PUXbKplNrdI/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/PUXbKplNrdI/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Imagen Noticias',
				tags: [
					'julian figueroa esposa',
					'julian figueroa muerte',
					'julian figueroa muere',
					'julian figueroa fallece',
					'julian figueroa fallecimiento',
					'julian figueroa noticias',
					'julian figueroa edad',
					'julian figueroa y maribel guardia',
					'julian figueroa y joan sebastian',
					'julian figueroa instagram',
					'julian figueroa hermanos',
					'julian figueroa',
					'maribel guardia hijo',
					'maribel guardia y joan sebastian',
					'maribel guardia instagram',
					'maribel guardia',
					'joan sebastian hijos',
					'joan sebastian',
					'jose manuel figueroa'
				],
				categoryId: '25',
				liveBroadcastContent: 'none',
				defaultLanguage: 'en',
				localized: {
					title: 'Julián Figueroa: Así se enteró Maribel Guardia de la muerte de su hijo | Noticias con Francisco Zea',
					description:
						'Muere #JuliánFigueroa a los 28 años de edad. Así se enteró #MaribelGuardia de la noticia:\nDescanse en paz. \n\nVisita nuestro sitio web: http://www.imagentv.com\nNo te pierdas Imagen Noticias con Francisco Zea de lunes a viernes en punto de las 5:45 am por Imagen Televisión.\n\nSíguenos en nuestras redes sociales:\nFacebook: https://www.facebook.com/ImagenTVNoticias/\nhttps://www.facebook.com/ImagenZea/\n \nTwitter:\n@ImagenTVMex    https://twitter.com/ImagenTVMex\n@ImagenZea    https://twitter.com/imagenZea\n \nAquí encontrarás la mejor información nacional e internacional de Imagen Noticias con Francisco Zea, Yuriria Sierra y Ciro Gómez Leyva.\n\n¡Déjanos tus comentarios, da like, comparte y suscríbete!'
				},
				defaultAudioLanguage: 'en'
			},
			contentDetails: {
				duration: 'PT3M52S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '911898',
				likeCount: '7380',
				favoriteCount: '0',
				commentCount: '1013'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'sLKp5EY2M9vaLWJNlG5RU_qkx3I',
			id: 'SSXqU92cymY',
			snippet: {
				publishedAt: '2023-04-10T12:21:10Z',
				channelId: 'UCZGYJFUizSax-yElQaFDp5Q',
				title: 'Star Wars: Visions Volume 2 | Official Trailer | Disney+',
				description:
					'Just released at Star Wars Celebration: Watch the new trailer for Star Wars Visions: Volume 2, featuring nine new shorts from nine celebrated animation studios from across the globe.\n\nStreaming May 4 on Disney+.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/SSXqU92cymY/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/SSXqU92cymY/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/SSXqU92cymY/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/SSXqU92cymY/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/SSXqU92cymY/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Star Wars',
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Star Wars: Visions Volume 2 | Official Trailer | Disney+',
					description:
						'Just released at Star Wars Celebration: Watch the new trailer for Star Wars Visions: Volume 2, featuring nine new shorts from nine celebrated animation studios from across the globe.\n\nStreaming May 4 on Disney+.'
				},
				defaultAudioLanguage: 'en-US'
			},
			contentDetails: {
				duration: 'PT2M2S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '1613544',
				likeCount: '73054',
				favoriteCount: '0',
				commentCount: '3873'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'Vt7qRB3GFX1YKgPivsjrbnoNsnI',
			id: 'DOaG1fQQ_4Y',
			snippet: {
				publishedAt: '2023-04-10T17:13:58Z',
				channelId: 'UC5UYMeKfZbFYnLHzoTJB1xA',
				title: 'The Super Mario Bros Movie - Is It Good or Nah?',
				description:
					"Head to http://squarespace.com/schaffrillas to save 10% off your first purchase of a website or domain. Thanks to Squarespace for sponsoring this video!\n\nSchaff is hooked on the brothers! Or maybe he isn't! Watch the review to find out\n\nEditor's Channels:\nGoop: https://www.youtube.com/c/GoopVideos\n\nPatreon: https://www.patreon.com/Schaffrillas\nTwitter: https://twitter.com/Schaffrillas\nRedbubble: https://www.redbubble.com/people/scha....\nReddit: https://www.reddit.com/r/Schaffrillas...\n\nEsteemed $5+ Patrons:\naheaney15\nAiden Mcgillicuddy\nAlpha Red\nAmaru Dejesus\nAndre Gutierrez\nAndrew Young\nAshley Forrest\nBATMAN\nCaliyopo\nCharlotte M\nClarissa Wee\nCole Jackson\nDaniel Goldhorn\nDanmccould\nDreydan Hanshaw\nEmily Allen\nEvagorgen\nFantastic Mr. Foxclaw\nFaucet_of_Drip\nFlan\nGabi Christie\nGabriel Vega Barreto\nGameplayer1500\nGavin Trout\nGty200\nHankshark\nJackson Merrill\nJacob Baum\nJake Albert\nJake G\nJonah Who\nJonathan Kermanian\nJoseph\nJoseph Maltby\nJosh Girmay\nJustin Zboyovski\nKiarkat_Kitsune\nKeshav Batra\nLeif Bradshaw\nMadison Mabie\nMargaret Neuwirth\nMatt Fernandes\nMichael David Rose\nMichael Thomas\nMilosz Kluski\nNight Man52\nOceanechoes\nOlivia Mendel\nPierre Desbrieres\nPinkiePotPie\nQuetzal the Snek\nRebeccah Starlight - Star Giant Productions\nRebel Friend\nRed Mustached Alien\nRocco Damiano\nRyan Santa Cruz\nRyland Tews\nSassy\nSeth Howell\nSilas Hurd\nSoloco\nSublime Sky\nSuperJimmy978\nTailored Muffin\nThe GAG Reflex\nThe TARDIS Pig/TC\nToxic shock\nTyler Rumbold\nUncultured Swine\nVolianer\nWaifu Patrol\nXaiddyd\nYINSED\nZeynep Zingir",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/DOaG1fQQ_4Y/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/DOaG1fQQ_4Y/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/DOaG1fQQ_4Y/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/DOaG1fQQ_4Y/sddefault.jpg',
						width: 640,
						height: 480
					}
				},
				channelTitle: 'Schaffrillas Productions',
				tags: ['Schaffrillas Productions', 'Mario', 'Luigi', 'Peach', 'Bowser', 'Toad', 'Donkey Kong', 'Illumination'],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'The Super Mario Bros Movie - Is It Good or Nah?',
					description:
						"Head to http://squarespace.com/schaffrillas to save 10% off your first purchase of a website or domain. Thanks to Squarespace for sponsoring this video!\n\nSchaff is hooked on the brothers! Or maybe he isn't! Watch the review to find out\n\nEditor's Channels:\nGoop: https://www.youtube.com/c/GoopVideos\n\nPatreon: https://www.patreon.com/Schaffrillas\nTwitter: https://twitter.com/Schaffrillas\nRedbubble: https://www.redbubble.com/people/scha....\nReddit: https://www.reddit.com/r/Schaffrillas...\n\nEsteemed $5+ Patrons:\naheaney15\nAiden Mcgillicuddy\nAlpha Red\nAmaru Dejesus\nAndre Gutierrez\nAndrew Young\nAshley Forrest\nBATMAN\nCaliyopo\nCharlotte M\nClarissa Wee\nCole Jackson\nDaniel Goldhorn\nDanmccould\nDreydan Hanshaw\nEmily Allen\nEvagorgen\nFantastic Mr. Foxclaw\nFaucet_of_Drip\nFlan\nGabi Christie\nGabriel Vega Barreto\nGameplayer1500\nGavin Trout\nGty200\nHankshark\nJackson Merrill\nJacob Baum\nJake Albert\nJake G\nJonah Who\nJonathan Kermanian\nJoseph\nJoseph Maltby\nJosh Girmay\nJustin Zboyovski\nKiarkat_Kitsune\nKeshav Batra\nLeif Bradshaw\nMadison Mabie\nMargaret Neuwirth\nMatt Fernandes\nMichael David Rose\nMichael Thomas\nMilosz Kluski\nNight Man52\nOceanechoes\nOlivia Mendel\nPierre Desbrieres\nPinkiePotPie\nQuetzal the Snek\nRebeccah Starlight - Star Giant Productions\nRebel Friend\nRed Mustached Alien\nRocco Damiano\nRyan Santa Cruz\nRyland Tews\nSassy\nSeth Howell\nSilas Hurd\nSoloco\nSublime Sky\nSuperJimmy978\nTailored Muffin\nThe GAG Reflex\nThe TARDIS Pig/TC\nToxic shock\nTyler Rumbold\nUncultured Swine\nVolianer\nWaifu Patrol\nXaiddyd\nYINSED\nZeynep Zingir"
				}
			},
			contentDetails: {
				duration: 'PT12M24S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '513576',
				likeCount: '43448',
				favoriteCount: '0',
				commentCount: '3743'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'WpEgFctoeJfiuaMzmNFheiflzb8',
			id: 'p-5sVX7MRj8',
			snippet: {
				publishedAt: '2023-04-10T15:00:19Z',
				channelId: 'UCuaFvcY4MhZY3U43mMt1dYQ',
				title: 'Peter Pan & Wendy | Official Trailer | Disney+',
				description:
					'Experience #PeterPanAndWendy, Disney’s epic movie event, April 28 only on Disney+. ✨\n\n“Peter Pan & Wendy,” a live-action reimagining of the J.M. Barrie novel and the 1953 animated classic, will begin streaming April 28, 2023, exclusively on Disney+. Check out the teaser trailer and poster for the original movie directed by David Lowery (“The Green Knight,” “Pete’s Dragon”), and get ready to experience the timeless adventure featuring the beloved characters like never before.\n \n“Peter Pan & Wendy” introduces Wendy Darling, a young girl looking to avoid boarding school who meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling and dangerous adventure that will change her life forever. The film stars Jude Law (“Fantastic Beasts: The Secrets of Dumbledore”), Alexander Molony (“The Reluctant Landlord”), Ever Anderson (“Resident Evil: The Final Chapter”), Yara Shahidi (“Grown-ish”), Alyssa Wapanatâhk, Joshua Pickering (“A Discovery of Witches”), Jacobi Jupe, Molly Parker (“House of Cards”), Alan Tudyk (“Rogue One: A Star Wars Story”), and Jim Gaffigan (“The Jim Gaffigan Show”). “Peter Pan and Wendy” is directed by David Lowery from a screenplay by David Lowery & Toby Halbrooks (“The Green Knight”) based on the novel by J. M. Barrie and the animated film “Peter Pan.” The producer is Jim Whitaker (“Pete’s Dragon”), with Adam Borba (“A Wrinkle in Time”), Thomas M. Hammel (“Thor: Ragnarok”), and Toby Halbrooks serving as executive producers.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/p-5sVX7MRj8/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/p-5sVX7MRj8/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/p-5sVX7MRj8/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/p-5sVX7MRj8/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/p-5sVX7MRj8/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'Walt Disney Studios',
				categoryId: '1',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Peter Pan & Wendy | Official Trailer | Disney+',
					description:
						'Experience #PeterPanAndWendy, Disney’s epic movie event, April 28 only on Disney+. ✨\n\n“Peter Pan & Wendy,” a live-action reimagining of the J.M. Barrie novel and the 1953 animated classic, will begin streaming April 28, 2023, exclusively on Disney+. Check out the teaser trailer and poster for the original movie directed by David Lowery (“The Green Knight,” “Pete’s Dragon”), and get ready to experience the timeless adventure featuring the beloved characters like never before.\n \n“Peter Pan & Wendy” introduces Wendy Darling, a young girl looking to avoid boarding school who meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling and dangerous adventure that will change her life forever. The film stars Jude Law (“Fantastic Beasts: The Secrets of Dumbledore”), Alexander Molony (“The Reluctant Landlord”), Ever Anderson (“Resident Evil: The Final Chapter”), Yara Shahidi (“Grown-ish”), Alyssa Wapanatâhk, Joshua Pickering (“A Discovery of Witches”), Jacobi Jupe, Molly Parker (“House of Cards”), Alan Tudyk (“Rogue One: A Star Wars Story”), and Jim Gaffigan (“The Jim Gaffigan Show”). “Peter Pan and Wendy” is directed by David Lowery from a screenplay by David Lowery & Toby Halbrooks (“The Green Knight”) based on the novel by J. M. Barrie and the animated film “Peter Pan.” The producer is Jim Whitaker (“Pete’s Dragon”), with Adam Borba (“A Wrinkle in Time”), Thomas M. Hammel (“Thor: Ragnarok”), and Toby Halbrooks serving as executive producers.'
				},
				defaultAudioLanguage: 'en-US'
			},
			contentDetails: {
				duration: 'PT2M15S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '1461926',
				likeCount: '8698',
				favoriteCount: '0',
				commentCount: '1361'
			}
		},
		{
			kind: 'youtube#video',
			etag: 'D5inKN2UKxsgAABejCNWG9RBTZ0',
			id: 'qrizmAo17Os',
			snippet: {
				publishedAt: '2023-04-10T06:30:18Z',
				channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
				title: 'Homeowners Associations: Last Week Tonight with John Oliver (HBO)',
				description:
					'John Oliver discusses homeowners associations, the surprising power they have, and how to tell if a tree is “tree-shaped.” \n\nConnect with Last Week Tonight online... \n\nSubscribe to the Last Week Tonight YouTube channel for more almost news as it almost happens: www.youtube.com/lastweektonight \n\nFind Last Week Tonight on Facebook like your mom would: www.facebook.com/lastweektonight \n\nFollow us on Twitter for news about jokes and jokes about news: www.twitter.com/lastweektonight \n\nVisit our official site for all that other stuff at once: www.hbo.com/lastweektonight',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/qrizmAo17Os/default.jpg',
						width: 120,
						height: 90
					},
					medium: {
						url: 'https://i.ytimg.com/vi/qrizmAo17Os/mqdefault.jpg',
						width: 320,
						height: 180
					},
					high: {
						url: 'https://i.ytimg.com/vi/qrizmAo17Os/hqdefault.jpg',
						width: 480,
						height: 360
					},
					standard: {
						url: 'https://i.ytimg.com/vi/qrizmAo17Os/sddefault.jpg',
						width: 640,
						height: 480
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/qrizmAo17Os/maxresdefault.jpg',
						width: 1280,
						height: 720
					}
				},
				channelTitle: 'LastWeekTonight',
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Homeowners Associations: Last Week Tonight with John Oliver (HBO)',
					description:
						'John Oliver discusses homeowners associations, the surprising power they have, and how to tell if a tree is “tree-shaped.” \n\nConnect with Last Week Tonight online... \n\nSubscribe to the Last Week Tonight YouTube channel for more almost news as it almost happens: www.youtube.com/lastweektonight \n\nFind Last Week Tonight on Facebook like your mom would: www.facebook.com/lastweektonight \n\nFollow us on Twitter for news about jokes and jokes about news: www.twitter.com/lastweektonight \n\nVisit our official site for all that other stuff at once: www.hbo.com/lastweektonight'
				},
				defaultAudioLanguage: 'en-US'
			},
			contentDetails: {
				duration: 'PT25M28S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				regionRestriction: {
					blocked: ['AU', 'CA', 'GB', 'IS', 'NZ']
				},
				contentRating: {},
				projection: 'rectangular'
			},
			statistics: {
				viewCount: '2272544',
				likeCount: '73513',
				favoriteCount: '0',
				commentCount: '11463'
			}
		}
	]
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {}
})

export default videoSlice.reducer
