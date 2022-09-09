import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import img from "../../assets/Imagenes";
import "./style.css";

function Slide() {

    let [left, setLeft] = useState(img.img1);
    let [center, setCenter] = useState(img.img2);
    let [right, setRight] = useState(img.img3);

    let [descrip, setDescrip] = useState('Esta es mi casa');
  
 

    
    

    function prev() {
        switch(center){
            case img.img1:
                setLeft(img.img1);
                setCenter(img.img3);
                setRight(img.img2);
                setDescrip('Esta es la casa de un vecino');
                
                break;
            case img.img2:
                setLeft(img.img2);
                setCenter(img.img1);
                setRight(img.img3);
                setDescrip('Casa de otro vecino');
                
                break;
            default:
                setLeft(img.img3);
                setCenter(img.img2);
                setRight(img.img1);
                setDescrip('Esta es mi casa');
               
                break;
        }
    }
    function next() {
         
        switch(center){
            case img.img1:
                setLeft(img.img2);
                setCenter(img.img3);
                setRight(img.img1);
                setDescrip('Casa de otro vecino');
                
                break;
            case img.img2:
                setLeft(img.img3);
                setCenter(img.img1);   
                setRight(img.img2);
                setDescrip('Esta es la casa de un vecino');
                
                break;
            default:
                setLeft(img.img1);
                setCenter(img.img2);
                setRight(img.img3);
                setDescrip('Esta es mi casa');
                break;
        } 
    }
   
   {/* setInterval(next , 4000) */ }


   return (
    <div className="row mt-3">
      <div className="slider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          id="fle-left"
          onClick={prev}
          viewBox="0 0 512 512"
        >
          <title>Caret Back</title>
          <path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" />
        </svg>
        <img
          src={img.img1}
          className="h-50"
          id="imgleft"
          ref={imgLeft}
          alt="imgleft"
        />
        <img
          src={img.img2}
          className="h-75"
          id="imgcenter"
          ref={imgCenter}
          alt="imgcenter"
        />
        <img
          src={img.img3}
          className="h-50"
          id="imgright"
          ref={imgRight}
          alt="imgright"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          id="fle-right"
          onClick={next}
          viewBox="0 0 512 512"
        >
          <title>Caret Back</title>
          <path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" />
        </svg>
        <div className="align-self-end" id="coment">
          <h5>{descrip} </h5>
        </div>
      </div>
    </div>
  );
}
export default Slide;


  