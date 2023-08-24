import Doodle from "./components/Doodle";
import Menu from "./components/Menu";
import RoomMenu from "./components/RoomMenu";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RoomMenu />
        <Menu />
        <Doodle />
      </div>
    </Provider>
  );
}

export default App;
