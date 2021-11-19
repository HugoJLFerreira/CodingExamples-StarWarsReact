import { connect } from "react-redux";
import UserList from "./UserList";

const mapStateToProps = (state) => ({
  state: state,
  users: state?.users,
  planets: state?.planets,
});

export default connect(mapStateToProps)(UserList);
