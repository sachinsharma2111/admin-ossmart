import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS, API_URL } from "../../../config/Constants";

import axios from "axios";
import Checkerror from "../../../components/Errors/Errors";
import { toast } from "react-toastify";

const namespace = "category";

// get 
export const categoryGet = createAsyncThunk(
    `${namespace}`,
    async (formData) => {
      try {
        const { data } = await axios.get(
          `${API_URL}/${namespace}`);
        return data;
      } catch (error) {
        return Checkerror(error);
      }
    }
  );
  export const categoryGetSlice = createSlice({
    name: namespace,
    initialState: {
      loading: "",
      data: [],
    },
    reducers: {},
    extraReducers: {
      [categoryGet.pending](state, action) {
        state.loading = HTTP_STATUS.PENDING;
      },
      [categoryGet.fulfilled](state, action) {
        state.loading = HTTP_STATUS.PENDING;
        state.data = action.payload;
      },
      [categoryGet.rejected](state, action) {
        state.loading = HTTP_STATUS.REJECTED;
      },
    },
  });


// add
export const categoryAdd = createAsyncThunk(
  `${namespace}/add`,
  async (formData) => {
    try {

      const formDataObj = {};
      formData.forEach((value, key) => (formDataObj[key] = value));


      const { data } = await axios.post(
        `${API_URL}/${namespace}/add`,
        formDataObj
      );
      toast.success("Category has been added");
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);
export const categoryAddSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [categoryAdd.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [categoryAdd.fulfilled](state, action) {
      state.loading = HTTP_STATUS.PENDING;
      state.data = action.payload;
    },
    [categoryAdd.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

// update
export const categoryUpdate = createAsyncThunk(
  `${namespace}/update`,
  async (formData) => {
    try {
      const formDataObj = {};
      formData.forEach((value, key) => (formDataObj[key] = value));

      const { data } = await axios.post(
        `${API_URL}/${namespace}/update`,
        formData
      );
      toast.success("category has been updated");
      return data;
    } catch (error) {
      return Checkerror(error);
    }
  }
);

export const categoryUpdateSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [categoryUpdate.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [categoryUpdate.fulfilled](state, action) {
      state.loading = HTTP_STATUS.PENDING;
      state.data = action.payload;
    },
    [categoryUpdate.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});


export const categoryDelete = createAsyncThunk(
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

export const CategoryDeleteSlice = createSlice({
  name: namespace,
  initialState: {
    loading: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [categoryDelete.pending](state, action) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [categoryDelete.fulfilled](state, action) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = action.payload;
    },
    [categoryDelete.rejected](state, action) {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});
