import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import handlerFunction from "./controller.js";
import session from "express-session";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
  session({
    secret: "ssshhhhh",
    saveUninitialized: true,
    resave: false,
  })
);

app.get("/userInfo", handlerFunction.getUserInfo);
app.get("/tieInfo", handlerFunction.getTieInfo);
app.post("/addTie", handlerFunction.addTie);
app.delete('/deleteTie/:tieId', handlerFunction.deleteTie)
app.put("/editTie/:id", handlerFunction.editTie);
app.put("/changeUser/:tieId", handlerFunction.changeUser)

app.get("/TieByUser/:userId", handlerFunction.getTieByUser);

app.post("/login", handlerFunction.login);
app.post("/register", handlerFunction.register);

app.get("/UserTies", handlerFunction.GetTieBySessionUser);

ViteExpress.listen(app, 1088, () => console.log("Server 1088 is up"));
