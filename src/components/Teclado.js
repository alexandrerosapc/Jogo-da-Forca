import React from "react";

export default function Teclado({ teclasAtivadas, letrasSelecionadas, setLetrasSelecionadas }) {
  const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

  function escolherLetra(letra) {
    // Verifica se a letra já foi selecionada anteriormente ou se as teclas estão desativadas
    if (letrasSelecionadas.includes(letra) || !teclasAtivadas) {
      return;
    }

    // Adiciona a letra selecionada ao estado de letras selecionadas
    setLetrasSelecionadas([...letrasSelecionadas, letra]);
  }

  return (
    <div className="teclado">
      {alfabeto.map((letra) => (
        <div
          onClick={() => escolherLetra(letra)}
          key={letra}
          className={`tecla ${!teclasAtivadas || letrasSelecionadas.includes(letra) ? "desativado" : ""}`}
        >
          {letra.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
