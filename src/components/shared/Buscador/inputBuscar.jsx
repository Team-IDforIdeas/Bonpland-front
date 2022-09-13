import './style.css';
import { useRef, useState } from 'react';

const Buscar = ()=> {

const [lupa, setLupa] = useState(null);
const palabraClave = ['comprar','alquilar']

    return (
        
        <>
           <div id='boxInput' className='mt-5'>
                <input type='text' id='inputBuscar'   placeholder='Estas buscando para comprar o alquilar?'/>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>alert('realizado')} id="lupita" className='ionicon' viewBox="0 0 512 512"><title>Search</title><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="gold" stroke-miterlimit="10" stroke-width="42"/><path fill="none" stroke="gold" stroke-linecap="round" stroke-miterlimit="10" stroke-width="62" d="M338.29 338.29L448 448"/></svg>
           </div>
           <div className='muestra'><h6>Alquiler</h6><span>X</span></div>
		</>
    )
}
export default Buscar;