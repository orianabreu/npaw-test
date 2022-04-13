import React from "react";

import { MainTitle, TextContainer, Paragraph } from "./HeaderStyles";

export default function Header() {
  return (
    <TextContainer>
      <MainTitle>Search for your favourites artists' albums</MainTitle>
      <Paragraph>
        We will show you results based on the name of the artist or, if the
        super fan spirit lives within you, you can search for album name
      </Paragraph>
    </TextContainer>
  );
}
