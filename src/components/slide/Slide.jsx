import fotos from '../assets/imagenes';
import './style.css';


function Slide(){
	return ( 
		<>
			<div className="row mt-3">
	            <div className="slider">
	                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" id='fle-left' viewBox="0 0 512 512"><title>Caret Back</title><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>
	                <img src={fotos.img1} className='h-50' id="imgleft" />
	                <img src={fotos.img2} className="h-75"  id="imgcenter" />
	                <img src={fotos.img3} className="h-50" id="imgright" />
	                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" id='fle-right' viewBox="0 0 512 512"><title>Caret Back</title><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>
	            </div>
	        </div>
        </>)
		
}
export default Slide;