const Formulario = () => (
  // const {a} =  props;
  <form action="" className="form__contact">
    <div className="row">
      <input type="text" className="btn" />
    </div>
    <span>Caption text</span>
    <div className="row">
      <input type="email" className="contact__email" />
    </div>
    <span>Caption text</span>
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      className="contact__message"
      placeholder="Ingresa tu mensaje"
    />
    <button type="submit" className="contact__button btn btn-primary">
      Enviar
    </button>
  </form>
);

export default Formulario;
