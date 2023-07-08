import { Component } from "react";

class RelojC extends Component {
    state = {
        fecha: new Date()
    }
    actualizarFecha= ()=> {
        this.setState( {
            fecha: new Date()
        })
    }
    componentDidMount=() => {
        this.idReloj=setInterval(() => {
            this.actualizarFecha()
         },1000);
        }
    componentWillUnmount=()=>{
        clearInterval(this.idReloj);
    }
    render () {
        return ( 
            <div>
                <p className="lead fs-2"><strong>Reloj Componente Clase:</strong> {this.state.fecha.toLocaleString()}</p>
            </div>
        )
    }
}
export default RelojC;