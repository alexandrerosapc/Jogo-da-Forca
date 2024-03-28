export default function Teclado() {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P","Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"]
  return (
    <div class="teclado">
        {alfabeto.map((l)=> (
           <div class="tecla">{l}</div> 
        ))}
    </div>
  );
}
