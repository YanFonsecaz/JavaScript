const express = require("express"); // puxando biblioteca
const app = express() // para poder usar os metodos
const path = require("path"); // biblioteca para mexer com os caminhos do node
const PORT = 3000; // localhost

// app.get("/",(req,res)=>{
//     res.send("Servidor Express rodando!")
// })
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist")));
app.use("/",express.static(path.join(__dirname, "public")));

app.listen(PORT) // iniciar o server

