import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return(
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
                CRM - Clientes
            </h1>
           
                    <p className="text-center text-xl font-bold mt-20 text-blue-900">Hubo un error</p> 
                    <p className="text-center text-xl font-bold mt-20 text-blue-900">{error.message}</p>
          
        </div>
    )
}