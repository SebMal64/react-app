import ListaSitios from "./ListaSitios";
import { Sitios } from "./Sitios";


const ListaContinente = (site) => {

    const { sites } = Sitios;

    const america = sites.filter(i => i.continente == "America");
    const europa = sites.filter(i => i.continente == "Europa");
    const asia = sites.filter(i => i.continente == "Asia");


    return (

        <div className=" row border border-2 border-primary shadow">
    
            <h1 className="p-4">Sitios turísticos de: <strong>America</strong></h1>
            {

                america.map(site => (
                    
                    <div style={{ width: '319px' }} className="card col-4 border border-2 shadow text-primary lead fs-4" key={america.id}>
                        <div>
                            <div className="card-header text-success text-center">
                                <strong>{site.nombre}</strong>
                            </div>
                            <div className="card-body">
                                <img src={site.imagen} alt="imagen" className="img-fluid" />

                            </div>
                            <div className="card-body nowrap">
                                <p className="fs-5 mt-0 text-secondary ">{site.descripcion}</p>

                                <div className="card-footer fs-4">
                        <strong>Continente:</strong> {site.continente}<br />
                        <strong>País: </strong>{site.pais}<br />
                        <strong>Valoración: </strong>{site.valoracion}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <h1 className="p-4">Sitios turísticos de: <strong>Europa</strong></h1>
            {

                europa.map(site => (
                    <div className="card col-4 border border-2 shadow text-primary lead fs-4" key={europa.id}>
                        <div>
                            <div className="card-header text-success text-center">
                                <strong>{site.nombre}</strong>
                            </div>
                            <div className="card-body">
                                <img src={site.imagen} alt="imagen" className="img-fluid" />

                            </div>
                            <div className="card-body nowrap">
                                <p className="fs-5 mt-0">{site.descripcion}</p>

                                <div className="card-footer">
                                    Continente: {site.continente}<br />
                                    Pais: {site.pais}<br />
                                    Valoración: {site.valoracion}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <h1 className="p-4">Sitios turísticos de: <strong>Asia</strong></h1>
            {

                asia.map(site => (
                    <div className="card col-4 border border-2 shadow text-primary lead fs-4" key={asia.id}>
                        <div>
                            <div className="card-header text-success text-center">
                                <strong>{site.nombre}</strong>
                            </div>
                            <div className="card-body">
                                <img src={site.imagen} alt="imagen" className="img-fluid" />

                            </div>
                            <div className="card-body nowrap">
                                <p className="fs-5 mt-0">{site.descripcion}</p>

                                <div className="card-footer">
                                    Continente: {site.continente}<br />
                                    Pais: {site.pais}<br />
                                    Valoración: {site.valoracion}</div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default ListaContinente;