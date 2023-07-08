import { Component } from "react";
//Esta es una clase
class Empleado extends Component {

    indicarEstilo =()=> {
        return this.props.indicador==="1"?"bg-danger":"bg-primary";
    }
    render() {
        return (
            <div className="card border border-2 m-2">
                <div className={`card-header text-white ${this.indicarEstilo()}`}>
                    {this.props.emp.nombre} 
                </div>
                <div className="card-body">
                    <strong>Calificacion : </strong>{this.props.emp.calificacion}
                </div>
                <div className="card-footer">
                    <b>Tiempo Servicio:</b> {this.props.emp.tiempoServicio}
                </div>
            </div>

        )
    }
}
export default Empleado