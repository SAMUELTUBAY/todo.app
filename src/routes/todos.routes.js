
import {Router} from "express";
import {TODOS} from '../constantes/contantes.js';
import {getTodos, getTodoById, createTodo, completeTodo, deletetodo,} from "../controllers/todo.controller.js";




const routerTodos =Router();

routerTodos.get("/todos", getTodos);


routerTodos.get("/todos/:id", getTodoById);
routerTodos.post("/todos",createTodo);
routerTodos.post("/todos/complete/:id",completeTodo);
routerTodos.delete("todos/:id",deletetodo);


export default routerTodos;