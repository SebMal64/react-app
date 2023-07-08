import { useEffect, useState } from "react";
import { data } from "../data";
//ESte el planeta hooks 

const PlanetaF = () => {
    const {lunas} = data;
    const [luna,setLuna] = useState("Ganimedes");
    const [indiceL, setIndiceL] = useState(0);

    const cambiaLuna =() => {
        setLuna(
            luna => luna==="Ganimedes"? "galileo": "ganimedes"
        )
    }

    // const cambiaLunaV2 = () => {
    //     setLuna (
    //         luna => fnEvaluaLuna(luna)
    //     )
    // }
    const cambiaLunaV3 = () => {
        setLuna(
            luna => luna==="Ganimedes"?"Galileo":fnEvaluaLunaV3(luna)
        )
    }

    const fnEvaluaLunaV3 = (luna) => {
        return luna ==="Galileo"?"Adriastea":"Ganimedes";
    }
//    const fnEvaluaLuna = (moon) => {
//     switch (moon){
//         case "Ganimedes":
//             {return "Galileo"
//             break;}
//         case "Galileo":
//             {return "Calisto"
//             break;}
//         case "Calisto":
//             {return "Ganimedes"
//             break;}  
//         default:{
//             break;}    
           
//        }
//     }
    const muestraLunas = () => {
        setIndiceL(
            indiceL => indiceL ===lunas.length-1?0:indiceL+1
        )
    }

    useEffect(()=>{
        const id =setInterval(() => {
            cambiaLunaV3();
            muestraLunas();
        },1000);
        return () => clearInterval(id);

})
    return (
        <div className="row">
            <div className="col col-5 border border-2 border-primary p-2 me-2">
                <p className="lead fs-3 text-primary">Luna de 2 jupier (2 lunas)</p>
                <p className="lead fs-2 text-primary">Luna: {luna}</p>
            </div>
            <div className="col col-6 border border-2 border-primary p-2">
                <p className="lead fs-3 text-primary">Luna de jupier ({lunas.length} lunas) Hooks</p>
                <p className="lead fs-2 text-primary">Luna: {lunas[indiceL].nombre}</p>
                <p className="lead fs-2 text-primary">Superficie {lunas[indiceL].superficie} km</p>
                <img alt="imagen" src={lunas[indiceL].imagen} className="img-fluid"/>

            </div>
        </div>
    )
}

export default PlanetaF;