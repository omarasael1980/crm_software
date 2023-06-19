import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarCliente } from "../data/clientes"
export async function action({params}){
    
    
   await eliminarCliente(params.clienteId)
return redirect('/')
}

function Cliente({cliente}) {
    const {nombre, empresa, email, telefono,id} = cliente
    const navegar = useNavigate()
  return (
  

      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800 text-center">{nombre}</p>
          <p className="text-center">{empresa}</p>
        </td>
        <td className="p-6 space-y-2">
          
            <p className="text-2xl text-gray-600 text-center">  
                <span className="text-gray-800 uppercase font-bold">Email: </span>{email}
            </p>
            <p className="text-center"><span className="text-gray-800 uppercase font-bold">Tel: </span>
             {telefono}
            </p>
        </td>
        <td className="p-6 flex gap-3">
            <button 
            onClick={()=>
                navegar(`/clientes/${id}/editar`)
  }
            className="text-blue-600 hover:text-blue-900  uppercase font-bold text-xs ">
                Editar

            </button>
           <Form
           method="POST"
           action={`/clientes/${id}/eliminar`}
           onSubmit={e=>{
                if(!confirm("Deseas eliminar al cliente: "+nombre)){
                e.preventDefault(0)
            }
        }

           }
        
           >
                <button  type="submit" className="text-red-600 hover:text-red-900 uppercase font-bold text-xs ">
                    Eliminar
                </button>
           </Form>
        </td>
      </tr>
  
    
    
 
  )
}

export default Cliente
