import React from "react";
import { Select, Option } from "./FormOptions.elements";

import { useAppSelector } from "../../Hooks/store";


export default function FormOptions({ optionValue, action }: any) {
 
  const { courseData } = useAppSelector((state) => state.store);

  return (
    <Select value={optionValue} onChange={action} name="selectChange">
      <Option value={"UAH"}>UAH</Option>
      {courseData &&
        courseData.map((cc: any) => {
          return (
            <Option value={cc.cc} key={cc.cc}>
              {cc.cc}
            </Option>
          );
        })}
    </Select>
  );
}
