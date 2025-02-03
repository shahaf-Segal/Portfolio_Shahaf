import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import About from "./components/Sections/About/About.jsx";
import Home from "./components/Sections/Home/Home.jsx";
import NavBar from "./components/Sections/NavBar/NavBar.jsx";

function App() {
  const [IsDark, setIsDark] = useState(true);
  const toggleDark = () => {
    setIsDark(!IsDark);
  };

  return (
    <main id="App">
      <BrowserRouter>
        <NavBar />
        <Home />
        <About />
      </BrowserRouter>
    </main>
  );
}

export default App;
