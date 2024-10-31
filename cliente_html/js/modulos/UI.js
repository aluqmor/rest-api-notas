export const UI = {
    drawNotes: (notes, elementDiv) => {
        elementDiv.innerHTML = ''; // Limpiar contenido anterior
        notes.forEach(element => {
            elementDiv.innerHTML += `<p>Tipo: ${element.tipo}<br>Contenido: ${element.contenido}<br>Fecha: ${element.fechaCreacion}</p>`;
        });
    },
    notesFiltered: (filteredNotes, elementDiv) => {
        if (filteredNotes.length > 0) {
            elementDiv.innerHTML = `<h3>Notas del mes seleccionado:</h3>`;
            UI.drawNotes(filteredNotes, elementDiv);
        } else {
            elementDiv.innerHTML = "<p>No hay notas para el mes seleccionado.</p>";
        }
    }
};