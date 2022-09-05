import Header from "../components/shared/Header";
import Slide from '../components/slide/Slide';
import Miga from '../components/shared/Pan de miga/Miga';
import Buscador from '../components/shared/Buscador/Buscar';

export default function Buscar(){
  return (
    <div className="container">
    
      <Header />
      <Buscador />
      <Miga />
      <Slide />
      Buscar 👋
    </div>
  )
}