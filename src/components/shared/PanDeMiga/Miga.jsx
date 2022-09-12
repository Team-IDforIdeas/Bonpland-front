import { Link } from 'react-router-dom';
const Miga = ()=>{

  return (

        <nav aria-label="breadcrumb" className='mt-5'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
            <li className="breadcrumb-item"><Link to="#">Library</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        );

} 
export default Miga;