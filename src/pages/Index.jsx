import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
export function loader(){
  //funcion que se carga con la pagina
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];
  //debe siempre retornaralgo
  return clientes 
}

function Index  ()  {
 const  clientes = useLoaderData()
 
 
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-blue-900 ">Clientes</h1>
      <p className="mt-3 font-bold text-center"> Administra tus clientes</p>
      
     
    {clientes.length ?(
      <table className="w-full bg-white shadow mt-5 table-auto">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Cliente </th>
            <th className="p-2">Contactos </th>
            <th className="p-2">Acciones </th>
           
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente=>(
            <Cliente
            cliente = {cliente}
            key = {cliente.id}
            />
            
          ))}
        </tbody>
      
      </table>
    ):(
      
      <p className="text-center mt-10 "> No hay clientes aún</p>
    )}
   
    </div>
  )
}

export default Index
