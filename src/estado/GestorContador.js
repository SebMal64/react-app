import ContadorC from "./ContadorC";

const GestorContador = () => {
    return (
        <div className="row">
            <div className="col col-6 border border-2 border-primary me-2">
                <p className="lead fs-3 text-primary">Contador</p>
                <ContadorC indicaM="1" />
            </div>
            <div className="col col-5 border border-2 border-primary me-2">
                <p className="lead fs-3 text-primary">Contador automaático</p>
                <ContadorC indicaM="0"  />
            </div>
        </div>
    )
}
export default GestorContador;