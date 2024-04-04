export default function Chute({ palavraChutada, setPalavraChutada, palavraEscolhida, setJogoFinalizado, setLetrasSelecionadas, setErros, jogoFinalizado }) {
  function chutar() {
    if (!jogoFinalizado) {
      if (palavraChutada === palavraEscolhida) {
        setJogoFinalizado(true);
        setLetrasSelecionadas(palavraEscolhida.split(""));
      } else {
        setJogoFinalizado(true);
        setErros(6)
      }
      setPalavraChutada("");
    }
    setPalavraChutada("");
  }
  return (
    <div className="chute">
      <p>Já sei a palavra!</p>
      <input
        type="text"
        onChange={(event) => setPalavraChutada(event.target.value)}
        value={palavraChutada}
      />
      <div
        className="botao-chute"
        onClick={chutar}
      >Chutar</div>
    </div>
  );
}

