import { Component } from "react"
class ContadorC extends Component {
    state = {
        contador: 0
    }
    incrementar = () => {
        this.setState({
            contador: this.state.contador === 20 ? 0 : this.state.contador + 1
        })
        //incremetador opiconal hasta infinito, solo se debe invocar
    }
    incrementarCmat = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    decrementar = () => {
        this.setState({
            contador: this.state.contador > 0 ? this.state.contador - 1 : 0
        })
    }
    //Este componente es el automatico,
    //La funcion incrementar se ejecutara en el siguiente intervalo
    componentDidMount=() => {
        if (this.props.indicaM==="0") {
            this.ident=setInterval(()=> {
                this.incrementar();
            },300);
        }}

    componentWillUnmount=()=> {
        clearInterval(this.ident);
    }


    render() {
        return (
            <div>
            
                <p className="lead fs-2 text-info">{this.state.contador}</p> 
                
                {
                    this.props.indicaM ==="1" && 
                    <>
                <button className="btn btn-sm btn-primary m-2" onClick={this.incrementar}>Incrementar</button>
                <button className="btn btn-sm btn-danger m-2" onClick={this.decrementar}>Decrementar</button>
</>

    }
            </div>
        )
    }
}
export default ContadorC;