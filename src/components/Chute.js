export default function Chute({ palavraChutada, setPalavraChutada, chutar }) {
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
