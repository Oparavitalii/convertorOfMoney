import React from 'react'
import {
    LogoWrapper,
    LogoText,
  } from "./Logo.elements";

  import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


export default function Logo() {
  return (
    <LogoWrapper>
    <AttachMoneyIcon />
    <LogoText>e-change</LogoText>
  </LogoWrapper>
  )
}
