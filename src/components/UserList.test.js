import { render, screen, fireEvent } from "@testing-library/react";
import UserList from "./UserList";

// open, handleClose, selectedPlanet
const handleClose = jest.fn();
const users = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    edited: "111",
    created: "111",
    planet: "test Planet",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    edited: "222",
    created: "111",
    planet: "test Planet",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    edited: "333",
    created: "555",
    planet: "test Planet",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    edited: "55",
    created: "555",
    planet: "test Planet",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    edited: "55",
    created: "55",
    planet: "test Planet",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    edited: "55",
    created: "55",
    planet: "another test planet",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    edited: "55",
    created: "55",
    planet: "another test planet",
  },
];

const planets = [
  {
    planet: "test Planet",
    climate: "temperate",
    diameter: "999000000",
    population: "1",
  },
  {
    planet: "another test planet",
    climate: "arid",
    diameter: "29000000",
    population: "1",
  },
];

test("renders learn react link", () => {
  render(<UserList users={users} planets={planets} />);
  const nameSorting = screen.getByText(/Name/i);
  fireEvent.click(nameSorting);
  const table = screen.getByTestId("table-data");
  expect(table).toMatchSnapshot();
  //Reorder by name
  fireEvent.click(nameSorting);
  const reverseOrderTable = screen.getByTestId("table-data");
  expect(reverseOrderTable).toMatchSnapshot();
  // expect(table).not.toEqual(reverseOrderTable);

  //Initial order
  fireEvent.click(nameSorting);
  const initialOrderTable = screen.getByTestId("table-data");
  expect(table).toEqual(initialOrderTable);

  //check r2-D2 is displayed and not filtered
  const r2 = screen.getByText(/R2-D2/i);
  expect(r2).toBeInTheDocument();

  //Search
  const search = screen.getByTestId("search").querySelector("input");
  fireEvent.click(search);
  fireEvent.change(search, { target: { value: "Luke" } });

  const luke = screen.getByText(/Luke Skywalker/i);
  expect(luke).toBeInTheDocument();

  //expect R2-D2 to be filtered out
  expect(r2).not.toBeInTheDocument();

  // Check Planet Dialog
  const planet = screen.getByText(/test Planet/i);
  fireEvent.click(planet);

  const diameter = screen.getByText(/999000000/i);
  expect(diameter).toBeInTheDocument();
});
