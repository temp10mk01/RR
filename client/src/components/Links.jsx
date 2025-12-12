import { Link } from "react-router-dom";

export default function Links(){
    return(
        <div className='Links'>
            <Link className="link" to="/"><p>PAGRINDINIS</p></Link>
            <Link className="link" to="/about"><p>APIE</p></Link>
            <Link className="link" to="/galerija"><p>GALERIJA</p></Link>
            <Link className="link" to="/contact"><p>KONTAKTAI</p></Link>
        </div>
    )
}