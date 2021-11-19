import { render, screen, fireEvent } from "@testing-library/react";
import PlanetDialog from "./PlanetDialog";

// open, handleClose, selectedPlanet
const handleClose = jest.fn();
const selectedPlanet = {
  planet: "test Planet",
  climate: "temperate",
  diameter: "999000000",
  population: "1",
};

test("renders sample Planet Dialog and checks its contents", () => {
  render(
    <PlanetDialog
      open
      handleClose={handleClose}
      selectedPlanet={selectedPlanet}
    />
  );
  const planetElement = screen.getByText(/test Planet/i);
  expect(planetElement).toBeInTheDocument();
  const climateElement = screen.getByText(/temperate/i);
  expect(climateElement).toBeInTheDocument();
  const diameterElement = screen.getByText(/999000000/i);
  expect(diameterElement).toBeInTheDocument();
  const populationElement = screen.getByText(/1/i);
  expect(populationElement).toBeInTheDocument();
  const closeElement = screen.getByText(/close/i);
  expect(closeElement).toBeInTheDocument();
  fireEvent.click(closeElement);
  expect(handleClose.mock.calls.length).toBe(1);
});
