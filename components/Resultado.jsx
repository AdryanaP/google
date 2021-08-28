export default function Resultado(props) {
    return (
        <div className="resultado">
            <a href={props.link} className="link">
                <div className="url">{props.url}</div>
                <h3 className="titulo">{props.titulo}</h3>
            </a>
            <p className="descricao">{props.descricao}</p>
        </div>
    );
}
