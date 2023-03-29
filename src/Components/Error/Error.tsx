import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {ErrorWrapper , ErrorText} from "./Error.elements";

export default function Error() {
  return (
    
        <ErrorWrapper>
          <ErrorOutlineIcon  fontSize="large" />
          <ErrorText>Oops...Something went wrong</ErrorText>
        </ErrorWrapper>

  );
}
