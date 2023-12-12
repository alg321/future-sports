import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import Carousel from "./Carousel";

test("hovering and resetting", async () => {
  render(<Carousel />);

  const yogaImage = screen.getByAltText("Yoga");


  fireEvent.mouseEnter(yogaImage.closest("li"));

  await waitFor(() => {
    expect(yogaImage.closest("li")).toHaveClass("hover:scale-x-140");
  });
  fireEvent.mouseLeave(yogaImage.closest("li"));

  await waitFor(() => {
    expect(yogaImage.closest("li")).not.toHaveClass("hover:scale-x-140");
  });
});
