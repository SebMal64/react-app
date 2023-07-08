
    
const Biblioteca = (props) => {
    const { libros, onEliminar, onEditar } = props;
    return (
        <div>
            
              
                <div className="row border border-3 p-3 border-info m-2">
                    <h2 className="text-center m-1">Biblioteca</h2>
                    <p className="m-1 lead fs-3 text-primary">En este listado hay : <strong>{libros.length} libros</strong></p>
                    {
                        libros.map(libro => (
                            <div className="rounded border border-2 col-4 p-4" key={libro.id}>
                                <h4 className="mb-3 text-success text-center"><strong>"{libro.nombre}"</strong> </h4>
                                <h5><strong>Autor:</strong> {libro.autor}</h5>
                                <h5><strong>Genero:</strong> {libro.genero}</h5>
                                <h5 className="text-primary mb-2"><strong>Precio:</strong> S/. {libro.precio}</h5>
                          <div className="row p-2">
                                    <button className="rounded-pill btn btn-block btn-sm btn-warning mb-2 mx-auto m-1 fs-5" data-bs-toggle="modal" data-bs-target="#modal" onClick={() => onEditar(libro)}>Editar</button>
                                
                                    <button className="rounded-pill btn btn-sm btn-danger mx-auto fs-5" onClick={() => onEliminar(libro)} >Eliminar</button>
                                </div>
                            </div>
                        ))
                    }</div>
                
            
        </div>
    )
}
export default Biblioteca;