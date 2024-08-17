import app from "./app.js";
import "./database.js";

app.get("/getAll", (req, res)=>{
    res.json({message:"Hola desde la maquina de Adalid"})
})

app.listen(app.get ("port"),() => {
    console.log("Server on port 3000", app.get("port")); 
})