    let position2 = 0; 
    let direcao2 = -1; // 1 = direita, -1 = esquerda
    const skatista2 = document.getElementById("skatista2");
     const pista2 = document.querySelector(".pista2");
    const larguraPista2 =  pista.clientWidth;
    const larguraSkatista2 = 50;

    function andar() {

      position2 += 3.5 * direcao2;

   
      if (position2 >= larguraPista2 - larguraSkatista2 || position2 <= 0) {
        direcao2 *= 1;
      
       skatista2.style.transform =  `scaleX(${direcao2})`;
      }


      skatista2.style.left = position2 + "px";
      
      requestAnimationFrame(andar);
    }

    andar();
