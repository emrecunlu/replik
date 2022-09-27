import { configureStore } from '@reduxjs/toolkit'
import config from './config'

export const store = configureStore({
	reducer: {
        config
    },
})
