const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

// Verbos HTTP
// GET Receber dados de um Resource.
// POST Enviar dados ou informações para serem processados por um Resource.
// PUT Atualizar dados de um Resource.
// DELETE Deletar um Resource.

app.get("/clients", function (req, res) {
  res.json(data);
  console.log(typeof res);
});

app.get("/clients/:id", function (req, res) {
  const { id } = req.params
  const client = data.find(cli => cli.id == id)

  if(!client){
    return res.status(200).json({ erro: 'cliente não encontrado' });
  }

  res.json(client)

});

app.post("/clients", function (req, res) {});
app.put("/clients/:id", function (req, res) {});
app.delete("/clients/:id", function (req, res) {});

app.listen(3000, function () {
  console.log("Server is running");
  console.log(data);
  
});
