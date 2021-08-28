import { useState } from "react";
import styles from "./Acordeon.module.css"

export default function Acordeon(props) {
    const [estadoAcordeon, mudarEstadoAcordeon] = useState(false)

    const cliqueBotao = () => {
        mudarEstadoAcordeon(valor => !valor)
    }

    return (
        <div className="acordeon">
            <button className="btn-expandir" onClick={cliqueBotao}>{props.pergunta}</button>
            <div className={styles.dentroAcordeon} aria-expanded={!estadoAcordeon}>
                <p>{props.resposta}</p>
                <a href={props.link} className="link">S
                    <div className="url">{props.url}</div>
                    <h3 className="titulo">{props.titulo}</h3>
                </a>
                <p>
                    Pesquisar: <a href={props.link2}>{props.pergunta}</a>
                </p>
            </div>
        </div>
    );
}
