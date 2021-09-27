import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResultsRow from "./EmojiResultRow";

describe("Emoji App Test", () => {
  test("Render Header Component", () => {
    render(<Header />);
  });

  test("Emoji List Render", () => {
    const emojiContainer = render(<App />);
    const emojiList = emojiContainer.getAllByText("Click to copy emoji");
    expect(emojiList.length).toEqual(20);
  });

  test("Filter and re-render", () => {
    const emojiContainer = render(<App />);
    const inputValue = "abc";
    const inputElement = emojiContainer.getByTestId("emoji-input");
    fireEvent.change(inputElement, { target: { value: inputValue } });
    const emojiList = emojiContainer.queryAllByText("Click to copy emoji");
    expect(emojiList.length).toEqual(3);
  });

  test("When click on an item check whether it has been copied. ", () => {});
});
