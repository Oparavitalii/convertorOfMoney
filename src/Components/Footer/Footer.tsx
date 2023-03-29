import React from "react";
import Contact from "../Contact/Contact";
import Copyright from "../Copyright/Copyright";
import {
  FooterWr
} from "./Footer.elements";


export default function Footer() {
  return (
    <FooterWr>
      <Copyright />
      <Contact />
    </FooterWr>
  );
}
