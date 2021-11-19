import UserList from "./components/UserListContainer";
import "./App.css";
import LoadData from "./services/LoadDataContainer";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadData />
        <UserList />
      </header>
    </div>
  );
}

export default connect()(App);
