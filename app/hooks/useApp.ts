import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useApp = () => useTypedSelector(state => state.app)
