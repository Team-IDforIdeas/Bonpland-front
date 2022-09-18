import Header from "../components/shared/Header";

import Slide from '../components/slide/Slide';
import Miga from '../components/shared/panDeMiga/Miga';
import Buscador from '../components/shared/Buscador/inputBuscar';


export default function Buscar() {
  return (
    <div className="container">
      <Header />
      <Buscador />
      <Miga />
      <Slide />
      Buscar 👋
    </div>
  );
}
