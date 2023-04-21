import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import ChannelService from 'services/channel.service'

import MainLayout from 'components/layout/MainLayout'

import Feature from 'components/screens/channel/feature'
import ChannelProfile from 'components/screens/channel/profile'
import Sections from 'components/screens/channel/sections'

import './style.component.sass'

export const Channel = () => {
	const { search } = useLocation()
	const navigate = useNavigate()
	/*TODO: create provider ID*/
	const id = search.slice(search.indexOf('=') + 1) ? search.slice(search.indexOf('=') + 1) : navigate('/')

	const { data: channel } = useQuery(`channel${id}`, () => ChannelService.getById(id))
	let featureId = channel?.brandingSettings?.channel?.unsubscribedTrailer

	return (
		<MainLayout>
			{channel && (
				<div className='content channel'>
					<img
						src={channel?.brandingSettings?.image?.bannerExternalUrl + '=w2000-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'}
						alt='Channel background'
					/>
					<header className='profile-header'>
						<div className='wrapper'>
							<ChannelProfile channel={channel} />
							<ul className='toolbar'>
								<li className='active'>Home</li>
								<li>Videos</li>
								<li>Playlists</li>
								<li>Community</li>
								<li>Channels</li>
								<li>About</li>
							</ul>
						</div>
					</header>
					<div className='list'>
						{featureId && <Feature id={featureId} />}
						<Sections id={id} />
					</div>
				</div>
			)}
		</MainLayout>
	)
}
