import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Popular from "./Popular";
import BestMovies from "./BestMovies";
function Rutas() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Body />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/best-movies" element={<BestMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rutas;
