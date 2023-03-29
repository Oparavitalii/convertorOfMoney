import React from "react";
import { CopyrightWrapper, CopyrightText } from "./Copyright.elements";

import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Copyright() {
  return (
    <CopyrightWrapper>
      <CopyrightIcon />
      <CopyrightText>Copyright {new Date().getFullYear()}</CopyrightText>
    </CopyrightWrapper>
  );
}
