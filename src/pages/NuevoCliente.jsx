import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"
import {agregarCliente} from "../data/clientes"

export async function action ({request}){
  const formData = await request.formData()

  //console.log(...formData)
  //validar los datos del action
  //validar que no esten vacios los campos
  const datos = Object.fromEntries(formData)
  const email= formData.get("email")
  const errores =[]
  if(Object.values(datos).includes("")){
    errores.push("Debes llenar todos los campos")
  }
  //validar email
  let regex = new RegExp(/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/);
  
  if(!regex.test(email)){
    errores.push("Email no válido")
    
  }
  if(Object.keys(errores).length >0){
    return errores
  }
  
  await agregarCliente(datos)
  

  return redirect("/")
}
const NuevoCliente = () => {
  const errores = useActionData()

  const nav = useNavigate()
  
  return (
    <>
      <h1 className="text-4xl text-center font-bold text-blue-900 ">Nuevo Cliente</h1>
      <p className="mt-3 font-bold text-center">Completa los campos para registrar un nuevo cliente:</p>
      <div className="flex justify-end">
        <button className="bg-blue-800 py-1 uppercase px-3 text-white rounded-md"
        onClick={() =>{nav(-1)}}
        > Regresar</button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
         {errores?.length && errores.map((error, i)=>(
          <Error key={i}>{error}</Error>
         )
         )}
        <Form
        method="post"
        noValidate
        >
           <Formulario
          />
          <input  
            type="submit" 
            value ="Registrar Cliente" 
            className="mt-5 w-full rounded-lg bg-blue-800 p-3 uppercase text-white text-lg"
          />
        </Form>
      </div>
      

    </>
  )
}

export default NuevoCliente
