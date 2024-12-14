import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies.jsx";
import Main from "./pages/Main.jsx";
import Price from "./pages/Price.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
  return (
    <div className="App">
      {/* Navigation menu */}
      <Nav />
      {/* Define routes */}
      <Routes>
        {/* Main page */}
        <Route path="/" element={<Main />} />
        {/* Currencies page */}
        <Route path="/currencies" element={<Currencies />} />
        {/* Price page with a dynamic parameter */}
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
