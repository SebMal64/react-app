import { Link, Route, Routes } from "react-router-dom";
import GestorContador from "../estado/GestorContador";
import RelojC from "../estado/RelojC";
import RelojF from "../estado/RelojF";
import ContadorF from "../estado/ContadorF";
import Planeta from "../estado/Planeta";
import PlanetaF from "../estado/PlantetaF";
import Empleados from "./Empleados";
import {data} from "../data";
import GestorCursos from "./GestorCursos";
import ProductosB from "../comp-bodega/ProductosB";
import ProductoB from "../comp-bodega/ProductoB";
import Home from "./Home";
import GestorEmpresa from "../comp-axios/GestorEmpresa";
import ContadorUI from "../comp-redux/ContadorUI";
import NumPrimo from "../examen/NumPrimo";
import ListaSitios from "../examen/ListaSitios";
import TopSitios from "../examen/TopSitios";
import TopSite from "../examen/TopSite";
import GestorLibros from "../examen/Libreria.js/GestorLibros";


const Navegador = () => {
    const {empleados}=data;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/reloj-funcional">Reloj F Hooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/reloj-clase">Reloj Clase</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/gestor-contador-clase">Contador ClaseE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contador-funcional-hooks">Contador Func Hooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/planeta-clase">Planeta ClaseE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/planeta-funcional">Planeta Hooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/empleados">Empleados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/gestor-cursos">Cursos Props</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contador-redux">Contador redux</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/gestor-libros">Gestor libros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/lista-sitios">Sitios Turisticos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/top-sitios">Top Sitios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/num-primo">Numeros primos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mas acciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/productos-bodega">Bodega</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/gestor-empresa-axios">Empresa Axios</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* rutas */}
            <Routes>
                <Route path="reloj-funcional" element={<RelojF/>}/>
                <Route path="reloj-clase" element={<RelojC/>}/>
                <Route path="gestor-contador-clase" element={<GestorContador/>}/>
                <Route path="contador-funcional-hooks" element={<ContadorF/>}/>
                <Route path="planeta-clase" element={<Planeta/>}/>
                <Route path="planeta-funcional" element={<PlanetaF/>}/>
                <Route path="empleados" element={<Empleados empleados={empleados}/>}/>
                <Route path="gestor-cursos" element={<GestorCursos/>}/>

                <Route path="gestor-libros" element={<GestorLibros/>}/>
                <Route path="lista-sitios" element={<ListaSitios/>}/>
                <Route path="top-sitios" element = {<TopSitios/>}>
                    <Route path=":id" element={<TopSite/>}/>
                </Route>
                <Route path="num-primo" element={<NumPrimo/>}/>
                <Route path="productos-bodega" element={<ProductosB/>}>
                    <Route path=":id" element={<ProductoB/>}/>
                </Route>

                <Route path="gestor-empresa-axios" element={<GestorEmpresa/>}/>
                <Route path='contador-redux' element={<ContadorUI/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<p className="lead fs-2 text-info fw-bold text-center">Pagina no encontrada</p>}/>
            </Routes>

        </div>
    )
}
export default Navegador;