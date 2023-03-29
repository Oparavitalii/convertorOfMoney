import React from "react";
import { HeaderWr } from "./Header.elements";
import Logo from "../Logo/Logo";
import CurrentDate from "../CurrentDate/CurrentDate";

export default function Header() {
  return (
    <HeaderWr>
      <Logo />
      <CurrentDate />
    </HeaderWr>
  );
}
