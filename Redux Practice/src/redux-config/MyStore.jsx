import {configureStore} from "@reduxjs/toolkit"
import DataSlice from './DataSlice'
import MessageSlice from './MessageSlice';

const store = configureStore({
    reducer:{
        DataCounter: DataSlice,
        WishMessages: MessageSlice
    }
});
// DataCounter: {counter: 100,evenCounter: 0}
export default store;