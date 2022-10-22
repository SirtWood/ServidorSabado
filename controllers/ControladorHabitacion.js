//Una clase controlador establece los metodos (acciones) que vamos a realizar en DB.
//Y está alineado con el archivo de rutas.

export class ControladorHabitacion{
    
    constructor(){}

    agregarHabitacion(request, response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }

    consultarHabitaciones(request, response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de habitaciones",
                "datos":null
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }

    consultarHabitacion(request, response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una habitacion",
                "datos":null
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }

    editarHabitacion(request, response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion al editar habitacion",
                "datos":null
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }
}