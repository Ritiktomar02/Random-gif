import { configureStore } from "@reduxjs/toolkit";
import {randomslice} from "../redux/slices/randomslice"
import {randominputslice} from "./slices/randominputslice";


export const store=configureStore({
    reducer:{
        random:randomslice.reducer,
        randominput:randominputslice.reducer
    }
})