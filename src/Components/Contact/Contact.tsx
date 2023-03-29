import React from "react";
import {
  ContactWrapper,
  ContactLinkText,
  ContactLink,
} from "./Contact.elements";

import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <ContactWrapper>
      <ContactLink href="mailto:upchh@example.com">
        <ContactLinkText>Write tu us:</ContactLinkText>
        <EmailIcon />
      </ContactLink>
    </ContactWrapper>
  );
}
