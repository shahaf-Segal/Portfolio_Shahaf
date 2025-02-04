import { ThemeContext } from "@contexts/ThemeProvider";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import About from "./components/Sections/About/About.jsx";
import Home from "./components/Sections/Home/Home.jsx";
import NavBar from "./components/Sections/NavBar/NavBar.jsx";

function App() {
  const { IsDark } = useContext(ThemeContext);

  return (
    <main id="App" data-theme={IsDark ? "dark" : "light"}>
      <BrowserRouter>
        <NavBar />
        <Home />
        <About />
      </BrowserRouter>
    </main>
  );
}

export default App;
