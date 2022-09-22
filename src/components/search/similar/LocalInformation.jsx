import GoogleMapIframe from "../../shared/Iframe/GoogleMapIframe";
import CarIcon from "../../shared/Icons/CarIcon";

const LocalInformation = () => (
  <div>
    <h1>Información Local</h1>
    <hr />
    <button type="button">Restaurantes</button>
    <button type="button">Escuelas</button>
    <button type="button">Museos</button>
    <br />
    <GoogleMapIframe />
    <br />
    <CarIcon />
  </div>
);

export default LocalInformation;
