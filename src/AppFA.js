import Curso from "./comp/Curso.js";
import { data } from "./data.js";
//props es una palabra reservada
const AppFA=(props) => {
//Para acceder a las propiedades de AppFA
//k
    const {curso, dificultad}=props; 

    return (
    <div className="container border border-4 m-4 border-secondary">
        <p className="lead fs-2 text-primary">Componente función arrow</p>
        <button className="btn btn-danger btn-rounded bg-primary text-white fs-3 p-4">Boton</button>
        <Curso curso = {curso} dificultad = {dificultad}/>
    </div>
    )
}
export default AppFA;
