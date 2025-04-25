import express from "express";
import routertodos from "./routes/todos.routes.js";

const app =express();
app.use(routertodos);





app.listen(3000, () =>console.log("Listening on port 3000"));
