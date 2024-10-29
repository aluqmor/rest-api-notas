export const UI = {
    drawNotes: (notes, elementDiv) => {
        elementDiv.innerHTML = ''; // Limpiar contenido anterior
        notes.forEach(element => {
            elementDiv.innerHTML += `<p>Tipo: ${element.tipo}<br>Contenido: ${element.contenido}<br>Fecha: ${element.fechaCreacion}</p>`;
        });
    }
};