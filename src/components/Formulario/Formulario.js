import { useState } from 'react'
import './Formulario.css'
import Campo from '../Campo/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'

const Formulario = (props) => {
    
const [nombre, setNombre] = useState('');
const [puesto, setPuesto] = useState('');
const [foto, setFoto] = useState('');
const [equipo, setEquipo] = useState("")

const [titulo, setTitulo] = useState("")
const [color, setColor] = useState("")

const { registrarColaborador, crearEquipo} = props

//Resetea el colaborador
const resetearColaborador = () => {
  setNombre('');
  setPuesto('');
  setFoto('');
  setEquipo('');
};

//Resetea el equipo
const resetearEquipo = () =>{
  setTitulo('');
  setColor('')
}


   const envio = (e) => {
    e.preventDefault()
    console.log('Manejar envio')
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosAEnviar)
    resetearColaborador()
   }

   const manejarNuevoEquipo = (e) =>{
    e.preventDefault()
    crearEquipo({titulo, colorPrimario: color})
   }
  return (

    

    <section className='formulario' >
        <form  onSubmit={envio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required  valor={nombre} setValor={setNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} setValor={setPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} setValor={setFoto}/>
            <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>
                Rellena el formulario para crear el equipo.
            </h2>
            <Campo
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required  
            valor={titulo} 
            setValor={setTitulo} />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar color en hex" 
            required 
            valor={color} 
            setValor={setColor}
            type="color"
            />

            <Boton texto="Registrar equipo">
              
            </Boton>
            </form>
        
        
    </section>
  )
}

export default Formulario