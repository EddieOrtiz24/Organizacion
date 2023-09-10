import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {

//const [nombreVarialbe, funcionActualizar] = useState (valorInicial)

 /*   const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {
        console.log("mostrar/Ocultar elemento");
        actualizarMostrar(!mostrar)
        
    }*/

    return <section className="orgSection">
        <h3 className="orgSection__titulo"> Mi Organización  </h3>
    <img className="orgSection__boton" src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>

    </section>
}

export default MiOrg