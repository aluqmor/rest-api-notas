# Notas API 

## Descripción

Este proyecto proporciona una API REST para la gestión de notas, junto con un cliente web que permite a los usuarios interactuar de manera intuitiva con la API. Las notas pueden ser de dos tipos (`normal` o `crítica`) e incluyen un campo de contenido y una fecha de creación. La API almacena las notas en una base de datos MongoDB mediante Mongoose.

## Características

### API REST
- **GET /notas**: Recupera todas las notas almacenadas en la base de datos.
- **POST /añadirNota**: Añade una nueva nota a la base de datos MongoDB.

### Cliente Web
- **Gestión de Notas**: Interfaz web que permite a los usuarios agregar y visualizar notas.
- **Filtrado por Mes**: Funcionalidad que permite filtrar las notas por el mes de creación.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express.js, Mongoose
- **Base de Datos**: MongoDB
- **Frontend**: HTML, CSS, JavaScript

## Configuración del Proyecto

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/usuario/mi-proyecto-notas.git
   cd mi-proyecto-notas