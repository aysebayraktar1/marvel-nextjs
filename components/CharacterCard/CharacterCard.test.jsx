/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, cleanup } from "@testing-library/react";

import CharacterCard from "./index";

let getByTestId;
let component;

beforeEach(() => {
  component = render(<CharacterCard />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  getByTestId = null;
  component = null;
  cleanup();
});

describe("CharacterCard component", () => {
  it("should rendering on screen", () => {
    const actual = getByTestId("CharacterCard__Component");
    expect(actual).toBeInTheDocument();
  });
});

it("should have a image", () => {
  const cardItem = getByTestId("CharacterCard__Component");
  const cardImage = cardItem.querySelector("img");
  expect(cardImage).toBeInTheDocument();
});

it("renders character card unchanged", () => {
  const { container } = render(<CharacterCard />);
  expect(container).toMatchSnapshot();
});
