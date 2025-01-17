import { configureStore } from "@reduxjs/toolkit";
import CliReducer from "./CliSlice"
import toggleReducre from "./toggleSlice"

const appStore = configureStore({
    reducer:{
        cli : CliReducer,
        toggle : toggleReducre 
    }
})

export default appStore