import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import React from "react";

it('renders without crashing', function() {
  const {src, caption} = TEST_IMAGES[0];
  render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={TEST_IMAGES.length}
  />)
});

it('renders an image correctly', function() {
  const { container, debug } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={1}
      totalNum={TEST_IMAGES.length}
    />
  );
  const cardTitle = container.querySelector(".Card-title")

  expect(cardTitle).toContainHTML(TEST_IMAGES[0].caption);
});

it('matches snapshot', function () {
  const {container, debug } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={1}
      totalNum={TEST_IMAGES.length}
    />
  );

  expect(container).toMatchSnapshot()
});