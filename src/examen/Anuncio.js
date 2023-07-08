import { useEffect, useState } from "react";
import { Sitios } from "./Sitios";


const Anuncio = () => {
    const { sites } = Sitios;

    //Filtra la valoracion mas alta de contiennte americano 
    let america = sites.filter(i => i.continente === "America");
    let americaMax = Math.max(...america.map(site => site.valoracion));
    let america_MaxValue = america.filter(site => site.valoracion === americaMax);
    console.log(america_MaxValue);

    let europa = sites.filter(i => i.continente === "Europa");
    let europaMax = Math.max(...europa.map(site => site.valoracion));
    let europa_MaxValue = europa.filter(site => site.valoracion === europaMax);
    console.log(europa_MaxValue);

    let asia = sites.filter(i => i.continente === "Asia");
    let asiaMax = Math.max(...asia.map(site => site.valoracion));
    let asia_MaxValue = asia.filter(site => site.valoracion === asiaMax);
    console.log(asia_MaxValue);

    const cont = [].concat(america_MaxValue, europa_MaxValue, asia_MaxValue);

    const [site, setSite] = useState(0);


    const muestraSitios = () => {
        setSite(
            site => site === cont.length - 1 ? 0 : site + 1
        )
    }

    var time;
    useEffect(() => {
        time = setInterval(() => {

            muestraSitios();
        }, 2000);
        return () => clearInterval(time);
    }) 

    //AAqui esta el botno de pause que no funciona XD
    const pausar = () => {
        clearInterval(time);
    }

    const siguiente = () => {
        muestraSitios();
    }





    return (<div >
        <div className="  border border-2 border-primary shadow">
        <h3 className="p-2">Sitios con mejor valoración:</h3>
            <h3 className="p-2">Mejores sitios de <strong>{cont[site].continente}</strong></h3>

            <div className="card border border-2 shadow text-primary lead fs-3">

                <div className="card-header text-center p-3 m-2 bg-danger text-white">
                   <h2><strong> {cont[site].nombre}</strong></h2> 
                </div>
                <div className="card-body">
                    <img src={cont[site].imagen} alt="imagen" className="img-fluid" />

                </div>
                <div className="card-body nowrap">
                    <p className="fs-5 mt-0">{cont[site].descripcion}</p>

                    <div className="card-footer fs-4">
                        <strong>Continente:</strong> {cont[site].continente}<br />
                        <strong>País: </strong>{cont[site].pais}<br />
                        <strong>Valoración: </strong>{cont[site].valoracion}</div>

                    <button style={{width: '155px'}} className="rounded-pill p-1 btn btn-sm btn-warning  btn-block fs-4 m-2" onClick={pausar}>Pausar</button>
                    <button style={{width: '155px'}} className="rounded-pill p-1 btn btn-sm btn-primary btn-block fs-4 m-2" onClick={siguiente}>Siguiente</button>
                </div>
            </div>



        </div>


    </div>)
}
export default Anuncio;