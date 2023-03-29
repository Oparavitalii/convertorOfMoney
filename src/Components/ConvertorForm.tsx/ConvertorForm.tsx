import React, { useEffect, useState } from "react";
import { ConvertorWr, Form, FormEl } from "./Convertor.elements";
import { calculateSum } from "../../Helpers/calculateSum";
import { useAppSelector, useAppDispatch } from "../../Hooks/store";
import {
  selectedCurrencyFromRate,
  selectedCurrencyToRate,
  convertAmount,
} from "../../store/createSlice";
import FormInput from "../FormInput/FormInput";
import FormSwap from "../FormSwap/FormSwap";
import FormOptions from "../FormOptions/FormOptions";

export default function ConvertorForm() {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState<boolean>();
  const {
    amount,
    currencyToRate,
    currencyFromRate,
    courseData,
    convertedAmount,
  } = useAppSelector((state) => state.store);

  useEffect(() => {
    dispatch(
      convertAmount(
        calculateSum({
          focus,
          amount,
          courseData,
          currencyFromRate,
          currencyToRate,
        })
      )
    );
  }, [focus, amount, currencyFromRate, currencyToRate, courseData, dispatch]);

  function selectCurrencyFrom(e: any) {
    dispatch(selectedCurrencyFromRate(e.target.value));
  }

  function selectCurrencyTo(e: any) {
    dispatch(selectedCurrencyToRate(e.target.value));
  }

  return (
    <ConvertorWr>
      <Form>
        <FormEl>
          <FormInput
            value={focus ? amount : convertedAmount}
            text="change"
            onChange={() => setFocus(true)}
          />
          <FormOptions
            optionValue={currencyFromRate}
            action={selectCurrencyFrom}
          />
        </FormEl>
        <FormSwap />
        <FormEl>
          <FormInput
            value={focus ? convertedAmount : amount}
            text="get"
            onChange={() => setFocus(false)}
          />
          <FormOptions optionValue={currencyToRate} action={selectCurrencyTo} />
        </FormEl>
      </Form>
    </ConvertorWr>
  );
}
