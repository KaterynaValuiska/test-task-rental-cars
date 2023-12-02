import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    orders: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    addOrders(state, action) {
      state.orders.push(action.payload);
      const carsStringify = JSON.stringify(state.orders);
      localStorage.setItem('select-car', carsStringify);
    },
    filterCar(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected),
});

export const { addOrders, filterCar } = carsSlice.actions;
