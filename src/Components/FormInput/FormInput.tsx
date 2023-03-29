import React from "react";
import { Input, Label, FormCount } from "./FormInput.elements";
import { useAppDispatch } from "../../Hooks/store";
import { changeAmount } from "../../store/createSlice";

export default function FormInput({ value, text,onChange }: any) {
  const dispatch = useAppDispatch();

  const handlerOnChange = (e: any) => {
    onChange()
    dispatch(changeAmount(e.target.value));
  };


  return (
    <FormCount>
      <Label htmlFor="get">{text.toUpperCase()}</Label>
      <Input
        type="number"
        name={text}
        id={text}
        value={value}
        onChange={(e) => handlerOnChange(e)}
        min={0}
        step={1}
        placeholder=""
      />
    </FormCount>
  );
}
