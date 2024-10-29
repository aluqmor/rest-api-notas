const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Estructura de datos para almacenar notas
const notas = [
    {
      tipo: "Critica",
      contenido: "Estudiar para el examen de mañana",
      fechaCreacion: "15-02-2024",
    },
    {
      tipo: "Normal",
      contenido: "Hoy es mi cumpleaños",
      fechaCreacion: "10-07-2024",
    },
    {
      tipo: "Critica",
      contenido: "Comprar el pan",
      fechaCreacion: "20-05-2024",
    },
    {
      tipo: "Normal",
      contenido: "Estoy cansado",
      fechaCreacion: "07-10-2024",
    }
];

// Estructura para obtener notas (GET)
app.get("/notas", (req, res) => {
  res.json(notas);
});

// Estructura para insertar notas (POST)
app.post("/", (req, res) => {
  const nuevaNota = req.body;
  notas.push(nuevaNota);
  res.status(201).json(nuevaNota);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});