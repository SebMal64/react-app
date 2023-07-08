import { useEffect, useState } from "react";

const RelojF=()=>{

    const [fecha,setFecha] = useState(new Date());
    const actualizarFecha =()=> {
        setFecha(
            fecha=> new Date()
        )
    }
    useEffect(()=> {
        const x=setInterval(()=> {
            actualizarFecha();
        },1000);

        return () => clearInterval(x);
    })
    return (
        <div className="lead fs-2">
            <p>Reloj Componente Funcion (Hooks): {fecha.toLocaleString()}</p>
        </div>
    )
}
export default RelojF