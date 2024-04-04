export default function Jogo({ imagensForca, erros, escolherPalavra, jogoFinalizado, palavraEscolhida, letrasSelecionadas, usuarioGanhou, usuarioPerdeu  }) {
 
  return (
    <>
      <div className="jogo">
        <img src={imagensForca[erros]} alt="" />
        <div onClick={escolherPalavra} className="botao">
          Escolher Palavra
        </div>
      </div>
      <div className="palavra-escolhida">
        {palavraEscolhida && (
          <p className={`${(jogoFinalizado && usuarioGanhou()) ? "acertou" : ""} ${(jogoFinalizado && usuarioPerdeu()) ? "errou" : ""}`}>
            {jogoFinalizado ? (
              <span>{palavraEscolhida}</span>
            ) : (
              palavraEscolhida.split("").map((letra, index) => (
                <span key={index}>
                  {letrasSelecionadas.includes(letra) || letra === " " ? letra : " _ "}
                </span>
              ))
            )}
          </p>

        )}
      </div>
    </>
  );
}
