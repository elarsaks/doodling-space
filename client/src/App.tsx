import "./App.css";
import Doodle from "./components/Doodle";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />
      <Doodle />
    </div>
  );
}

export default App;
