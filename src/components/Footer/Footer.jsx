import React from "react";
import { FooterComp, Text } from "./FooterStyles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterComp>
      <Text>{year} | By: Oriana Abreu</Text>
    </FooterComp>
  );
}
