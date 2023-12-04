
import { configureStore } from '@reduxjs/toolkit'
import customReducer from './customSlice'
import { persistStore, persistReducer } from 'redux-persist'
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync'
import storage from 'redux-persist/lib/storage'

// Redux persist config
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, customReducer)

export const store = configureStore({
    reducer: {
        reducer: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(
        createStateSyncMiddleware({})
    )
})

initStateWithPrevTab(store);
export const persistor = persistStore(store)

