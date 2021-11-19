import http from "./StarWarsApi";

/* eslint-disable */
class StarWarsDataService {
  getUsers(page) {
    return http.get(`/people/?page=${page}`);
  }

  getUser(id) {
    return http.get(`/people/${id}`);
  }

  getPlanets() {
    return http.get("/planets");
  }

  getPlanet(id) {
    return http.get(`/planets/${id}`);
  }

  findByName(username) {
    return http.get(`/people/?search=${username}`);
  }
}

export default new StarWarsDataService();
