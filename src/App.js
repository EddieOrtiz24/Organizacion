import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header.jsx';
import Formulario from "./componentes/Formulario/formulario.js"
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Colaborador from './componentes/colaborador';
import Footer from './componentes/footer';
import { v4 as uuid } from "uuid"

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState (false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      Equipo: "Front End",
      Foto: "https://github.com/harlandlohora.png",
      Nombre: "Harland Lohora",
      Puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      Equipo: "Programación",
      Foto: "https://github.com/genesysaluralatam.png",
      Nombre: "Genesys Rondón",
      Puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      Equipo: "UX y Diseño",
      Foto: "https://github.com/JeanmarieAluraLatam.png",
      Nombre: "Jeanmarie Quijada",
      Puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      Equipo: "Programación",
      Foto: "https://github.com/christianpva.png",
      Nombre: "Christian Velasco",
      Puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      Equipo: "Innovación y Gestión",
      Foto: "https://github.com/JoseDarioGonzalezCha.png",
      Nombre: "Jose Gonzalez",
      Puesto: "Dev FullStack",
      fav: true
    }

  ])

  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])
  

// Ternario --> condicion ? seMuestra : noSeMuestra

//cortocirtcuito = condición && seMuestra sería como un entonces

const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario)
}

//registrar colaborador

const registrarColaborador = (colaborador) => {
  console.log("Nuevo Colaborador" , colaborador)
  //Spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//eliminar colaborador

const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

//Actualizar color de equipo

const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if (colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
}


//Crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
}

// Trabaja similar a un if, si es verdadero se Muestra.

  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? <Formulario 
      equipos={equipos.map( ( equipo ) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      colaboradores={colaboradores}
      crearEquipo={crearEquipo}
      /> : <div></div>}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.Equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }

      <Footer />
    </div>
  );
}



export default App;
