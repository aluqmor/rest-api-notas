const express = require("express");
var cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/Notas')
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB', error);
    });

// Esquema de la nota
const noteSchema = new mongoose.Schema({
    tipo: String,
    contenido: String,
    fechaCreacion: Date
});

const Note = mongoose.model('Note', noteSchema);

// Estructura para obtener notas (GET)
app.get('/notas', async (req, res) => {
    try {
        const notes = await Note.find();
        res.send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Estructura para insertar notas (POST)
app.post('/addNote', async (req, res) => {
    try {
        const newNote = new Note({
            tipo: req.body.tipo,
            contenido: req.body.contenido,
            fechaCreacion: new Date(req.body.fechaCreacion)
        });
        await newNote.save();
        const notes = await Note.find();
        res.send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});