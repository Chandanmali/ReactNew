import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"

const appStore = configureStore({   //store = 1 Layer, Inside store reducer another Layer
    reducer:{
        cart: cartSlice
    }
})

export default appStore

//now we have to create a slice