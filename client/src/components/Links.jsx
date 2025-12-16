import { Link } from "react-router-dom";

export default function Links(){
    return(
        <div className='Links'>
            <Link className="link" to="/"><p>PAGRINDINIS</p></Link>
            <span>~</span>
            <Link className="link" to="/apie"><p>APIE</p></Link>
            <span>~</span>
            {/* !CHANGE SEPARATORS! */}
            <Link className="link" to="/galerija"><p>GALERIJA</p></Link>
            <span>~</span>
            <Link className="link" to="/kontaktai"><p>KONTAKTAI</p></Link>
        </div>
    )
}