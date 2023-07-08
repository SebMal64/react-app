import {createSlice} from '@reduxjs/toolkit'
const initialState = 0;

export const contadorSlice=createSlice( {

    name: 'contador',
    initialState:{value:initialState},
    reducers:{

        incrementar: (state, action) => {
            state.value=state.value+1
        },
        decrementar: (state,action) => {
            state.value=state.value===0?0:state.value-1
        }
    }
})

export const {incrementar, decrementar} = contadorSlice.actions;
export default contadorSlice.reducer;