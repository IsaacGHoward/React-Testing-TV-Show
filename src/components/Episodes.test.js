import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Episodes from "./Episodes";
import {formatSeasons} from '../utils/formatSeasons';

import * as shows from '../shows.json';

const seasons = formatSeasons(shows._embedded.episodes)


//console.log(seasons["Season 4"]);

test("renders without errors", () => {
  render(<Episodes episodes={[]} />);
})

test("shows list of episodes when rerendered with new episodes data", () => {
  const { rerender } = render(<Episodes episodes={[]} />);

  let episodes = screen.queryAllByTestId("episode");
  expect(episodes).toHaveLength(0);
  expect(episodes).toStrictEqual([]);

  //Season 4 Check
  rerender(<Episodes episodes={seasons["Season 4"]} />);
  episodes = screen.getAllByTestId("episode");

  expect(episodes).toHaveLength(3);
  expect(episodes[0]).toHaveTextContent("Hellfire");
  expect(episodes[1]).toHaveTextContent("Tick Tok");

  //Season 1 Check
  rerender(<Episodes episodes={seasons["Season 1"]} />);
  episodes = screen.getAllByTestId("episode");

  expect(episodes).toHaveLength(8);
  expect(episodes[0]).toHaveTextContent("Will Byers");
  expect(episodes[7]).toHaveTextContent("Upside Down");
})