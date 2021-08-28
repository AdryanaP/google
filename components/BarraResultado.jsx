export default function BarraResultado(props) {
    return (
        <header>
            <img src="https://bit.ly/3yhIHyx" alt="Logo google" id="logo" /> 
            <div className="barra-pesquisa">
                <p>{props.pesquisa}</p>
            </div>
        </header>
    )
}