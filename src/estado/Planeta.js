import { Component } from "react";
import { data } from "../data";

const { lunas } = data;
class Planeta extends Component {
//Describe el estado de la clase
    state = {
        luna: 'Ganimedes',
        indiceL: 4,
    }
//Aquí se define una propiedad sin parametro, que usa operador ternario
//Modificarpa los valores del estado de la clase.
    muestraLunas = () => {
        this.setState({
            indiceL: this.state.indiceL === lunas.length - 1 ? 0 : this.state.indiceL + 1
        })
    
    }


    cambiaLuna = () => {
        this.setState({
            luna: this.state.luna === 'Ganimedes' ? 'Galileo' : 'Ganimedes'
        })
    }

    componentDidMount = () => {
        this.id = setInterval(() => {
            this.cambiaLuna();
            this.muestraLunas();
        }, 1500);
    }


    componentWillUnmount = () => {
        clearInterval(this.id);
    }

    
    render() {
        return (
            <div className="row">
                <div className="col col-6">
                    <div className="border border-2 border-primary p-2">
                        <p className="lead fs-2">Componente Clase con estado</p>
                        <p className="lead fs-3">Luna: {this.state.luna}</p>
                        <button className="btn btn-sm btn-primary m-2" onClick={this.cambiaLuna}>Cambiar Luna</button>
                    </div>
                </div>
                <div className="col col-md-6  col-sm-3 col-xs-12">
                    <div className="border border-2 border-primary p-2">
                    <p className="lead fs-2">Componente Clase con estado Total Lunas {lunas.length} </p>
                    <p className="lead fs-2 text-primary">Luna: {lunas[this.state.indiceL].nombre}</p>
                        <p className="lead fs-2 text-primary">Superficie: {lunas[this.state.indiceL].superficie} km</p>
                        <img alt="imagen" src={lunas[this.state.indiceL].imagen} className="img-fluid"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Planeta;