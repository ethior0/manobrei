let position2 = 1850;
let direcao2 = -1;
const skatista2 = document.getElementById("skatista2");
 const pista2 = document.querySelector(".pista2");
const larguraPista2 =  pista2.clientWidth;
const larguraSkatista2 = 50;
 
function andar2() {
 
  position2 += 3.5 * direcao2;
 
 
  if (position2 >= larguraPista2 - larguraSkatista2 || position2 <= 0) {
    direcao2 *= -1;
 
   skatista2.style.transform =  `scaleX(${direcao2})`;
  }
 
 
  skatista2.style.left = position2 + "px";
 
  requestAnimationFrame(andar2);
}
 
andar2();
 