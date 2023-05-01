import { createSlice } from '@reduxjs/toolkit'
import { localUserServ } from '../service/localService';

const initialState = {
    userInfo: localUserServ.get(),
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserLogin: (state, action) => { 
            state.userInfo = action.payload 
         }
    }
});

export const { setUserLogin } = userSlice.actions

export default userSlice.reducer