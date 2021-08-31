import { useState } from "react";
import styles from "./Acordeon.module.css";

export default function Acordeon(props) {
  const [estadoAcordeon, mudarEstadoAcordeon] = useState(true);

  const cliqueBotao = () => {
    mudarEstadoAcordeon((valor) => !valor);
  };

  return (
    <div className={styles.acordeon}>
      <button className={styles.btnExpandir} onClick={cliqueBotao}>
        {props.pergunta}
        <span className={estadoAcordeon ? styles.seta : styles.seta2}></span>
      </button>
      <div className={styles.dentroAcordeon} aria-expanded={!estadoAcordeon}>
        <p className={styles.resposta}>{props.resposta}</p>
        <a href={props.link} className="link">
          <div className="url">{props.url}</div>
          <h3 className="titulo">{props.titulo}</h3>
        </a>
        <p className={styles.pesquisar}>
          Pesquisar: <a href={props.link2}>{props.pergunta}</a>
        </p>
      </div>
    </div>
  );
}
