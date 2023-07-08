
import AppFA from "../AppFA";

const GestorCursos = () => {
    return (
        <div>
             <p className="lead fs-2 text"><strong>Componente tipo clase</strong></p>
             
             <AppFA curso="JavaFront React Developer" dificultad="Facil" />
             <AppFA curso="Full Stack" dificultad="Intermedia" />
             <AppFA curso="UX UI designer" dificultad="Dificil" />
        </div>
    )
}
export default GestorCursos;