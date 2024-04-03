import React from "react";

export default function Teclado({ teclasAtivadas, letrasSelecionadas, setLetrasSelecionadas, escolherLetras, fimDeJogo }) {
  const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

  function escolherLetra(letra) {
    // Verifica se a letra já foi selecionada anteriormente ou se as teclas estão desativadas
    if (letrasSelecionadas.includes(letra) || !teclasAtivadas || fimDeJogo()) {
      return;
    }

    // Adiciona a letra selecionada ao estado de letras selecionadas
    setLetrasSelecionadas([...letrasSelecionadas, letra]);
    escolherLetras(letra);
  }

  return (
    <div className="teclado">
      {alfabeto.map((letra) => (
        <div
          key={letra}
          className={`tecla ${!teclasAtivadas || letrasSelecionadas.includes(letra) || fimDeJogo() ? "desativado" : ""}`}
          onClick={() => escolherLetra(letra)}
        >
          {letra.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
