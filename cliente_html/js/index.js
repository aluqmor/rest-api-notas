import { NoteHandler } from './modulos/NoteHandler.js';
import { NoteConsumer } from './modulos/NoteConsumer.js';
import { UI } from './modulos/UI.js';

let notes = null;
NoteHandler.getInstance('http://localhost:3000').getAllNotes((datos)=> {
  notes = NoteConsumer.consumNotes(datos);
  UI.drawNotes(notes, document.getElementById('nota'));
});

// Hago una función para filtrar las notas por mes cuando se haga click en el botón
document.getElementById("filterButton").addEventListener("click", () => {
  const mes = document.getElementById("monthFilter").value;
  const filteredNotes = notes.filter((note) => {
    const mesNota = note.fechaCreacion.split("-")[1]; // Uso el método split para dividir la cadena y obtengo el mes que esta en la segunda posición de la fecha
    return mesNota === mes;
  });
  const notesFilteredDiv = document.getElementById("notasFiltradas");
  UI.notesFiltered(filteredNotes, notesFilteredDiv);
});

