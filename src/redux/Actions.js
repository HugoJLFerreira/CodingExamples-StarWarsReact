export const SET_PLANETS = "SET_PLANETS";
export const SET_USERS = "SET_USERS";

export const setPlanets = (planets) => {
    return {
        type: SET_PLANETS,
        planets
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

