import Doodle from "./components/Doodle";
import Menu from "./components/Menu";
import RoomMenu from "./components/RoomMenu";

function App() {
  return (
    <div className="App">
      <RoomMenu />
      <Menu />
      <Doodle />
    </div>
  );
}

export default App;
