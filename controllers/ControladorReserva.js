export class ControladorReserva{

    constructor(){}

    agregarReserva(request, response){
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

    consultarReservas(request, response){
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

    consultarReserva(request, response){
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
    
    editarReserva(request, response){
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