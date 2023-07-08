import { Sitios } from "./Sitios";
import Anuncio from "./Anuncio";
import ListaContinente from "./ListaContinente";

const ListaSitios = () => {
    const {sites} = Sitios;

    const america = sites.filter(i=> i.continente=="America");
    const europa = sites.filter(i=> i.continente=="Europa");
    const asia = sites.filter(i=> i.continente=="Asia");
    return (
        <div className="row">
            <div className="col-8 m-3">

                <ListaContinente />

            </div>
            <div style={{width:'410px'}}className="col-3 m-3">
            <Anuncio/>
            </div>
        </div>
    )
}
export default ListaSitios;