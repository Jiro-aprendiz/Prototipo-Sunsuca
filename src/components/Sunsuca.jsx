import React from "react";
import images from "../image/Images.js";
import { Link } from "react-router-dom";
import styles from '../Styles/Sunsuca.module.css';

export default function Sunsuca() {
    return (
        <div className={styles.main}>
            <div className={styles.mainHeader}>
                <div className={styles.cardLogo}>

                    <img src={images.LogoPrincipal} className={styles.cardLogoPrincipal}/>
                    <Link to={"/sunsuca-cliente"}>Cliente</Link>
                    <Link to={"/sunsuca-admin"}>Administrador</Link>
                    <img src={images.User} className={styles.cardLogoUser}/>

                </div>

                <div className={styles.cardNavbar}>
                    {/* La etiqueta - Link - se importa de react router dom */}
                    {/* La propiedad - to - redirecciona, si se presiona click en el Link, a la URL que se le esta indicando*/}
                    <Link to={"/servicios"}>Servicios</Link>
                    <Link to={"/galeria"}>Galeria</Link>
                    <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
                </div> 

            </div>
            
            <div className={styles.mainContent}>

                <h1 className={styles.mainContentText}> ¡ Bienvenido a Sunsuca ! </h1>

            </div>
        </div>
    )
}
