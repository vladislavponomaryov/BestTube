import { useRouter } from 'next/router'
import { FC } from 'react'
import { useQuery } from 'react-query'

import Item from '@/screens/search/item'
import styles from '@/screens/search/style.module.scss'

import { ISearch } from '@/shared/types/services/search.interface'

import SearchService from '@/services/search.service'

const Search: FC = () => {
	const { query } = useRouter()

	const { data } = useQuery(`search query ${query.search_query}`, () => SearchService.getByKeyword(query.search_query))

	const searchItems = data?.map((item: ISearch, index: number) => <Item item={item} key={index} />)

	return (
		<>
			{searchItems && (
				<div className={styles.searchResult}>
					<div>{searchItems}</div>
				</div>
			)}
		</>
	)
}

export default Search
