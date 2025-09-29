    let position = 0; 
    let direcao = 1; // 1 = direita, -1 = esquerda
    const skatista = document.getElementById("skatista");
     const pista = document.querySelector(".pista");
    const larguraPista =  pista.clientWidth;
    const larguraSkatista = 50;

    function andar() {

      position += 3.5 * direcao;

   
      if (position >= larguraPista - larguraSkatista || position <= 0) {
        direcao *= -1;
      
       skatista.style.transform =  `scaleX(${direcao})`;
      }


      skatista.style.left = position + "px";
      
      requestAnimationFrame(andar);
    }

    andar();
