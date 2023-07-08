import { useEffect, useState } from "react";

const ContadorF = () => {

    const [contador, setContador] = useState(5);
    const [contadorAuto, setContadorAuto] = useState(10);

    const incrementar = () => {
        setContador(
            contador => contador + 1
        )
    }
    const incrementarAuto =() => {
        setContadorAuto(
            contadorAuto=>contadorAuto+1
        )
    }
    const decrementar = () => {
        setContador(
            contador => contador > 0 ? contador - 1 : 0
        )
    }


    
    useEffect(()=>{
        const id=setInterval(() => {
          setContadorAuto(
            contadorAuto=>contadorAuto+1
          )

        }, 1000);

        return ()=>clearInterval(id);
        
        
    },contadorAuto)

    return (
        <div>
            <div className="row">
                <div className="col col-5 border border-2 border-primary me-2 p-2">
                    <p className="lead fs-2">Contador Funcional (Estado Hooks) {contador}</p>
                    <button className="btn btn-sm btn-warning me-2" onClick={incrementar}>Incrementar</button>
                    <button className="btn btn-sm btn-danger" onClick={decrementar}>decrementar</button>
                </div>
                <div className="col col-6 border border-2 border-primary">
                    <p className="lead fs-2">Contador Funcional (Estado Hooks) {contadorAuto}</p>
                </div>
            </div>
        </div>
    )
}
export default ContadorF;