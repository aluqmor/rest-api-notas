export class NoteHandlerC {
    constructor(url) {
        this._url = url;
        this._lastQueryStatus = null;
    }

    getAllNotes(onSuccesCallBack, onErrorCallBack) {
        fetch(`${this._url}/notas`)
            .then((datos) => {
                datos.json().then((datos) => {
                    this._lastQueryStatus = true;
                    onSuccesCallBack(datos);
                }, (error) => {
                    this._lastQueryStatus = false;
                    onErrorCallBack('JSONException');
                })
            }, (error) => {
                this._lastQueryStatus = false;
                onErrorCallBack('ConnectionException');
            });
    }

    // Método para agregar una nota
    addNote(nota, onSuccesCallBack, onErrorCallBack) {
        fetch(`${this._url}/addNote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nota)
        })
        .then((respuesta) => {
            if (respuesta.ok) {
                respuesta.json().then((datos) => {
                    this._lastQueryStatus = true;
                    onSuccesCallBack(datos);
                });
            } else {
                this._lastQueryStatus = false;
                onErrorCallBack('ServerError');
            }
        })
        .catch((error) => {
            this._lastQueryStatus = false;
            onErrorCallBack('ConnectionException');
        });
    }
}