import { Component } from "react";

//Curso se extiende como una clase
class Curso extends Component {
    render() {
        return (
            <div className="border-2">
                
        <p className="lead fs-2 text-info"><strong>Curso: </strong>{this.props.curso}</p>
        <p className="lead fs-2 text-warning"><strong>Dificultad: </strong>{this.props.dificultad}</p>
            </div>
        )
    }
}
export default Curso