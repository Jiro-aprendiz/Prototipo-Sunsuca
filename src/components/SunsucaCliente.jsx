import { Link } from "react-router-dom";

export default function SunsucaCliente() {
    return (
        <>
         <h1>Redireccionar con link aquí CCCCCC</h1>
         {/* La etiqueta - Link - se importa de react router dom */}
         {/* La propiedad - to - redirecciona, si se presiona click en el Link, a la URL que se le esta indicando*/}
         <Link to={"/servicios"}>Servicios</Link>
         <Link to={"/galeria"}>Galeria</Link>
         <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
        </>
    )
}