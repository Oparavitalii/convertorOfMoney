import { createSlice } from "@reduxjs/toolkit";



import { fetchCourse } from "./courseSlice";

type AppState = {
  loading: boolean;
  error: any,
  courseData: any,
  currencyFromRate : any ,
  currencyToRate: any,
  amount: number,
  convertedAmount: number
};

const initialState: AppState = {
  loading: false,
  error: false,
  courseData: [],
  currencyFromRate: "UAH",
  currencyToRate: "UAH",
  amount: 0,
  convertedAmount: 0
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    selectedCurrencyFromRate(state,action) {
      state.currencyFromRate = action.payload;
    },
    selectedCurrencyToRate(state,action) {
      state.currencyToRate = action.payload;
    },
    changeAmount(state,action) {
      state.amount = action.payload;
    },
    convertAmount(state,action) {
      state.convertedAmount = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.courseData = action.payload;
    });
    builder.addCase(fetchCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {selectedCurrencyToRate,selectedCurrencyFromRate ,changeAmount,convertAmount} = converterSlice.actions;

export default converterSlice.reducer;
