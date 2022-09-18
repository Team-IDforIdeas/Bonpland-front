import { useRef } from "react";
// import logo from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  const $home = useRef(null);
  const $publicar = useRef(null);
  const $buscar = useRef(null);
  const $contacto = useRef(null);

  function remove() {
    $home.current.classList.remove("active");
    $publicar.current.classList.remove("active");
    $buscar.current.classList.remove("active");
    $contacto.current.classList.remove("active");
  }

  function activado(event) {
    remove();
    event.target.classList.add("active");
  }

  return (
    <div className="row mt-5">
      <div className="col-1 me-3">
        <svg
          width="54"
          height="44"
          viewBox="0 0 54 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.4009 25.3795C18.6137 27.8733 23.4009 39.2015 23.4009 39.2015H16.2006V14.322L27.001 0.5L37.8014 14.322V39.2015H30.6011C30.6011 39.2015 35.3883 27.8733 30.6011 25.3795C28.1073 24.0804 25.8947 24.0804 23.4009 25.3795Z"
            fill="#F5C181"
          />
          <path
            d="M43.1994 30.2011C40.1855 32.0095 43.1994 39.2015 43.1994 39.2015H37.7992V23.0008L45.8995 14.0005L53.9998 23.0008L50.8497 39.2015H48.5996C48.5996 39.2015 51.6136 32.0095 48.5996 30.2011C46.7913 29.1161 45.0078 29.1161 43.1994 30.2011Z"
            fill="#E0B067"
          />
          <path
            d="M10.8004 30.201C13.8143 32.0094 10.8004 39.2014 10.8004 39.2014L16.2006 39.2015V23.0008L8.10031 14.0004L0 23.0008L3.15012 39.2014H5.40021C5.40021 39.2014 2.38624 32.0094 5.40021 30.201C7.20858 29.116 8.99204 29.116 10.8004 30.201Z"
            fill="#E0B067"
          />
          <path
            d="M2.7938 37.4015H51.2017L50.8488 40.3266L51.2988 43.2517C31.186 40.3478 23.1166 40.3778 2.69696 43.2517L3.14698 40.3266L2.7938 37.4015Z"
            fill="#F5C181"
          />
        </svg>
      </div>
      <div className="col">
        <ul className="nav nav-tabs d-flex justify-content-end">
          <li className="nav-item fw-bolder">
            <Link
              className="nav-link text-dark"
              aria-current="page"
              to="/#"
              ref={$home}
              onClick={(event) => activado(event)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item fw-bolder">
            <Link
              className="nav-link text-dark"
              to="/publicar"
              ref={$publicar}
              onClick={(event) => activado(event)}
            >
              Publicar
            </Link>
          </li>
          <li className="nav-item fw-bolder">
            <Link
              className="nav-link text-dark"
              to="/buscar"
              ref={$buscar}
              onClick={(event) => activado(event)}
            >
              Buscador
            </Link>
          </li>
          <li className="nav-item fw-bolder">
            <Link className="nav-link text-dark" to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
