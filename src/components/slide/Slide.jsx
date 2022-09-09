import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import img1 from "../../assets/img/foto1.jpeg";
import img2 from "../../assets/img/foto2.jpeg";
import img3 from "../../assets/img/foto3.jpg";


import "./style.css";

function Slide() {

    let [left, setLeft] = useState(img1);
    let [center, setCenter] = useState(img2);
    let [right, setRight] = useState(img3);

    let [descrip, setDescrip] = useState('Esta es mi casa');
  
 

    
    

    function prev() {
        switch(center){
            case img1:
                setLeft(img1);
                setCenter(img3);
                setRight(img2);
                setDescrip('Esta es la casa de un vecino');
                
                break;
            case img2:
                setLeft(img2);
                setCenter(img1);
                setRight(img3);
                setDescrip('Casa de otro vecino');
                
                break;
            default:
                setLeft(img3);
                setCenter(img2);
                setRight(img1);
                setDescrip('Esta es mi casa');
               
                break;
        }
    }
    function next() {
         
        switch(center){
            case img1:
                setLeft(img2);
                setCenter(img3);
                setRight(img1);
                setDescrip('Casa de otro vecino');
                
                break;
            case img2:
                setLeft(img3);
                setCenter(img1);   
                setRight(img2);
                setDescrip('Esta es la casa de un vecino');
                
                break;
            default:
                setLeft(img1);
                setCenter(img2);
                setRight(img3);
                setDescrip('Esta es mi casa');
                break;
        } 
    }
   
   {/* setInterval(next , 3000) */ } 


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
          src={left}
          className="h-50"
          id="imgleft"
          alt="imgleft"
        />
        <img
          src={center}
          className="h-75"
          id="imgcenter"
          alt="imgcenter"
        />
        <img
          src={right}
          className="h-50"
          id="imgright"
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


  