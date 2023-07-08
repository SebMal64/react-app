import axios from "axios";
import { useState } from "react";

const RegistrarLibros = (props) => {

    const { url, onListar } = props;

    let objlibro = {
        id: 0,
        nombre: '',
        autor: '',
        genero: '',
        precio: '',
    }
    const [libro, setLibros] = useState(objlibro);

    const manejaControles = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        libro[name] = value;
        setLibros(libro);
    }
    const enviarRegistro = (e) => {

        e.preventDefault();
        console.log(libro);
        axios.post(`${url}/`, libro)
            .then(resp => {
                document.getElementById('form-lib').reset();
                onListar();
            })
    }
    return (
        <div className="rounded ">
            <h2 className="text-light text-center fs-3"><strong>Registro de libro </strong></h2>
            <form className="p-2 text-white mb-2 " onSubmit={enviarRegistro} id="form-lib">
                <div className="form-group">
                    <label className="lead fs-4 mb-1"><strong>Nombre</strong></label>
                    <input type="text" name="nombre" className="form-control mb-1" required onChange={manejaControles} />
                </div>
                <div className="form-group">
                    <label className="lead fs-4 mb-1"><strong>Autor</strong></label>
                    <input type="text" name="autor" className="form-control mb-1" required onChange={manejaControles} />
                </div>
                <div className="form-group">
                    <label className="lead fs-4 mb-1"><strong>Género</strong></label>
                    <input type="text" name="genero" className="form-control mb-1" required onChange={manejaControles} />
                </div>
                <div className="form-group">
                    <label className="lead fs-4 mb-1"><strong>Precio</strong></label>
                    <input type="text" name="precio" className="form-control mb-3" required onChange={manejaControles} />
                </div>
                <div className="form-group row m-1">
                    <button className="btn btn-info fs-4 mt-2 btn-xm border border-1 border-white btn-block">Registrar</button>
                </div>
            </form>
        </div>
    )
}
export default RegistrarLibros;