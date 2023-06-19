import { Form , useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom"
import Formulario from "../components/Formulario"
import { obtenerCliente, actualizarCliente } from "../data/clientes"
import Error from "../components/Error"

export async function loader({params}){
   
    const cliente = await obtenerCliente(params.clienteId)
    //console.log(cliente)
    if (Object.values(cliente).length === 0 ){
        throw new Response("", {
            status: 404, 
            statusText: "El cliente no existe"

        })
    }
    return cliente
    }
export async function action({request, params}){
    const formData = await request.formData()
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
   
    await actualizarCliente(datos, params.clienteId)
    
  
    return redirect("/")
}

    
function EditarCliente() {
    const cliente = useLoaderData()
    const nav = useNavigate()
    const errores = useActionData()
  return (
    <>
      <h1 className="text-4xl text-center font-bold text-blue-900 ">Editar Cliente</h1>
      <p className="mt-3 font-bold text-center">A continuación podrás modificar los datos del cliente:</p>
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
           cliente = {cliente}
          />
          <input  
            type="submit" 
            value ="Guardar Cambios" 
            className="mt-5 w-full rounded-lg bg-blue-800 p-3 uppercase text-white text-lg"
          />
        </Form>
      </div>
      

    </>
  )
}

export default EditarCliente
