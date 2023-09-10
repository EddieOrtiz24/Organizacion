import "./listaOpciones.css"
const ListaOpciones = (props) => {
/* Método map -> arreglo.map(() =>{
    return <option></option>
}) 

Este método recibe dato por dato y va aplicando lo que se indica en la función uno a uno (desde el 0 hasta el valor final). En este caso se va a usar
para que nos regrese algo en específico.
*/
    

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">

   

        <label > Equipos </label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value ="" disabled defaultValue="" hidden>seleccionar equipo</option>
        { props.equipos.map( (equipo, index) =>  <option key={index} value={equipo}> {equipo} </option>)}
        </select>
    </div>
}

export default ListaOpciones