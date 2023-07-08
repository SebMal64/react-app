import { useState, useEffect } from "react";
import axios from "axios";

import Biblioteca from "./Biblioteca";
import RegistrarLibros from "./RegistrarLibros";

const GestorLibros = () => {

    const url = "http://localhost:3001/libros";
    const [libros, setLibros] = useState([]);

    const listalibros = () => {
        axios.get(`${url}`)
            .then(resp =>
                setLibros(resp.data))
    }
    useEffect(() => {
        listalibros();
    }, [])

    const eliminarLibro = (libro) => {
        let confirma = window.confirm(`¿Desea eliminar el libro "${libro.nombre}"`);
        if (confirma) {
            axios.delete(`${url}/${libro.id}`)
                .then(resp => {
                    listalibros();
                }
                )
        }

    }


    const editarLibro = (libro) => {
        document.getElementById('id').value = libro.id;
        document.getElementById('nombre').value = libro.nombre;
        document.getElementById('autor').value = libro.autor;
        document.getElementById('genero').value = libro.genero;
        document.getElementById('precio').value = libro.precio;
    }


    const actualizarLibro = (e) => {
        e.preventDefault()
        let id = document.getElementById('id').value;
        const objlibro = {
            nombre: document.getElementById('nombre').value,
            autor: document.getElementById('autor').value,
            genero: document.getElementById('genero').value,
            precio: document.getElementById('precio').value,

        }
        axios.put(`${url}/${id}`, objlibro)
            .then(resp => {
                listalibros();
            })

    }

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <Biblioteca libros={libros} onEliminar={eliminarLibro} onEditar={editarLibro} />
                </div>
                <div style={{height:'540px'}} className="m-4 bg- col-3 bg-secondary border border-2 p-4"><RegistrarLibros url={url} onListar={listalibros} /></div>
                <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="false">

                    <div className="col-3 modal-dialog border border-2 border-primary shadow">

                        <form onSubmit={actualizarLibro}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Actualizar Libro</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>

                                </div>

                                <div className="modal-body">
                                    <div className="form-group m-1">
                                        <input type="hidden" id="id" />
                                        <label className="label lead text-primary">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>

                                    <div className="form-group m-1">
                                        <label className="label lead text-primary">Autor</label>
                                        <input type="text" className="form-control" id="autor" />
                                    </div>
                                    <div className="form-group m-1">
                                        <label className="label lead text-primary">Genero</label>
                                        <input type="text" className="form-control" id="genero" />
                                    </div>
                                    <div className="form-group m-1">
                                        <label className="label lead text-primary">Precio</label>
                                        <input type="text" className="form-control" id="precio" />
                                    </div>
                                    <div className="form-group row m-1">

                                        <button className="btn btn-block btn-xm btn-info mt-2 t-2" data-bs-dismiss="modal">Actualizar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div></div>
            </div>
        </div>

    )
}
export default GestorLibros;