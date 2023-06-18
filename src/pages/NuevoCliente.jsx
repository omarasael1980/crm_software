import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

export async function action ({request}){
  const formData = await request.formData()
  //console.log(...formData)
  //validar los datos del action
  //validar que no esten vacios los campos
  const datos = Object.fromEntries(formData)
  const errores =[]
  if(Object.values(datos).includes("")){
    errores.push("Debes llenar todos los campos")
  }
  if(Object.keys(errores).length >0){
    return errores
  }
  

  return {}
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
