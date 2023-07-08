import { Component } from "react"
class NumPrimo extends Component {

    state = {
        contador: 2,
        num: 0
    }

    Primes = (num) => {
        let primes = [];
        for (let i = 2; i <= 10000; i++) {
            if (primes.every((prime) => i % prime !== 0))
                primes.push(i);
        }
        return (primes[num]);
    }
    incrementar = () => {
        this.setState({

            contador:this.state.contador = this.Primes(this.state.num+1),
            num: this.state.num + 1,


        })
    }

    decrementar = () => {
        this.setState({
            contador: this.state.contador > 2 ? this.state.contador = this.Primes(this.state.num - 1):this.state.contador=this.Primes(this.state.num=0),
            num: this.state.num===0?this.state.num=0:this.state.num - 1,
        })
    }

    render() {
        return (
            <div className="my-auto p-4">
                <div className="border-success border border-4 card mx-auto my-auto mb-5 m-3 col-6 p-4 bg-dark">
                    <h1 className="lead text-white m-2 fs-1">Número Primo: <strong>{this.state.contador}</strong></h1>


                    <button className="rounded border-white btn btn-sm btn-primary fs-4 m-2 p-2" onClick={this.incrementar}>Incrementar</button>
                    <button className="rounded border-white btn btn-sm btn-danger fs-4 m-2 p-2" onClick={this.decrementar}>Decrementar</button>


                </div></div>
        )
    }
}
export default NumPrimo;
