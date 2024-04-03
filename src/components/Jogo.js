import React, { useState } from "react";
import palavras from "../palavras";
import Teclado from "./Teclado";

export default function Jogo() {
  const [palavraEscolhida, setPalavraEscolhida] = useState(null);
  const [teclasAtivadas, setTeclasAtivadas] = useState(false);
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const imagensForca = [
    "assets/forca0.png",
    "assets/forca1.png",
    "assets/forca2.png",
    "assets/forca3.png",
    "assets/forca4.png",
    "assets/forca5.png",
    "assets/forca6.png"
  ];

  function escolherPalavra() {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const palavraEscolhida = palavras[randomIndex];
    setPalavraEscolhida(palavraEscolhida);
    setTeclasAtivadas(true);
    setLetrasSelecionadas([]);
    setErros(0); // Reset da contagem de erros ao escolher uma nova palavra
    setJogoFinalizado(false); // Reset do jogo finalizado
  }

  // Verifica se uma letra está presente na palavra escolhida
  function letraPresente(letra) {
    return palavraEscolhida.includes(letra);
  }

  // Adiciona a letra selecionada ao estado de letras selecionadas
  function escolherLetras(letra) {
    if (!letrasSelecionadas.includes(letra) && !fimDeJogo()) {
      setLetrasSelecionadas([...letrasSelecionadas, letra]);

      if (!letraPresente(letra)) {
        // Incrementa a contagem de erros se a letra não estiver presente na palavra
        setErros(erros + 1);
      }

      // Verifica se o jogo terminou após a seleção da letra
      if (erros + 1 >= 6 || usuarioGanhou()) {
        setJogoFinalizado(true);
      }
    }
  }

  function usuarioGanhou() {
    return palavraEscolhida.split("").every(letra => letrasSelecionadas.includes(letra))
  }

  function usuarioPerdeu() {
    return erros >= 6;
  }

  function fimDeJogo() {
    return jogoFinalizado || usuarioGanhou() || usuarioPerdeu();
  }

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
          <p className={`${usuarioGanhou() ? "acertou" : ""} ${usuarioPerdeu() ? "errou" : ""}`}>
            {usuarioPerdeu() ? (
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
      <Teclado
        teclasAtivadas={teclasAtivadas && palavraEscolhida}
        letrasSelecionadas={letrasSelecionadas}
        setLetrasSelecionadas={setLetrasSelecionadas}
        escolherLetras={escolherLetras}
        fimDeJogo={fimDeJogo}
      />
    </>
  );
}
