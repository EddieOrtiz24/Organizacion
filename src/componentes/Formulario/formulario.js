
import "./formulario.css"
import CampoTexto from "../campotexto"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2> Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre"placeholder="Ingrese el nombre" />
            <CampoTexto titulo="Puesto" placeholder="Ingrese el puesto" />
            <CampoTexto titulo="Foto" placeholder="Ingrese una foto" />
            
        </form>
    </section>
}

export default Formulario