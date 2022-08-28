import img8 from "../assets/img/foto8.jpg";
import img12 from "../assets/img/foto12.jpeg";
import img13 from "../assets/img/foto13.jpg";

function Article() {
  return (
    <article>
      <section className="mt-5 d-flex justify-content-center h-50">
        <div
          id="carouselExampleControls"
          className="carousel slide  h-50"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner text-bg-secondary p-3 h-50">
            <div className="carousel-item active ">
              <img src={img8} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img12} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img13} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </article>
  );
}
export default Article;
