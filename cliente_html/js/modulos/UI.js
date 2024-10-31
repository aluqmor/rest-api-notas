export const UI = {
    drawNotes: (notes, elementDiv) => {
        elementDiv.innerHTML = ''; // Limpiar contenido anterior
        notes.forEach(element => {
            const noteDiv = document.createElement('div'); // Crear un div para cada nota
            noteDiv.className = `note ${element.tipo}`; // Asignar una clase al div
            // Agregar contenido al div
            noteDiv.innerHTML = `
                <p>${element.contenido}</p>
                <p>${new Date(element.fechaCreacion).toLocaleDateString()}</p>
            `;
            elementDiv.appendChild(noteDiv);
        });
    },
    // Muestra un mensaje tanto si hay notas como si no las hay
    notesFiltered: (notes, elementDiv) => {
        if (notes.length > 0) {
            elementDiv.innerHTML = `<h3>Notas del mes seleccionado:</h3>`;
            UI.drawNotes(notes, elementDiv);
        } else {
            elementDiv.innerHTML = "<p>No hay notas para el mes seleccionado.</p>";
        }
    }
};