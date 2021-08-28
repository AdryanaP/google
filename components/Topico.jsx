export default function Topico(props) {
    return (
        <div className="propriedades">
            <h3 className="titulo">{props.propriedade}</h3>
            <p className="descricao">{props.descricaoTopico}</p>
        </div>
    )
}