import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
export const fetchdata=createAsyncThunk('fetchdata',async()=>{
    const res=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    return res.json();
})
const initialState={
    isLoading:false,
    data:null,
    iserror:null
};

export const randomslice=createSlice({
    name:'random',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchdata.fulfilled,(state,action)=>{
         state.isLoading=false;
         state.data=action.payload;
        });

        builder.addCase(fetchdata.pending,(state,action)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchdata.rejected,(state,action)=>{
            state.iserror=action.payload;
            console.log("Error: ",action.payload);
        })
    }
})

export const {}=randomslice.actions;

export default randomslice.reducer
