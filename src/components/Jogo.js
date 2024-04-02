import palavras from "../palavras";
import { useState } from "react";
export default function Jogo() {
  const [palavraEscolhida, setPalavraEscolhida] = useState(null);

  function escolherPalavra() {
    const randomIndex= Math.floor(Math.random() * palavras.length);
    const palavraEscolhida = palavras[randomIndex]
    setPalavraEscolhida(palavraEscolhida);
  }

  return (
    <>
      <div className="jogo">
        <img src="assets/forca0.png" alt="" />
        <div onClick={escolherPalavra} className="botao">
          Escolher Palavra
        </div>
      </div>
      <div className="palavra-escolhida">{palavraEscolhida && <p>{palavraEscolhida}</p>}</div>
    </>
  );
}
