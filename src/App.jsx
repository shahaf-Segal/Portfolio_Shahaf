import { ThemeContext } from "@contexts/ThemeProvider";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footnote from "./components/Sections/footnote/Footnote.jsx";
import Home from "./components/Sections/Home/Home.jsx";
import NavBar from "./components/Sections/NavBar/NavBar.jsx";
import Projects from "./components/Sections/Projects/Projects.jsx";
import SingleProject from "./components/Sections/SingleProject/SingleProject.jsx";
import SkillSection from "./components/Sections/Skills/SkillSection.jsx";
function App() {
  const { IsDark } = useContext(ThemeContext);

  return (
    <main id="App" data-theme={IsDark ? "dark" : "light"}>
      <BrowserRouter>
        <div id="top"></div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Home />
                <SkillSection />
                <Projects />
              </>
            }
          />
          <Route path="/project/:projectId" element={<SingleProject />} />
        </Routes>
        <Footnote />
      </BrowserRouter>
    </main>
  );
}

export default App;
