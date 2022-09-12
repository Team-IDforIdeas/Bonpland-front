import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Buscar from "../pages/Buscar";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Publicar from "../pages/Publicar";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="buscar" element={<Buscar />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="publicar" element={<Publicar />} />
      </Routes>
    </BrowserRouter>
  );
}
