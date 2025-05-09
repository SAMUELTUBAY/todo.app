import express from "express";
import morgan from "morgan";
import routertodos from "./routes/todos.routes.js";
import cors from "cors";


const app =express();

app.use(cors());

app.use(express.json());

app.use(morgan.json("dev"));


app.use(routertodos);



app.listen(3000, () =>console.log("Listening on port 3000"));
