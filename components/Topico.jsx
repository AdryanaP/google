export default function Topico(props) {
    return (
        <div className="propriedades">
            <h3 className="titulo">{props.titulo}</h3>
            <p className="descricao">{props.descricao}</p>
        </div>
    )
}