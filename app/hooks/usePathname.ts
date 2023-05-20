import { useRouter } from 'next/router'

const usePathname = () => {
	let { pathname } = useRouter()
	pathname = pathname.slice(1)
	pathname = pathname.slice(0, pathname.indexOf('/'))

	return pathname
}

export default usePathname
