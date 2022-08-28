/* eslint-disable jsx-a11y/label-has-associated-control */
import "./index.css";
import Banner from '../banner/imgBanner';

const Formulario = () => (

      <div className="row">
        <form className="col-lg-6 col-md-9 col my-5 m-auto rounded-0">
          <div className="mb-3">
            <label htmlFor="contact__name" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              name="contact__name"
              id="contact__name"
              placeholder="Ingrese su nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact__email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="contact__email"
              placeholder="Ingrese su email"
              required
            />
          </div>
          <div className = "mb-3" >
            <label htmlFor="message" className="form-label">
                Mensaje
            </label> 
            <textarea name = "message"
            id = "message"
            cols = "30"
            rows = "10"
            className = "form-control"
            placeholder = "Ingresa tu mensaje" />
          </div> 
          <div className = "mb-3" >
            <button type="submit" className="d-block btn btn-dark w-25 ms-auto">
                  Enviar
            </button> 
          </div> 
        </form> 
      </div> 

);

export default Formulario;