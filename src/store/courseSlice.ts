import {  createAsyncThunk } from "@reduxjs/toolkit";

import { filterCourse } from "../Helpers/filterCourse";

 const fetchCourse = createAsyncThunk(
  "course/get",
  async (_, { rejectWithValue }) => {
    const url ="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

    try {
      let response = await fetch(url);
          response = await response.json();

      return filterCourse(response);
    } catch (error:any) {
      return rejectWithValue(error.message as string);
    }
  }
);
export {fetchCourse};