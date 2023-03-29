import React from "react";
import { HeaderTextWr, HeaderText ,HeaderTextSpan} from "./CurrentDate.elements";
export default function CurrentDate() {
  return (
    <HeaderTextWr>
      <HeaderText>Actual course for <HeaderTextSpan>{new Date().toLocaleDateString()}</HeaderTextSpan></HeaderText>
    </HeaderTextWr>
  );
}
