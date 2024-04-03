import React, { useState } from "react";
import palavras from "../palavras";
import Teclado from "./Teclado";

export default function Jogo() {
  const [palavraEscolhida, setPalavraEscolhida] = useState(null);
  const [teclasAtivadas, setTeclasAtivadas] = useState(false);
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);

  function escolherPalavra() {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const palavraEscolhida = palavras[randomIndex];
    setPalavraEscolhida(palavraEscolhida);
    setTeclasAtivadas(true);
    setLetrasSelecionadas([]);
  }

  return (
    <>
      <div className="jogo">
        <img src="assets/forca0.png" alt="" />
        <div onClick={escolherPalavra} className="botao">
          Escolher Palavra
        </div>
      </div>
      <div className="palavra-escolhida">
        {palavraEscolhida && (
          <p>
            {palavraEscolhida.split("").map((letra, index) => (
              <span key={index}>
                {letrasSelecionadas.includes(letra) || letra === " " ? letra : " _ "}
              </span>
            ))}
          </p>
        )}
      </div>
      <Teclado
        teclasAtivadas={teclasAtivadas && palavraEscolhida}
        letrasSelecionadas={letrasSelecionadas}
        setLetrasSelecionadas={setLetrasSelecionadas}
      />
    </>
  );
}
