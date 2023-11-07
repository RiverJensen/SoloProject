import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import handlerFunction from "./controller.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

app.get("/userInfo", handlerFunction.getUserInfo);
app.get('/tieInfo', handlerFunction.getTieInfo)
app.post("/addTie", handlerFunction.addTie);
// app.delete('/deleteTie/:id', handlerFunction.deleteTie)
app.put("/editTie/:id", handlerFunction.editTie);


ViteExpress.listen(app, 1088, () => console.log("Server 1088 is up"));
