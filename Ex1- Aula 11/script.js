function desenhar(){

    var figura = document.querySelector("#minhaTela");
			//testando se o Canvas existe na página HTML
			if(figura.getContext) {

                var linha = figura.getContext("2d");
				linha.lineWidth = 5;
				linha.strokeStyle = "black";
				linha.moveTo(100,200); //início da linha
				linha.lineTo(800,200); 
                // desce lateral direita               
				linha.lineTo(800,400);
                // vira esquera, primeira roda
                linha.lineTo(650,400);
                linha.lineTo(800,400);
                linha.moveTo(550,400);
                linha.lineTo(250,400);
                linha.moveTo(150,400);
                linha.lineTo(100,400);
                linha.lineTo(100,200);
                linha.stroke(); 


                document.body.appendChild(figura);
                    let ctx = figura.getContext('2d');
// Desenha uma curva de Bézier quadrática
                    ctx.beginPath();
                    ctx.moveTo(550, 400 ); // Início da curva
                    ctx.quadraticCurveTo(600, 300, 650, 400); // Parâmetros da curva: (X ponto de controle,  Y ponto de controle, X Final da curva, Y Final da curva)
                    ctx.stroke(); // Desenha a curva



                    document.body.appendChild(figura);
                    let frente = figura.getContext('2d');
// Desenha uma curva de Bézier quadrática
                    frente.beginPath();
                    frente.moveTo(150, 400 ); // Início da curva
                    frente.quadraticCurveTo(200, 300, 250, 400); // Parâmetros da curva: (X ponto de controle,  Y ponto de controle, X Final da curva, Y Final da curva)
                    frente.stroke(); // Desenha a curva
				
					} 



                    function animarCirculo(tempo) {
                        var  circulo1 = figura.getContext("2d");          
          circulo1.fillStyle = "blue";
          circulo1.beginPath();
          circulo1.arc(200, 420, 25 + 25 * Math.sin(tempo/500), 0, 2 * Math.PI);
          circulo1.fill();
          circulo1.lineWidth = 2;
          circulo1.strokeStyle = "green"; 
          circulo1.stroke();
          requestAnimationFrame(animarCirculo);
        }        requestAnimationFrame(animarCirculo);


        function animarCirculo2(tempo) {
                        var  circulo1 = figura.getContext("2d");          
          circulo1.fillStyle = "blue";
          circulo1.beginPath();
          circulo1.arc(600, 420, 25 + 25 * Math.sin(tempo/500), 0, 2 * Math.PI);
          circulo1.fill();
          circulo1.lineWidth = 2;
          circulo1.strokeStyle = "green"; 
          circulo1.stroke();
          requestAnimationFrame(animarCirculo2);
        }        requestAnimationFrame(animarCirculo2);
    
    


                    

}
window.onload = desenhar;


