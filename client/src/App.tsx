import Doodle from "./components/Doodle";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import RoomMenu from "./components/RoomMenu";

function App() {
  return (
    <div className="App">
      <Logo />
      <RoomMenu />
      <Menu />
      <Doodle />
    </div>
  );
}

export default App;
