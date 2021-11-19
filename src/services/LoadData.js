import React from "react";
import StarWarsDataService from "./StarWarsDataService";

const users = [];
const planets = [];

class LoadData extends React.Component {
  retrieveUsers(page) {
    StarWarsDataService.getUsers(page)
      .then((response) => {
        response.data.results.forEach((user) => {
          this.retrievePlanet(user);
        });
        if (response.data.next !== null) {
          let newpage = page + 1;
          this.retrieveUsers(newpage);
        } else {
          this.props.setPlanets(planets);
          this.props.setUsers(users);
          this.setState({
            DataisLoaded: true,
          });
        }
      })
      .catch((e) => {
        //deal with error
        console.log(e);
      });
  }

  retrievePlanet(user) {
    const userArray = user.homeworld.toString().split("/");
    const planetIndex = userArray[5];

    const planet = planets.filter((planet) => {
      return planet.index === planetIndex;
    });

    if (planet.length !== 0) {
      users.push({
        name: user.name,
        created: user.created,
        edited: user.edited,
        mass: user.mass,
        height: user.height,
        planet: planet[0].planet,
      });
    } else {
      StarWarsDataService.getPlanet(planetIndex)
        .then((response) => {
          planets.push({
            index: planetIndex,
            planet: response.data.name,
            diameter: response.data.diameter,
            climate: response.data.climate,
            population: response.data.population,
          });
          users.push({ ...user, planet: response.data.name });
        })
        .catch((e) => {
          console.log(e);
        });
    }
    this.props.setPlanets(planets);
    this.props.setUsers(users);
  }

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    this.retrieveUsers(1);
  }
  render() {
    const { DataisLoaded } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Connecting to a galaxy far far away.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> All people and planets ready </h1>
      </div>
    );
  }
}

export default LoadData;
