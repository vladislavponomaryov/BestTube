import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api";

const initialState = {
    list: []
}

const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        addInList(state,action){
            return {
                ...state,
                list: [...state.list,action.payload]
            }
        }
    }
})

export const getChannel = createAsyncThunk('getChannel', async(channelId, thunkAPI) => {

    let state = thunkAPI.getState()
    let list = state.channel.list

    if (list.find(item => item.id === channelId)) return

    //thunkAPI.dispatch(addInList({id:channelId}))

    const response = await api.getChannelData(channelId)

    //console.log(`test = `,{id:channelId},response.data.items[0])

    if (response.status === 200) {
        thunkAPI.dispatch(addInList(response.data.items[0]))
    }

})

export const {addInList} = channelSlice.actions

export default channelSlice.reducer