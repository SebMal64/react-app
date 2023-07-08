import { Sitios } from "./Sitios";
import TopSite from "./TopSite";
import { NavLink, Outlet } from "react-router-dom";


const TopSitios =() => {




    const activo = {
        width: '300px',
        padding: '6px 10px',
        backgroundColor: 'white',
        fontWeight: 'bold',
        color:'black', 
        textDecoration: 'none'
    }
    const inactivo = {
        padding: '6px',
        fontWeight: '400',
        color:'purple', 
        textDecoration: 'none'
    }

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

    return (
        <div>
             
            <div className="row">
                
                <div className="col col-3 m-1">
                    <div className="border border-2 border-info rounded  shadow p-2 mt-4">
                        <h1 className="lead fs-3 text-primary m-2 mb-1"><strong>Top de los mejores sitios</strong></h1><br/>
                        {
                              cont.map(cont=> (
                                <div key={cont.id}>
                                    <h1 className="lead fs-3 mb-4">
                                    <NavLink to={`/top-sitios/${cont.id}`}
                                        style={({isActive})=>(isActive?activo:inactivo)}>
                                            {cont.nombre}

                                        </NavLink>
                    
                                    </h1>
                                    
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="col col-8.5">
                    <div className="m-3">
                       <Outlet/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopSitios;