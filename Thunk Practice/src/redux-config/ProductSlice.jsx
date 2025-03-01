import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchProduct = createAsyncThunk("ProductSlice/fetchProduct",async()=>{
    try {
        let response = await axios.get("https://dummyjson.com/products");
        return response.data.products;
        
    } catch (error) {
        console.log(error);
        
    }
})

const slice = createSlice({
    name:"ProductSlice",
    initialState:{
        productList:[],
        isLoading:false,
        error:null
    },
    reducers:{//this is action which define in reducer function
        removeProduct:(state,action)=>{
            if(window.confirm("Do you want to delete it?")){
                let id = action.payload;
                let index = state.productList.findIndex((product)=>{return product.id == id});
                state.productList.splice(index,1);
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchProduct.fulfilled,(state,action)=>{
            state.productList = action.payload;
            state.isLoading = false;
        }).addCase(fetchProduct.rejected,(state,action)=>{
            state.error ="Oops! Something went wrong..";
            state.isLoading = false;
        })
    }
    
})
export const{removeProduct} = slice.actions;
export default slice.reducer;