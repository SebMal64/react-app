import Empleado from "./Empleado";

const Empleados = (props) => {



    const { empleados } = props;

    let empleadosCalifMayor7 = empleados.filter(emp => emp.calificacion > 7);
    let empleadosCalificionBaja = empleados.filter(emp => emp.calificacion <= 5);
    let maximacalificacion = Math.max(...empleados.map(emp => emp.calificacion));
    let empleadosMaxCalificacion = empleados.filter(emp => emp.calificacion === maximacalificacion);

    return (

        <div>

            <p className="fs-2 lead text-primary">Total Empleados Calificacion Mayor a 7 =  {empleadosCalifMayor7.length}</p>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre Apellido</th>
                        <th>Cargo</th>
                        <th>DNI</th>
                        <th>Calificacion</th>
                        <th>Tiempo de Servicio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleadosCalifMayor7.map((emp, index) => (

                            <tr key={index}>
                                <td>{emp.nombre}</td>
                                <td>{emp.cargo}</td>
                                <td>{emp.dni}</td>
                                <td>{emp.calificacion}</td>
                                <td>{emp.tiempoServicio}</td>
                            </tr>

                        ))

                    }

                </tbody>

            </table>
            <hr />
            <p className="fs-2 lead text-primary">Empleados Calificacion Baja =  {empleadosCalificionBaja.length}</p>
            <div className="row">
                {
                    empleadosCalificionBaja.map(emp => (
                        <div className="col col-4" key={emp.id}>
                            <Empleado emp={emp} indicador="1" />
                        </div>
                    ))
                }
            </div>
            <p className="fs-2 lead text-primary">Empleados con Maxima calificacion =  {empleadosMaxCalificacion.length}</p>
            <div className="row">
                {
                    empleadosMaxCalificacion.map(emp => (
                        <div className="col col-4" key={emp.id}>
                            <Empleado emp={emp} indicador="2" />
                        </div>
                    ))
                }
            </div>
        </div>

    )

}



export default Empleados;