import { ThemeContext } from "@contexts/ThemeProvider";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import About from "./components/Sections/About/About.jsx";
import Home from "./components/Sections/Home/Home.jsx";
import NavBar from "./components/Sections/NavBar/NavBar.jsx";
import Footnote from "./components/Sections/footnote/Footnote.jsx";

function App() {
  const { IsDark } = useContext(ThemeContext);

  return (
    <main id="App" data-theme={IsDark ? "dark" : "light"}>
      <BrowserRouter>
        <NavBar />
        <Home />
        <About />
        <Footnote />
      </BrowserRouter>
    </main>
  );
}

export default App;
