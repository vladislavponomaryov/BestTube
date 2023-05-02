import { FC } from 'react'
import { useQuery } from 'react-query'

import Section from '@/screens/channel/sections/section'

import { ISection } from '@/shared/types/channel.interface'

import ChannelService from '@/services/channel.service'

interface Sections {
	id: string | string[] | undefined
}

const Sections: FC<Sections> = ({ id }) => {
	const { isSuccess, data } = useQuery(`sections${id}`, () => ChannelService.getSections(id))
	const sections: ISection[] = data

	// TODO: change styles

	return <>{isSuccess && sections.map(section => <Section key={section.id} section={section} />)}</>
}

export default Sections
