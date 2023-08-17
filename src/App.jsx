
import "./style.css"
import nameLogo from "./img/nameLogo.png"
import aceito from "./img/aceito.png"

function App() {

  return (
    <>
      <div className="Main">
        <div className="Card-Main">
          <div className="border-Main">

            <img className="Logo" src={nameLogo} alt="Logo" />

            <br />
            <h2>O Guia Essencial para o Primeiro Emprego</h2>
            <br />
            <p>
              Ferramenta indispensável para jovens que ingressam
              no mercado de trabalho, oferecendo orientação prática e confiança desde o início. Com guias passo a
              passo e dicas abrangentes de etiqueta profissional, o aplicativo ajuda a evitar erros comuns,
              promovendo eficiência e construção de habilidades essenciais. Abrangendo desde entrevistas até
              a resolução de conflitos, sua interface intuitiva e depoimentos inspiradores tornam a jornada de
              transição mais suave, tornando-se um aliado valioso para o sucesso no primeiro emprego.
            </p>
            <br />
            <h2> Sest Senat App <button> <a href="http ://www.sestsenat.org.br" target="blank"><strong>Sest Senat App</strong> </a> </button></h2>
          </div>
          <img className="caeito" src={aceito} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
