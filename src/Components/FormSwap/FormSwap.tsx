import React from "react";
import { FormChange } from "./FormSwap.elements";

import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import { useAppSelector, useAppDispatch } from "../../Hooks/store";
import {
  selectedCurrencyFromRate,
  selectedCurrencyToRate,
} from "../../store/createSlice";

export default function FormSwap() {
  const dispatch = useAppDispatch();

  const { currencyToRate, currencyFromRate } = useAppSelector(
    (state) => state.store
  );

  function swapCurrency() {
    dispatch(selectedCurrencyToRate(currencyFromRate));
    dispatch(selectedCurrencyFromRate(currencyToRate));
  }
  
  return (
    <FormChange>
      <SwapHorizontalCircleIcon onClick={swapCurrency} />
    </FormChange>
  );
}
