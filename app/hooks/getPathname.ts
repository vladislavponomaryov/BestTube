import { useRouter } from 'next/router'

const GetPathname = () => {
	let { pathname } = useRouter()
	pathname = pathname.slice(1)
	pathname = pathname.slice(0, pathname.indexOf('/'))

	return pathname
}

export default GetPathname
