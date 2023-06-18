

function Cliente({cliente}) {
    const {nombre, empresa, email, telefono} = cliente
    
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
            <button className="text-blue-600 hover:text-blue-900  uppercase font-bold text-xs ">
                Editar
            </button>
            <button className="text-red-600 hover:text-red-900 uppercase font-bold text-xs ">
                Eliminar
            </button>
        </td>
      </tr>
  
    
    
 
  )
}

export default Cliente
