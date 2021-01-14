import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import App from "./App";

import * as shows from './shows.json';
import { fetchShow as mockFetchShow } from "./api/fetchShow";
jest.mock('./api/fetchShow');

const showData = {
  data: shows
};
test('renders without errors', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { rerender } = render(<App />);
  screen.debug();
  await act(async () => {
    await rerender(<App />);
    screen.debug();
  });
})

test('Show details render', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { rerender } = render(<App />);
  screen.debug();
  await act(async () => {
    await rerender(<App />);
    const title = screen.getAllByText(/Stranger Things/i);
    expect(title).not.toEqual(null);
    screen.debug();
  });
})