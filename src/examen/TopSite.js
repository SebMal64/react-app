import { Sitios } from "./Sitios";
import { useParams } from "react-router-dom";

const TopSite = () => {

    const {id} =useParams();
    const {sites} = Sitios;
    
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
  const site = cont.find(prod=>prod.id===Number(id));

    
   
    return (
        <div className="m-1">
        <p  className="lead fs-3 text-secondary m-3"><strong>Detalles de los mejores sitios</strong></p>
        <div>
        <div className="card m-2 border border-secondary border-2 shadow text-primary lead fs-4">
        <div>
                            <div className="card-header bg-success text-white text-center">
                               <h1><strong>{site.nombre}</strong></h1> 
                            </div>
                            <div className="row p-3 m-2">
                            <div className=" float-left col-6 align-self-center">
                            
                                <img src={site.imagen} alt="imagen" 
                                className="img-fluid border border-1 border-success rounded mx-auto" />
</div>
                           
                            <div className="card-body float-right col col-6 align-self-center">
                          
                            <p className="fs-4 ">{site.descripcion}</p>

                                <div>
                                    <strong>Continente:</strong> {site.continente}<br />
                                    <strong>Pais:</strong> {site.pais}<br />
                                    <strong>Valoración:</strong> {site.valoracion}
                                    </div>
                            </div>
                        </div></div>

</div>
        </div>

    </div>
        )
    
}

export default TopSite;