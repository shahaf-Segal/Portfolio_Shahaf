import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import About from "./components/Sections/About/About.jsx";
import NavBar from "./components/Sections/NavBar/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <About />
    </BrowserRouter>
  );
}

export default App;
