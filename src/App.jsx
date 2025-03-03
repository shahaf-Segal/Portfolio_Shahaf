import { ThemeContext } from "@contexts/ThemeProvider";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footnote from "./components/Sections/footnote/Footnote.jsx";
import Home from "./components/Sections/Home/Home.jsx";
import NavBar from "./components/Sections/NavBar/NavBar.jsx";
import Projects from "./components/Sections/Projects/Projects.jsx";
import SkillSection from "./components/Sections/Skills/SkillSection.jsx";

function App() {
  const { IsDark } = useContext(ThemeContext);

  return (
    <main id="App" data-theme={IsDark ? "dark" : "light"}>
      <BrowserRouter>
        <div id="top"></div>
        <NavBar />
        <Home />
        <SkillSection />
        <Projects />
        <Footnote />
      </BrowserRouter>
    </main>
  );
}

export default App;
