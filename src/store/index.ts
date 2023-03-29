import { configureStore}  from "@reduxjs/toolkit";
import converter from "./createSlice";

const store = configureStore({
    reducer: {
        store: converter
    }

})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;