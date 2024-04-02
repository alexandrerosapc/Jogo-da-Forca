export default function Teclado() {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P","Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"]
  return (
    <div className="teclado">
        {alfabeto.map((l)=> (
           <div key={l} className="tecla">{l}</div> 
        ))}
    </div>
  );
}
