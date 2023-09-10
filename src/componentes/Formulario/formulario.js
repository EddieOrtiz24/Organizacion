
import { useState } from "react"
import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../../listaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [Nombre, actualizarNombre] = useState ("")
    const [Puesto, actualizarPuesto] = useState ("")
    const [Foto, actualizarFoto] = useState ("")
    const [Equipo, actualizarEquipo] = useState ("")

    const[titulo, actualizarTitulo] = useState("")
    const[color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejando el envío");
        let datosAEnviar = {
            Nombre,
            Puesto,
            Foto,
            Equipo,
        }   
        registrarColaborador(datosAEnviar);

    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre"placeholder="Ingrese el nombre" required={true} valor={Nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingrese el puesto" required valor={Puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingrese una foto" required valor={Foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor={Equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
            
            
        </form>
       
        <form onSubmit={manejarNuevoEquipo}>
            <h2> Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Título" placeholder="Ingrese el título" required={true} valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingrese el color en Hex" required valor={color} actualizarValor={actualizarColor} type="color"/>
            <Boton>Registrar equipo</Boton>
        </form>
       
    </section>
}

export default Formulario