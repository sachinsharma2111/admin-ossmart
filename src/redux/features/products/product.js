import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";

import axios from "axios";
import Checkerror from "../../../components/Errors/Errors";
import { toast } from "react-toastify";

const namespace = "product";

// get 
export const productGet = createAsyncThunk(
    `${namespace}all?perPage=1&page=1`,
    async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/${namespace}/all?perPage=1&page=1`);
        return data;
      } catch (error) {
        return Checkerror(error);
      }
    }
  );
  export const productGetSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [productGet.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [productGet.fulfilled](state, action) {
        state.loading = HTTP_STATUS.PENDING;
        state.data = action.payload;
      },
      [productGet.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });
// add
export const productAdd = createAsyncThunk(
  `${namespace}/add`,
  async (formData) => {
    try {
      console.log(formData)

      const formDataObj={
        "brand": formData.brand,
        "modelName": formData.modelName,
        "color": "black",
        "formFactor": formData.formFactor,
        "specialFeature": formData.specialFeature,
        "connectivityTechnology": formData.connectivityTechnology,
        "itemDimensions": formData.itemDimensions,
        "itemWeight": formData.itemWeight,
        "finalPrice": parseInt(formData.finalPrice),
        "mrpPrice": parseInt(formData.mrpPrice),
        "discountPercentage": parseInt(formData.discountPercentage),
        "netQuantity": parseInt(formData.netQuantity),
        "soldStock": parseInt(formData.soldStock),
        "createdBy": "63dcd27478bc406eca866d3a",
        "categoryId": formData.categoryId,
        "productName": formData.productName,
        "productDescription": formData.productDescription,
        "colors": [
          "green",
          "black"
        ],
        "rating": parseInt(formData.rating),
        "thumbnails":formData.thumbnails
      }
      const { data } = await axios.post(
        `${API_URL}/${namespace}/add`,
        formDataObj
      );
      toast.success("product has been added");
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);
export const productAddSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [productAdd.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [productAdd.fulfilled](state, action) {
      state.loading = HTTP_STATUS.PENDING;
      state.data = action.payload;
    },
    [productAdd.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

// update
export const productUpdate = createAsyncThunk(
  `${namespace}/update`,
  async (formData) => {
    try {
      const formDataObj = {};
      formData.forEach((value, key) => (formDataObj[key] = value));

      const { data } = await axios.post(
        `${API_URL}/${namespace}/update`,
        formData
      );
      toast.success("product has been updated");
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const productUpdateSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [productUpdate.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [productUpdate.fulfilled](state, action) {
      state.loading = HTTP_STATUS.PENDING;
      state.data = action.payload;
    },
    [productUpdate.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

// Delete
export const productDelete = createAsyncThunk(
  `${namespace}`,
  async (id) => {
    try {
      const { data } = await axios.delete(
        `${API_URL}/${namespace}/${id}`);
      toast.success("Item deleted successfully");
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);
export const productDeleteSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [productDelete.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [productDelete.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [productDelete.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});



// get product images
export const imagesGet = createAsyncThunk(
  `${namespace}/images/all`,
  async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/${namespace}/images/all`);
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);
export const imagesGetSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [imagesGet.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [imagesGet.fulfilled](state, action) {
      state.loading = HTTP_STATUS.PENDING;
      state.data = action.payload;
    },
    [imagesGet.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});
