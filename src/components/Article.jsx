import React from 'react'; 
import img8 from '../assets/img/foto8.jpg';
import img12 from '../assets/img/foto12.jpeg';
import img13 from '../assets/img/foto13.jpg';


function Article(){
	return (
	<article>
      <section class='mt-5 d-flex justify-content-center h-50'>
        <div id="carouselExampleControls" class="carousel slide  h-50" data-bs-ride="carousel">
          <div class="carousel-inner text-bg-secondary p-3 h-50">
            <div class="carousel-item active ">
              <img src={img8} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img12} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img13} class="d-block w-100" alt='...'/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </article>);
}
export default Article;