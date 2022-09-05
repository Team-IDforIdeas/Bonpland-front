import img from '../../assets/Imagenes';
import './style.css';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';



function Slide() {

    const imgLeft = useRef(null);
    const imgCenter = useRef(null);
    const imgRight = useRef(null);
    let [count, setCount] = useState(null);

  
   

    
    

    function prev() {
        setCount(--count);
        switch(count){
            case -1:
                imgLeft.current.src = img.img2;
                imgCenter.current.src = img.img3;
                imgRight.current.src = img.img1;
                console.log('case1 ' + count );
                break;
            case -2:
                imgLeft.current.src = img.img3;
                imgCenter.current.src = img.img1;
                imgRight.current.src = img.img2;
                console.log('case2 ' + count );
                break;
            default:
                imgLeft.current.src = img.img1;
                imgCenter.current.src = img.img2;
                imgRight.current.src = img.img3;
                console.log('default ' + count )
                setCount(null);
                break;
            
        }

    }

    function next() {
        setCount(++count);
        switch(count){
            case 1:
                imgLeft.current.src = img.img3;
                imgCenter.current.src = img.img1;
                imgRight.current.src = img.img2;
                console.log('case1 ' + count );
                break;
            case 2:
                imgLeft.current.src = img.img2;
                imgCenter.current.src = img.img3;
                imgRight.current.src = img.img1;
                console.log('case2 ' + count );
                break;
            default:
                imgLeft.current.src = img.img1;
                imgCenter.current.src = img.img2;
                imgRight.current.src = img.img3;
                console.log('default ' + count )
                setCount(null);
                break;
        }
    }
    return ( <
        >
        <div className="row mt-3">
	            <div className="slider">
	                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" id='fle-left' onClick={prev} viewBox="0 0 512 512"><title>Caret Back</title><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>
	                <img src={img.img1} className='h-50' id="imgleft" ref={imgLeft} alt='imgleft' />
	                <img src={img.img2} className="h-75"  id="imgcenter" ref={imgCenter} alt='imgcenter' />
	                <img src={img.img3} className="h-50" id="imgright" ref={imgRight} alt='imgright' />
	                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" id='fle-right' onClick={next}  viewBox="0 0 512 512"><title>Caret Back</title><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>
	            </div>
	        </div> <
        />)

    }
    export default Slide;