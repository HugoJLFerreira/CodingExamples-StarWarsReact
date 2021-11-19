// @flow
import { connect } from "react-redux";
import { setPlanets, setUsers } from "../redux/Actions";
import LoadData from "./LoadData";

const mapStateToProps = (state) => {
  return {
    users: state?.users,
    planets: state?.planets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPlanets: (planets) => {
      dispatch(setPlanets(planets));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadData);
