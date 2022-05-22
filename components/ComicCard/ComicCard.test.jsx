/**
 * @jest-environment jsdom
 */

 import React from "react";

 import { render, cleanup } from "@testing-library/react";
 
 import ComicCard from "./index";
 
 let getByTestId;
 let component;
 
 beforeEach(() => {
   component = render(<ComicCard />);
   getByTestId = component.getByTestId;
 });
 
 afterEach(() => {
   getByTestId = null;
   component = null;
   cleanup();
 });
 
 describe("ComicCard component", () => {
   it("should rendering on screen", () => {
     const actual = getByTestId("ComicCard__Component");
     expect(actual).toBeInTheDocument();
   });
 });
 