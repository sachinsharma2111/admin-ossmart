import { combineReducers } from "@reduxjs/toolkit";

// login and register slices
import { registerSlice } from "./auth/authSlice";
import { categoryGetSlice, categoryAddSlice, categoryUpdateSlice, CategoryDeleteSlice } from "./category/category";
import { productGetSlice, productAddSlice, productUpdateSlice, productDeleteSlice, imagesGetSlice } from "./products/product";

// exporting slice to combined reducers
export default combineReducers({
    
    register:registerSlice.reducer,
    categoryGet:categoryGetSlice.reducer,
    categoryAdd:categoryAddSlice.reducer,
    categoryUpdate:categoryUpdateSlice.reducer,
    categoryDelete:CategoryDeleteSlice.reducer,

    productGet:productGetSlice.reducer,
    productAdd:productAddSlice.reducer,
    productUpdate:productUpdateSlice.reducer,
    productDelete:productDeleteSlice.reducer,
    imagesGet:imagesGetSlice.reducer
})