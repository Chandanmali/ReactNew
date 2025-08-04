import {createSlice} from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false
    },
    reducers: {
        //action 
        //we have to change the value of open 
        setOpen: (state, action) => {
            state.open = action.payload
        }
    }
})

export const {setOpen} = appSlice.actions;
export default appSlice.reducer