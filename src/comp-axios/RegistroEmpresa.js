import axios from "axios";
import { useState } from "react";

const RegistroEmpresa = (props) => {

    const {url, onListar} = props;

    let objEmpresa ={
        id:0,
        nombre:'',
        descripcion:'',
        calificacion:''
    }
    const [empresa, setEmpresas]=useState(objEmpresa);

    const manejaControles=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

       empresa[name]=value;
        setEmpresas(empresa);
    }
    const enviarRegistro = (e) => {

        e.preventDefault();
        console.log(empresa);
        axios.post(`${url}/`,empresa)
        .then(resp => {
            document.getElementById('form-emp').reset();
            onListar();
        })
    }
    return (
        <div>
            <p className="text-primary lead fs-4">Registro de Empresa </p>
            <form onSubmit={enviarRegistro} id="form-emp" >
                <div className="form-group">
                    <label className="lead fs-4 text-primary mb-3">Nombre</label>
                    <input type="text" name="nombre" className="form-control" required onChange={manejaControles}/>
                </div>
                <div className="form-group">
                    <label className="lead fs-4 text-primary">Descripcion</label>
                    <input type="text" name="descripcion" className="form-control" required onChange={manejaControles}/>
                </div>
                <div className="form-group">
                    <label className="lead fs-4 text-primary">Calificacion</label>
                    <input type="text" name="calificacion" className="form-control" required onChange={manejaControles}/>
                </div>
                <div className="form-group row m-1">
                    <button className="btn btn-primary btn-lg btn-block t-2 m-2 mx-auto ">Registrar</button>
                </div>
            </form>
        </div>
    )
}
export default RegistroEmpresa;