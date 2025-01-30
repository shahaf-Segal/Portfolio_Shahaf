import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/projects" element={<div></div>} />
        <Route path="/about" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
