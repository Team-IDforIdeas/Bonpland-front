import img from '../../assets/Imagenes.jsx';
import './style.css';


function Slide() {

    {/*const left = document.querySelector('#fle-left');
    const right = document.querySelector('#fle-right');

    
    const imgleft = document.querySelector('#imgleft');
    const imgcenter = document.querySelector('#imgcenter');
    const imgright = document.querySelector('#imgright');

    let count = 1;
    let count1 = 0;
    let count2 = 2;
    right.addEventListener('click', next);
    left.addEventListener('click', prev);
    console.log(fotoslide.length)

    function prev() {
        count++;
        count1++;
        count2++;
        if (count > fotoslide.length - 1) {
            count = 0
        }
        imgcenter.src = fotoslide[count];

        if (count1 > fotoslide.length - 1) {
            count1 = 0
        }
        imgleft.src = fotoslide[count1];

        if (count2 > fotoslide.length - 1) {
            count2 = 0
        }
        imgright.src = fotoslide[count2];


    }

    function next() {
        count--;
        count1--;
        count2--;

        if (count < 0) {
            count = (fotoslide.length - 1);
        }
        imgcenter.src = fotoslide[count];

        if (count1 < 0) {
            count1 = (fotoslide.length - 1);
        }
        imgleft.src = fotoslide[count1];

        if (count2 < 0) {
            count2 = (fotoslide.length - 1);
        }
        imgright.src = fotoslide[count2];
    } */ }
    return ( <
        >
        <div className="row mt-3">
	            <div className="slider">
	                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" id='fle-left' viewBox="0 0 512 512"><title>Caret Back</title><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>
	                <img src={img.img1} className='h-50' id="imgleft" alt='imgleft' />
	                <img src={img.img2} className="h-75"  id="imgcenter" alt='imgcenter' />
	                <img src={img.img3} className="h-50" id="imgright" alt='imgright' />
	                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" id='fle-right' viewBox="0 0 512 512"><title>Caret Back</title><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>
	            </div>
	        </div> <
        />)

    }
    export default Slide;