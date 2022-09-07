import Image from "../../../../assets/img/foto4.jpg";
import "./index.css";

export default function Card() {
  return (
    <div className="card card__modified rounded-bottom">
      <img src={Image} className="card-img-top rounded-0" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="card-title fw-bold">Dirección de la propiedad</span>
          <span className="fw-bold">$ 10101</span>
        </div>
        <div className="row">
          <div className="col">
            <img src="" alt="" />
            <span className="card__span">3 Dormitorios</span>
          </div>
          <div className="col">
            <img src="" alt="" />
            <span className="card__span">2 Baños</span>
          </div>
          <div className="col">
            <img src="" alt="" />
            <span className="card__span">
              200 m<sup>2</sup>
            </span>
          </div>
        </div>
        <div className="row">
          <p className="card__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            saepe fugit cumque nisi eos adipisci unde sint, quis ducimus sunt
            doloremque amet, natus cum voluptates perferendis, assumenda eaque
            quibusdam fugiat.
          </p>
        </div>
        <div className="row">
          <button
            className="btn btn-dark col-6 rounded-2 m-auto button__card"
            type="button"
          >
            VISITAR
          </button>
        </div>
      </div>
    </div>
  );
}
