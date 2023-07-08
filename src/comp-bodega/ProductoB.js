import { useParams } from "react-router-dom";
import { data } from "../data";

const ProductoB =()=> {
    const {id} =useParams();
    const {productos} = data;
    const producto = productos.find(prod=>prod.id===Number(id));


    const carta = {
        backgroundColor: 'whitesmoke',
        borderRadius: '10px',
    }
    const head = {
        backgroundColor: 'blue',
        fontWeight: 'bold',
        color: 'white',
    }
    const imag = {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid gray',
    }
    return (
        <div>
            <p  className="laed fs-3 text-primary m-3">Detalle del producto</p>
            <div style={carta}className="card border border-2 shadow text-primary lead fs-4">
                <div style={head} className="card-header">
                    Producto {producto.nombre}
                </div>
                <div style={imag} className="card-body">
                    <img src={producto.imagen} alt="imagen" className="img-fluid"/>
                    
                </div>
                <div className="card-body">{producto.descripcion}</div>
                <div className="card-footer">
                    S/. {producto.precio}
                </div>


            </div>

        </div>
    )
}
export default ProductoB;