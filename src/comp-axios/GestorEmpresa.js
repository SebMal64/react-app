import ListaEmpresa from "./ListaEmpresa";
import { useEffect, useState } from "react";
import axios from "axios";
import RegistroEmpresa from "./RegistroEmpresa";


const GestorEmpresa = () => {
    const url = "http://localhost:3001/empresas";
    const [empresas, setEmpresas] = useState([]);

    const listaEmpresa = () => {
        axios.get(`${url}`)
            .then(resp =>
                setEmpresas(resp.data))
    }
    useEffect(() => {
        listaEmpresa();
    }, [])

    const eliminaEmpresa = (emp) => {
        let confirma = window.confirm(`¿Desea eliminar empresa <strong> ${emp.nombre}</strong>`);
        if (confirma) {
            axios.delete(`${url}/${emp.id}`)
                .then(resp => {
                    listaEmpresa();
                }
                )
        }

    }


    const editarEmpresa = (emp) => {
        document.getElementById('id').value = emp.id;
        document.getElementById('nombre').value = emp.nombre;
        document.getElementById('descripcion').value = emp.descripcion;
        document.getElementById('calificacion').value = emp.calificacion;
    }


    const actualizarEmp =(e) =>{
        e.preventDefault()
        let id = document.getElementById('id').value;
        const objEmpresa = {
            nombre: document.getElementById('nombre').value,
            descripcion: document.getElementById('descripcion').value,
            calificacion: document.getElementById('calificacion').value,
            
        }
        axios.put(`${url}/${id}`,objEmpresa)
        .then(resp => {
            listaEmpresa();
        })

    }

    return (
        <div>
            <div className="row">
                <p className="lead fs-2 text-primary">Gestor de empresas Axios</p>
                <div className="col col-7 border border-2 border-primary shadow m-2">
                    <ListaEmpresa empresas={empresas} onEliminar={eliminaEmpresa} onEditar={editarEmpresa} />
                </div>
                <div className="col col-4 border border-2 border-primary shadow m-2">

                    <RegistroEmpresa url={url} onListar={listaEmpresa} />
                </div>
                {/* ventana modal bs */}

                <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="false">

                    <div className="modal-dialog border border-2 border-primary shadow">

                        <form onSubmit={actualizarEmp}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Actualizar Empresa</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>

                                </div>

                                <div className="modal-body">
                                    <div className="form-group m-1">
                                        <input type="hidden" id="id" />
                                        <label className="label lead text-primary">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>

                                    <div className="form-group m-1">
                                        <label className="label lead text-primary">Descripcion</label>
                                        <input type="text" className="form-control" id="descripcion" />
                                    </div>
                                    <div className="form-group m-1">
                                        <label className="label lead text-primary">Calificacion</label>
                                        <input type="text" className="form-control" id="calificacion" />
                                    </div>
                                    <div className="form-group row m-1">

                                        <button className="btn btn-block btn-xm btn-info mt-2 t-2" data-bs-dismiss="modal">Actualizar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GestorEmpresa;