import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Buscar from "../pages/Buscar";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Publicar from "../pages/Publicar";
import Search from "../pages/Search";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buscar" element={<Buscar />} />
        <Route path="*" element={<NotFound />} />
        <Route path="contact" element={<Contact />} />
        <Route path="publicar" element={<Publicar />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
