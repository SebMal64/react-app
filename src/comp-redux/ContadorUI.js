import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { decrementar, incrementar } from "./features/contador";
const ContadorUI =() => {

    const increAuto = () => {
        dispatch(incrementar());
    }
    useEffect(()=> {
        let x = setInterval(() => {
            increAuto();
        }, 500);

        return () => clearInterval(x)
    })

    const contador = useSelector(state => state.contador);
    const dispatch = useDispatch(); 
    return (

        <div>
            <div className="row">
                <div className="col col-4 m-auto">
                    <div className="border border-2 text-primary p-2 m-2">
                        <p className="lead fs-3 text-primary">Contador usando redux</p>
                        <p className="lead fs-3">Contador: {contador.value}</p>
                        <button className="btn btn-sm btn-primary" onClick={()=> dispatch(incrementar())}>Incrementar</button>
                        <button className="btn btn-sm btn-danger m-2" onClick={()=> dispatch(decrementar())}>Decrementar</button>
                    </div>
                </div>
                
            </div>
        </div>

     )
}
export default ContadorUI;