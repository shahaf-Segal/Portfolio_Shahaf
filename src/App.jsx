import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/projects" element={<div></div>} />
        <Route path="/about" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
