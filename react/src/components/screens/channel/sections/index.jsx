import {useQuery} from 'react-query'
import ChannelService from 'react/src/services/channel.service'

import Section from 'react/src/components/screens/channel/sections/section'

export default function Sections({ id }) {
	const { isSuccess, data: sections } = useQuery(`sections${id}`, () => ChannelService.getSections(id))

	return <>{isSuccess && sections.map(section => <Section key={section.id} section={section} />)}</>
}
