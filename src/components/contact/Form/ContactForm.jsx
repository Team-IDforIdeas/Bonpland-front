/* eslint-disable jsx-a11y/label-has-associated-control */
import "./index.css";
import Banner from '../banner/imgBanner';

const Formulario = () => (
  // const {a} =  props;
  <>
  <Banner />
  <form action="" className="form__contact my-5 w-50 m-auto">
    <div className="row mb-5">
      <div className="col text-center border border-bottom-0 p-3 ">
        Personal
      </div>
      <div className="col text-center border border-top-0 border-end-0 border-start-0 p-3">
        Agencia
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="contact__name" className="form-label">
        Nombre completo
      </label>
      <input
        type="text"
        className="form-control"
        name="contact__name"
        id="contact__name"
        placeholder="Ingrese su nombre"
        required
      />
      {/* <span>Caption text</span> */}
    </div>
    <div className="mb-3">
      <label htmlFor="contact__email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="contact__email"
        placeholder="Ingrese su email"
        required
      />
      {/* <span>Caption text</span> */}
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">
        Mensaje
      </label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        className="form-control"
        placeholder="Ingresa tu mensaje"
      />
    </div>
    {/* <div> */}
    <button type="submit" className="d-block btn btn-dark w-25 ms-auto">
      Enviar
    </button>
    {/* </div> */}
  </form>
  </>
);

export default Formulario;
