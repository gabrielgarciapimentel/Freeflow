import { create } from 'zustand'
import { TollBoothStore, TollBoothStoreActions } from './types'
import { errorManager } from '@/functions/errorManager'

const INITIAL_STORE: TollBoothStore = {
    hasData: false,
    loading: true,
    data: undefined,
    error: undefined
}

export const useTollBoothStore = create<StoreStandard<TollBoothStore, TollBoothStoreActions>>((set) => ({
    store: INITIAL_STORE,
    actions: {
        setData: (data) => set(({actions, store}) => ({...actions, store: {...store, data, hasData: true}})),
        setLoading: () => set(({actions, store}) => ({...actions, store: {...store, loading: !store.loading}})),
        setError: (errorCode) => set(({actions, store}) => ({...actions, store: {...store, error: errorManager<typeof errorCode>(errorCode)}}))
    }
}))