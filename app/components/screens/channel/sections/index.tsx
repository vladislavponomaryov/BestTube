import { FC } from 'react'
import { useQuery } from 'react-query'
import ChannelService from 'services/channel.service'

import Section from '@/screens/channel/sections/section'

interface Sections {
	id: string | string[] | undefined
}

const Sections: FC<Sections> = ({ id }) => {
	const { isSuccess, data: sections } = useQuery(`sections${id}`, () => ChannelService.getSections(id))

	return <>{isSuccess && sections.map((section: any) => <Section key={section.id} section={section} />)}</>
}

export default Sections
