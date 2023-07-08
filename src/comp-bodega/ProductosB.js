import { NavLink, Outlet } from "react-router-dom";
import  {data} from "../data";

const ProductosB =() => {
    const {productos} = data;

    const titulo = {
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px',
    }

    const activo = {
        border: '1px solid gray',
        padding: '6px 10px',
        backgroundColor: 'white',
        fontWeight: 'bold',
        color:'green', 
        textDecoration: 'none'
    }
    const inactivo = {
        padding: '6px',
        fontWeight: '200',
        color:'blue', 
        textDecoration: 'none'
    }

    
    return (
        <div>
            <h1 className="lead fs-2 text-primary"><strong>Lista de Productos {productos.length}</strong></h1>
            <h2 style={titulo}>Direccion de la bodega</h2>
            <h2>Dueño de la bodega: Cmamut</h2>
            <div className="row">
                <div className="col col-4">
                    <div className="border border-2 border-primary shadow p-2">
                        {
                            productos.map(prod => (
                                <div key={prod.id}>
                                    <p className="lead fs-4 text-primary">

                                        <NavLink to={`/productos-bodega/${prod.id}`}
                                        style={({isActive})=>(isActive?activo:inactivo)}>
                                            {prod.nombre}

                                        </NavLink>
                                    </p>
                                    
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="col col-5">
                    <div className="border border-2 border-primary shawod">
                        <Outlet/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductosB;