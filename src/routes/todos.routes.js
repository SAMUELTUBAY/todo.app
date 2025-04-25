
import {Router} from "express";
import {TODOS} from '../constantes/contantes.js';



const routerTodos =Router();

routerTodos.get("/todos", async (req, res)=> {
    res.status(200).send(TODOS);
});


routerTodos.get("/todos/:id", async (req, res)=> {
    const {id} = req.params;

    const resultadoBusqueda = TODOS.filter(t => t.id == id);

    if (resultadoBusqueda.length > 0)
    {
        res.status(200).json(resultadoBusqueda[0]);
    }else{
        const mensaje = `no se encontro todo con id ${id}`;
        res.status(404).json({
            message: mensaje,
        });
    }


})
export default routerTodos;