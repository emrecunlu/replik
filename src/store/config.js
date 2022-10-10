import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchConfig = createAsyncThunk('config/fetchConfig', async () => {
	const { data } = await axios.get(process.env.REACT_APP_ENDPOINT + '/config/')

	return data
})

const initialState = {
	config: null,
	loading: true,
}

const config = createSlice({
	name: 'config',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchConfig.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchConfig.fulfilled, (state, action) => {
			const res = action.payload.reduce(
				(obj, cur) => ({
					...obj,
					[cur.key]: cur.image ? cur.image : cur.value,
				}),
				{}
			)
			state.config = res
			state.loading = false
		})
		builder.addCase(fetchConfig.rejected, (state) => {
			state.loading = true
		})
	},
})

export default config.reducer
