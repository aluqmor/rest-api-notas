import { NoteHandler } from './modulos/NoteHandler.js';
import { NoteConsumer } from './modulos/NoteConsumer.js';
import { UI } from './modulos/UI.js';

let notes = null;
NoteHandler.getInstance('http://localhost:3000').getAllNotes((datos) => {
  notes = NoteConsumer.consumNotes(datos);
  UI.drawNotes(notes, document.getElementById('nota'));
});

// Función para filtrar las notas por mes de creación
document.getElementById("filterButton").addEventListener("click", () => {
  const mes = document.getElementById("monthFilter").value;
  const filteredNotes = notes.filter((note) => {
    const mesNota = new Date(note.fechaCreacion).getMonth() + 1; // Obtiene el mes de la fecha de creación
    return mesNota === parseInt(mes);
  });
  UI.drawNotes(filteredNotes, document.getElementById('nota'));
});

// Función para agregar una nota nueva
document.getElementById('noteForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const tipo = document.getElementById('tipo').value;
  const contenido = document.getElementById('contenido').value;
  const fechaCreacion = document.getElementById('fechaCreacion').value;
  NoteHandler.getInstance('http://localhost:3000').addNote({ tipo, contenido, fechaCreacion }, (datos) => {
      notes = NoteConsumer.consumNotes(datos);
      UI.drawNotes(notes, document.getElementById('nota'));
  }, (error) => {
      console.error(error);
  });
});