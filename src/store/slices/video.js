import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api";

const initialState = {
    response: {
        "kind": "youtube#videoListResponse",
        "etag": "B6Ti3tJLZAItkzqA0xj4oTh21ts",
        "items": [
            {
                "kind": "youtube#video",
                "etag": "Eyf5m1qLmsKDef4dpuAo5GPAk0o",
                "id": "HnzNZ0Mdx4I",
                "snippet": {
                    "publishedAt": "2023-04-07T11:36:21Z",
                    "channelId": "UCZGYJFUizSax-yElQaFDp5Q",
                    "title": "Ahsoka | Teaser Trailer | Disney+",
                    "description": "Warrior. Outcast. Rebel. Jedi.\n#Ahsoka arrives August 2023 on @DisneyPlus.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Star Wars",
                    "categoryId": "24",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Ahsoka | Teaser Trailer | Disney+",
                        "description": "Warrior. Outcast. Rebel. Jedi.\n#Ahsoka arrives August 2023 on @DisneyPlus."
                    },
                    "defaultAudioLanguage": "en-US"
                },
                "contentDetails": {
                    "duration": "PT1M52S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "true",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "7135900",
                    "likeCount": "233358",
                    "favoriteCount": "0",
                    "commentCount": "19825"
                }
            },
            {
                "kind": "youtube#video",
                "etag": "nH4zkcJGlMT-fkG2Cye-QV4GWA0",
                "id": "eQfMbSe7F2g",
                "snippet": {
                    "publishedAt": "2023-04-07T11:57:51Z",
                    "channelId": "UCnwY6fAhE3ePu0F2nMP-DLg",
                    "title": "Indiana Jones and the Dial of Destiny | Official Trailer",
                    "description": "Indiana Jones and the Dial of Destiny in theaters June 30.\n\nHarrison Ford returns as the legendary hero archaeologist in the highly anticipated fifth installment of the iconic “Indiana Jones” franchise, which is directed by James Mangold (“Ford v Ferrari,” “Logan”). Starring along with Ford are Phoebe Waller-Bridge (“Fleabag”), Antonio Banderas (“Pain and Glory”), John Rhys-Davies (“Raiders of the Lost Ark”), Shaunette Renee Wilson (“Black Panther”), Thomas Kretschmann (“Das Boot”), Toby Jones (“Jurassic World: Fallen Kingdom”), Boyd Holbrook (“Logan”), Oliver Richters (“Black Widow”), Ethann Isidore (“Mortel”) and Mads Mikkelsen (“Fantastic Beasts: The Secrets of Dumbledore”). Directed by James Mangold, the film is produced by Kathleen Kennedy, Frank Marshall and Simon Emanuel, with Steven Spielberg and George Lucas serving as executive producers. John Williams, who has scored each Indy adventure since the original \"Raiders of the Lost Ark\" in 1981, is once again composing the score.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Lucasfilm",
                    "categoryId": "1",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Indiana Jones and the Dial of Destiny | Official Trailer",
                        "description": "Indiana Jones and the Dial of Destiny in theaters June 30.\n\nHarrison Ford returns as the legendary hero archaeologist in the highly anticipated fifth installment of the iconic “Indiana Jones” franchise, which is directed by James Mangold (“Ford v Ferrari,” “Logan”). Starring along with Ford are Phoebe Waller-Bridge (“Fleabag”), Antonio Banderas (“Pain and Glory”), John Rhys-Davies (“Raiders of the Lost Ark”), Shaunette Renee Wilson (“Black Panther”), Thomas Kretschmann (“Das Boot”), Toby Jones (“Jurassic World: Fallen Kingdom”), Boyd Holbrook (“Logan”), Oliver Richters (“Black Widow”), Ethann Isidore (“Mortel”) and Mads Mikkelsen (“Fantastic Beasts: The Secrets of Dumbledore”). Directed by James Mangold, the film is produced by Kathleen Kennedy, Frank Marshall and Simon Emanuel, with Steven Spielberg and George Lucas serving as executive producers. John Williams, who has scored each Indy adventure since the original \"Raiders of the Lost Ark\" in 1981, is once again composing the score."
                    },
                    "defaultAudioLanguage": "en"
                },
                "contentDetails": {
                    "duration": "PT2M9S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "true",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "6388368",
                    "favoriteCount": "0",
                    "commentCount": "7571"
                }
            },
            {
                "kind": "youtube#video",
                "etag": "Lx1Ys1tIgY0s4M5YUl77ZHTAyi4",
                "id": "MM1wJ2bMPhQ",
                "snippet": {
                    "publishedAt": "2023-04-07T04:00:11Z",
                    "channelId": "UClW4jraMKz6Qj69lJf-tODA",
                    "title": "YoungBoy Never Broke Again feat. Nicki Minaj - WTF ( Official Music Video)",
                    "description": "Official Music Video for WTF",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "YoungBoy Never Broke Again",
                    "tags": [
                        "YoungBoy Never Broke Again",
                        "NBA YoungBoy",
                        "YoungBoy Quando Rondo",
                        "YoungBoy Leak",
                        "Make No Sense YoungBoy",
                        "Youngboy Lost Motives",
                        "YoungBoy NBA Music Video",
                        "YoungBoy Never Broke Again TOP",
                        "nba youngboy top",
                        "YoungBoy NBA TOP album",
                        "7KTt4_M09Rw",
                        "0C80BSgjb8M",
                        "qChxuVxs8FA",
                        "dYk-yCsuTUo",
                        "6MCSr65d9Xc",
                        "ALimx-H8C6s",
                        "YoungBoy Never Broke Again Sincerely Kentrell",
                        "Sincerely Kentrell",
                        "Youngboy NBA Sincerely Kentrell",
                        "Sincerely Kentrell album",
                        "YBNBA Sincerely Kentrell",
                        "YB Sincerely Kentrell",
                        "Kentrell"
                    ],
                    "categoryId": "10",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "YoungBoy Never Broke Again feat. Nicki Minaj - WTF ( Official Music Video)",
                        "description": "Official Music Video for WTF"
                    }
                },
                "contentDetails": {
                    "duration": "PT2M48S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "1757925",
                    "likeCount": "156129",
                    "favoriteCount": "0",
                    "commentCount": "12860"
                }
            },
            {
                "kind": "youtube#video",
                "etag": "4Ayd5Q4S4lTLLtNfMQEgIzLp5Po",
                "id": "aW7bzd8uwyQ",
                "snippet": {
                    "publishedAt": "2023-04-07T16:00:10Z",
                    "channelId": "UCtylTUUVIGY_i5afsQYeBZA",
                    "title": "Jack Black - Peaches (Directed by Cole Bennett)  The Super Mario Bros. Movie",
                    "description": "Lyrical Lemonade Presents\n\n“Peaches” (from The Super Mario Bros. Movie) by Jack Black https://backlotmusic.ffm.to/peaches\n \nThe Super Mario Bros. Movie only in theaters now.\n\nTickets: http://thesupermariobros.movie\nFacebook: https://uni.pictures/SMBFB\nTwitter: https://uni.pictures/SMBTW\nInstagram: https://uni.pictures/SMBIG\nTikTok: https://uni.pictures/SMBTT\nSite: https://uni.pictures/SMBSite\nhttps://www.instagram.com/illuminationent\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n\n\nThank you to The Super Mario Bros Film for sponsoring this video!\n\n* * * *\n\nDirector and Editor: Cole Bennett\n\nDirector of Photography: Franklin Ricart\n\nProduction Designer: Cody Fusina\n\nVFX: Scissor Films\n3D Titles: Reduciano\nColor Grade: Bryan Smaller with Company 3\n\nExecutive Producer: Jake Millan\nCo Producer: J-T Ladt\nHead of Production: Krista Worby\n\nCostume Stylist: Dayna Pink\nCostume Design: Terry Mark Anderson\nHair and Makeup: Roz Music\n\n1st AD: Robert Blair II\nProduction Manager: Kateland Cornine\n1st AC: Michael Tursi\n2nd AC: Joshua Montiel\nJib Operator: Babak Mansouri\nJib Assistant: Daniel Hernandez\nGaffer: Dimitri Christoforidis\nBest Boy Electric: Hayden Klemes\n\nElectric: Sven Van Ostrand\nKey Grip: Carl Stuart\nBest Boy Grip: David Kinchen\nGrip: Christian Del Rio\n\nArt Director: Mitchell Dillon\nSet Decorator: Emmett Tekstra\nSet Build: Strong Arm Scenery\n\nPlayback/VTR: Ryan Steward\n\nProduction Assistant: Thomas Lynch\nProduction Assistant: Jordan Szarko\nSet Medic: Mario Moran\n\n\n\n\n--\n\n\nOfficial Channel of Lyrical Lemonade \n\nSubscribe for updates on music videos, interviews, performance videos, etc.\n\nLyrical Lemonade's Spotify Playlist:\nhttps://open.spotify.com/user/gh3vdz775oy18ah1wp9ucxsj5/playlist/5UuPeWDR2I8a8pORvW9vmr\n\nLyrical Lemonade Socials:\n\nhttp://www.twitter.com/lyricalemonade\nhttp://www.instagram.com/lyricalemonade\nhttp://www.facebook.com/lyricalemonade\nhttp://www.lyricallemonade.com\n\n\nCole Bennett Socials:\n\nhttp://www.twitter.com/_colebennett_\nhttp://www.instagram.com/colebennett\n\nLENNY ~ a hidden character representing happiness & good energy\nhttp://instagram.com/lenny",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Lyrical Lemonade",
                    "tags": [
                        "Jack Black",
                        "Peaches",
                        "Peaches Song",
                        "Bowser",
                        "SUper Mario",
                        "Luigi",
                        "Donkey Kong",
                        "Seth Rogan",
                        "Lyrical Lemonade",
                        "COle Bennett",
                        "School of Rock",
                        "Nacho Libre",
                        "Tropic Thunder",
                        "music video",
                        "new"
                    ],
                    "categoryId": "24",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Jack Black - Peaches (Directed by Cole Bennett)  The Super Mario Bros. Movie",
                        "description": "Lyrical Lemonade Presents\n\n“Peaches” (from The Super Mario Bros. Movie) by Jack Black https://backlotmusic.ffm.to/peaches\n \nThe Super Mario Bros. Movie only in theaters now.\n\nTickets: http://thesupermariobros.movie\nFacebook: https://uni.pictures/SMBFB\nTwitter: https://uni.pictures/SMBTW\nInstagram: https://uni.pictures/SMBIG\nTikTok: https://uni.pictures/SMBTT\nSite: https://uni.pictures/SMBSite\nhttps://www.instagram.com/illuminationent\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n\n\nThank you to The Super Mario Bros Film for sponsoring this video!\n\n* * * *\n\nDirector and Editor: Cole Bennett\n\nDirector of Photography: Franklin Ricart\n\nProduction Designer: Cody Fusina\n\nVFX: Scissor Films\n3D Titles: Reduciano\nColor Grade: Bryan Smaller with Company 3\n\nExecutive Producer: Jake Millan\nCo Producer: J-T Ladt\nHead of Production: Krista Worby\n\nCostume Stylist: Dayna Pink\nCostume Design: Terry Mark Anderson\nHair and Makeup: Roz Music\n\n1st AD: Robert Blair II\nProduction Manager: Kateland Cornine\n1st AC: Michael Tursi\n2nd AC: Joshua Montiel\nJib Operator: Babak Mansouri\nJib Assistant: Daniel Hernandez\nGaffer: Dimitri Christoforidis\nBest Boy Electric: Hayden Klemes\n\nElectric: Sven Van Ostrand\nKey Grip: Carl Stuart\nBest Boy Grip: David Kinchen\nGrip: Christian Del Rio\n\nArt Director: Mitchell Dillon\nSet Decorator: Emmett Tekstra\nSet Build: Strong Arm Scenery\n\nPlayback/VTR: Ryan Steward\n\nProduction Assistant: Thomas Lynch\nProduction Assistant: Jordan Szarko\nSet Medic: Mario Moran\n\n\n\n\n--\n\n\nOfficial Channel of Lyrical Lemonade \n\nSubscribe for updates on music videos, interviews, performance videos, etc.\n\nLyrical Lemonade's Spotify Playlist:\nhttps://open.spotify.com/user/gh3vdz775oy18ah1wp9ucxsj5/playlist/5UuPeWDR2I8a8pORvW9vmr\n\nLyrical Lemonade Socials:\n\nhttp://www.twitter.com/lyricalemonade\nhttp://www.instagram.com/lyricalemonade\nhttp://www.facebook.com/lyricalemonade\nhttp://www.lyricallemonade.com\n\n\nCole Bennett Socials:\n\nhttp://www.twitter.com/_colebennett_\nhttp://www.instagram.com/colebennett\n\nLENNY ~ a hidden character representing happiness & good energy\nhttp://instagram.com/lenny"
                    }
                },
                "contentDetails": {
                    "duration": "PT2M51S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "1317767",
                    "likeCount": "95719",
                    "favoriteCount": "0",
                    "commentCount": "4791"
                }
            }
        ],
        "nextPageToken": "CAQQAA",
        "pageInfo": {
            "totalResults": 200,
            "resultsPerPage": 4
        }
    },
    list: [
        {
            "kind": "youtube#video",
            "etag": "Eyf5m1qLmsKDef4dpuAo5GPAk0o",
            "id": "HnzNZ0Mdx4I",
            "snippet": {
                "publishedAt": "2023-04-07T11:36:21Z",
                "channelId": "UCZGYJFUizSax-yElQaFDp5Q",
                "title": "Ahsoka | Teaser Trailer | Disney+",
                "description": "Warrior. Outcast. Rebel. Jedi.\n#Ahsoka arrives August 2023 on @DisneyPlus.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/HnzNZ0Mdx4I/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Star Wars",
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Ahsoka | Teaser Trailer | Disney+",
                    "description": "Warrior. Outcast. Rebel. Jedi.\n#Ahsoka arrives August 2023 on @DisneyPlus."
                },
                "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
                "duration": "PT1M52S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "7135900",
                "likeCount": "233358",
                "favoriteCount": "0",
                "commentCount": "19825"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "nH4zkcJGlMT-fkG2Cye-QV4GWA0",
            "id": "eQfMbSe7F2g",
            "snippet": {
                "publishedAt": "2023-04-07T11:57:51Z",
                "channelId": "UCnwY6fAhE3ePu0F2nMP-DLg",
                "title": "Indiana Jones and the Dial of Destiny | Official Trailer",
                "description": "Indiana Jones and the Dial of Destiny in theaters June 30.\n\nHarrison Ford returns as the legendary hero archaeologist in the highly anticipated fifth installment of the iconic “Indiana Jones” franchise, which is directed by James Mangold (“Ford v Ferrari,” “Logan”). Starring along with Ford are Phoebe Waller-Bridge (“Fleabag”), Antonio Banderas (“Pain and Glory”), John Rhys-Davies (“Raiders of the Lost Ark”), Shaunette Renee Wilson (“Black Panther”), Thomas Kretschmann (“Das Boot”), Toby Jones (“Jurassic World: Fallen Kingdom”), Boyd Holbrook (“Logan”), Oliver Richters (“Black Widow”), Ethann Isidore (“Mortel”) and Mads Mikkelsen (“Fantastic Beasts: The Secrets of Dumbledore”). Directed by James Mangold, the film is produced by Kathleen Kennedy, Frank Marshall and Simon Emanuel, with Steven Spielberg and George Lucas serving as executive producers. John Williams, who has scored each Indy adventure since the original \"Raiders of the Lost Ark\" in 1981, is once again composing the score.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/eQfMbSe7F2g/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Lucasfilm",
                "categoryId": "1",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Indiana Jones and the Dial of Destiny | Official Trailer",
                    "description": "Indiana Jones and the Dial of Destiny in theaters June 30.\n\nHarrison Ford returns as the legendary hero archaeologist in the highly anticipated fifth installment of the iconic “Indiana Jones” franchise, which is directed by James Mangold (“Ford v Ferrari,” “Logan”). Starring along with Ford are Phoebe Waller-Bridge (“Fleabag”), Antonio Banderas (“Pain and Glory”), John Rhys-Davies (“Raiders of the Lost Ark”), Shaunette Renee Wilson (“Black Panther”), Thomas Kretschmann (“Das Boot”), Toby Jones (“Jurassic World: Fallen Kingdom”), Boyd Holbrook (“Logan”), Oliver Richters (“Black Widow”), Ethann Isidore (“Mortel”) and Mads Mikkelsen (“Fantastic Beasts: The Secrets of Dumbledore”). Directed by James Mangold, the film is produced by Kathleen Kennedy, Frank Marshall and Simon Emanuel, with Steven Spielberg and George Lucas serving as executive producers. John Williams, who has scored each Indy adventure since the original \"Raiders of the Lost Ark\" in 1981, is once again composing the score."
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT2M9S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "6388368",
                "favoriteCount": "0",
                "commentCount": "7571"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "Lx1Ys1tIgY0s4M5YUl77ZHTAyi4",
            "id": "MM1wJ2bMPhQ",
            "snippet": {
                "publishedAt": "2023-04-07T04:00:11Z",
                "channelId": "UClW4jraMKz6Qj69lJf-tODA",
                "title": "YoungBoy Never Broke Again feat. Nicki Minaj - WTF ( Official Music Video)",
                "description": "Official Music Video for WTF",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/MM1wJ2bMPhQ/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "YoungBoy Never Broke Again",
                "tags": [
                    "YoungBoy Never Broke Again",
                    "NBA YoungBoy",
                    "YoungBoy Quando Rondo",
                    "YoungBoy Leak",
                    "Make No Sense YoungBoy",
                    "Youngboy Lost Motives",
                    "YoungBoy NBA Music Video",
                    "YoungBoy Never Broke Again TOP",
                    "nba youngboy top",
                    "YoungBoy NBA TOP album",
                    "7KTt4_M09Rw",
                    "0C80BSgjb8M",
                    "qChxuVxs8FA",
                    "dYk-yCsuTUo",
                    "6MCSr65d9Xc",
                    "ALimx-H8C6s",
                    "YoungBoy Never Broke Again Sincerely Kentrell",
                    "Sincerely Kentrell",
                    "Youngboy NBA Sincerely Kentrell",
                    "Sincerely Kentrell album",
                    "YBNBA Sincerely Kentrell",
                    "YB Sincerely Kentrell",
                    "Kentrell"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "YoungBoy Never Broke Again feat. Nicki Minaj - WTF ( Official Music Video)",
                    "description": "Official Music Video for WTF"
                }
            },
            "contentDetails": {
                "duration": "PT2M48S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1757925",
                "likeCount": "156129",
                "favoriteCount": "0",
                "commentCount": "12860"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "4Ayd5Q4S4lTLLtNfMQEgIzLp5Po",
            "id": "aW7bzd8uwyQ",
            "snippet": {
                "publishedAt": "2023-04-07T16:00:10Z",
                "channelId": "UCtylTUUVIGY_i5afsQYeBZA",
                "title": "Jack Black - Peaches (Directed by Cole Bennett)  The Super Mario Bros. Movie",
                "description": "Lyrical Lemonade Presents\n\n“Peaches” (from The Super Mario Bros. Movie) by Jack Black https://backlotmusic.ffm.to/peaches\n \nThe Super Mario Bros. Movie only in theaters now.\n\nTickets: http://thesupermariobros.movie\nFacebook: https://uni.pictures/SMBFB\nTwitter: https://uni.pictures/SMBTW\nInstagram: https://uni.pictures/SMBIG\nTikTok: https://uni.pictures/SMBTT\nSite: https://uni.pictures/SMBSite\nhttps://www.instagram.com/illuminationent\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n\n\nThank you to The Super Mario Bros Film for sponsoring this video!\n\n* * * *\n\nDirector and Editor: Cole Bennett\n\nDirector of Photography: Franklin Ricart\n\nProduction Designer: Cody Fusina\n\nVFX: Scissor Films\n3D Titles: Reduciano\nColor Grade: Bryan Smaller with Company 3\n\nExecutive Producer: Jake Millan\nCo Producer: J-T Ladt\nHead of Production: Krista Worby\n\nCostume Stylist: Dayna Pink\nCostume Design: Terry Mark Anderson\nHair and Makeup: Roz Music\n\n1st AD: Robert Blair II\nProduction Manager: Kateland Cornine\n1st AC: Michael Tursi\n2nd AC: Joshua Montiel\nJib Operator: Babak Mansouri\nJib Assistant: Daniel Hernandez\nGaffer: Dimitri Christoforidis\nBest Boy Electric: Hayden Klemes\n\nElectric: Sven Van Ostrand\nKey Grip: Carl Stuart\nBest Boy Grip: David Kinchen\nGrip: Christian Del Rio\n\nArt Director: Mitchell Dillon\nSet Decorator: Emmett Tekstra\nSet Build: Strong Arm Scenery\n\nPlayback/VTR: Ryan Steward\n\nProduction Assistant: Thomas Lynch\nProduction Assistant: Jordan Szarko\nSet Medic: Mario Moran\n\n\n\n\n--\n\n\nOfficial Channel of Lyrical Lemonade \n\nSubscribe for updates on music videos, interviews, performance videos, etc.\n\nLyrical Lemonade's Spotify Playlist:\nhttps://open.spotify.com/user/gh3vdz775oy18ah1wp9ucxsj5/playlist/5UuPeWDR2I8a8pORvW9vmr\n\nLyrical Lemonade Socials:\n\nhttp://www.twitter.com/lyricalemonade\nhttp://www.instagram.com/lyricalemonade\nhttp://www.facebook.com/lyricalemonade\nhttp://www.lyricallemonade.com\n\n\nCole Bennett Socials:\n\nhttp://www.twitter.com/_colebennett_\nhttp://www.instagram.com/colebennett\n\nLENNY ~ a hidden character representing happiness & good energy\nhttp://instagram.com/lenny",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/aW7bzd8uwyQ/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Lyrical Lemonade",
                "tags": [
                    "Jack Black",
                    "Peaches",
                    "Peaches Song",
                    "Bowser",
                    "SUper Mario",
                    "Luigi",
                    "Donkey Kong",
                    "Seth Rogan",
                    "Lyrical Lemonade",
                    "COle Bennett",
                    "School of Rock",
                    "Nacho Libre",
                    "Tropic Thunder",
                    "music video",
                    "new"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Jack Black - Peaches (Directed by Cole Bennett)  The Super Mario Bros. Movie",
                    "description": "Lyrical Lemonade Presents\n\n“Peaches” (from The Super Mario Bros. Movie) by Jack Black https://backlotmusic.ffm.to/peaches\n \nThe Super Mario Bros. Movie only in theaters now.\n\nTickets: http://thesupermariobros.movie\nFacebook: https://uni.pictures/SMBFB\nTwitter: https://uni.pictures/SMBTW\nInstagram: https://uni.pictures/SMBIG\nTikTok: https://uni.pictures/SMBTT\nSite: https://uni.pictures/SMBSite\nhttps://www.instagram.com/illuminationent\nhttps://www.facebook.com/illuminationent\nhttps://twitter.com/illumination\n\n\nThank you to The Super Mario Bros Film for sponsoring this video!\n\n* * * *\n\nDirector and Editor: Cole Bennett\n\nDirector of Photography: Franklin Ricart\n\nProduction Designer: Cody Fusina\n\nVFX: Scissor Films\n3D Titles: Reduciano\nColor Grade: Bryan Smaller with Company 3\n\nExecutive Producer: Jake Millan\nCo Producer: J-T Ladt\nHead of Production: Krista Worby\n\nCostume Stylist: Dayna Pink\nCostume Design: Terry Mark Anderson\nHair and Makeup: Roz Music\n\n1st AD: Robert Blair II\nProduction Manager: Kateland Cornine\n1st AC: Michael Tursi\n2nd AC: Joshua Montiel\nJib Operator: Babak Mansouri\nJib Assistant: Daniel Hernandez\nGaffer: Dimitri Christoforidis\nBest Boy Electric: Hayden Klemes\n\nElectric: Sven Van Ostrand\nKey Grip: Carl Stuart\nBest Boy Grip: David Kinchen\nGrip: Christian Del Rio\n\nArt Director: Mitchell Dillon\nSet Decorator: Emmett Tekstra\nSet Build: Strong Arm Scenery\n\nPlayback/VTR: Ryan Steward\n\nProduction Assistant: Thomas Lynch\nProduction Assistant: Jordan Szarko\nSet Medic: Mario Moran\n\n\n\n\n--\n\n\nOfficial Channel of Lyrical Lemonade \n\nSubscribe for updates on music videos, interviews, performance videos, etc.\n\nLyrical Lemonade's Spotify Playlist:\nhttps://open.spotify.com/user/gh3vdz775oy18ah1wp9ucxsj5/playlist/5UuPeWDR2I8a8pORvW9vmr\n\nLyrical Lemonade Socials:\n\nhttp://www.twitter.com/lyricalemonade\nhttp://www.instagram.com/lyricalemonade\nhttp://www.facebook.com/lyricalemonade\nhttp://www.lyricallemonade.com\n\n\nCole Bennett Socials:\n\nhttp://www.twitter.com/_colebennett_\nhttp://www.instagram.com/colebennett\n\nLENNY ~ a hidden character representing happiness & good energy\nhttp://instagram.com/lenny"
                }
            },
            "contentDetails": {
                "duration": "PT2M51S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1317767",
                "likeCount": "95719",
                "favoriteCount": "0",
                "commentCount": "4791"
            }
        }
    ]
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        changeVideoList(state,action){
            return {
                ...state,
                list: action.payload
            }
        }
    }
})

export const getPopularVideo = createAsyncThunk('getPopVideo', async(count, thunkAPI) => {
    const response = await api.getPopularVideos(count)

    if (response.status === 200) {
        thunkAPI.dispatch(changeVideoList(response.data.items))
    }

})

export const {changeVideoList} = videoSlice.actions

export default videoSlice.reducer