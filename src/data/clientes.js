import Error from "../components/Error"
export async function obtenerClientes(){
    const respuesta  = await fetch (import.meta.env.VITE_API_URL)
    const resultado = respuesta.json()
    return resultado
}
export async function agregarCliente(datos){

try {
    const respuesta = await fetch (import.meta.env.VITE_API_URL,{
        method: 'POST',
        body:JSON.stringify(datos),
        headers:{
            'content-type': 'application/json'
        }
    })
    await respuesta.json()
} catch (error) {
    console.log(error)
}
}

// regresa un cliente para edicion 
export async function obtenerCliente(id){
    const respuesta  = await fetch (`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = respuesta.json()
    return resultado
}
export async function actualizarCliente(datos, id){
   // console.log(`${import.meta.env.VITE_API_URL}/${id}`)
    
    try {
        const respuesta = await fetch (`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',
            body:JSON.stringify(datos),
            headers:{
                'content-type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
    return {}
}
export async function eliminarCliente(id){
    try {
        const respuesta = await fetch (`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE',
           
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
    return {}
}