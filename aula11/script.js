//criar uma função
function desenhar() {
    var figura = document.querySelector("#minhaTela");
    //testando se o Canvas existe na página HTML
    if(figura.getContext) {
        //se existir, vamos criar um retângulo
        var retangulo = figura.getContext("2d");
        retangulo.fillStyle = "blue";
        retangulo.fillRect(50,50,300,400); //(x,y,width,height)
    //se existir, vamos criar um objeto linha
        var linha = figura.getContext("2d");
        linha.lineWidth = 5;
        linha.strokeStyle = "yellow";
        linha.moveTo(100,200); //início da linha
        linha.lineTo(170,100); //fim dessa linha
        linha.lineTo(240,300);//acrescenta quantas linhas quiser com lineTo. As linhas vão sendo emendas às anteriores
        linha.stroke(); 
       
        document.body.appendChild(figura);
        var ctx = figura.getContext('2d');
        // Desenha uma curva de Bézier quadrática
        ctx.beginPath();
        ctx.moveTo(50, 150); // Início da curva
        ctx.quadraticCurveTo(230, 200, 350, 150); // Parâmetros da curva
        ctx.stroke(); // Desenha a curva

        //desenhando um círculo
        var circulo1 = figura.getContext("2d"); 
        // Define a cor de preenchimento para amarelo
        circulo1.fillStyle = "yellow";
        circulo1.arc(200, 200, 50, 0, 2 * Math.PI);
        //circulo1.arc(centerX, centerY, radius, startAngle, endAngle, anticlockwise) desenha um círculo completo com centro em (centerX, centerY) e raio radius. Os parâmetros startAngle e endAngle são usados para desenhar arcos de círculos. Para desenhar apenas um setor de um círculo, pode-se definir o startAngle e o endAngle para limitar a parte da curva a ser desenhada. O parâmetro anticlockwise é usado para determinar se o arco será desenhado no sentido horário ou anti-horário. Se for true, o arco será desenhado no sentido anti-horário.
        circulo1.fill(); // preenche o círculo com a cor definida
    }
    function animarCirculo(tempo) {
         circulo1.clearRect(0, 0, figura.width, figura.height);
         retangulo.fillStyle = "blue";
         retangulo.fillRect(50,50,400,200);
         linha.lineWidth = 5;
         linha.strokeStyle = "red";
         linha.moveTo(100,200);
         linha.lineTo(170,100);
         linha.lineTo(240,300);
         linha.stroke();
         circulo1.fillStyle = "yellow";
         circulo1.beginPath();
         circulo1.arc(200, 200, 50 + 25 * Math.sin(tempo/500), 0, 2 * Math.PI);
         circulo1.fill();
         circulo1.lineWidth = 2;
         circulo1.strokeStyle = "aqua"; 
         circulo1.stroke();
         requestAnimationFrame(animarCirculo);
     }   requestAnimationFrame(animarCirculo);
    }
    
        //função será chamada após o carregamento completo da página
		window.onload = desenhar;