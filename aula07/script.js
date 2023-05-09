worker1 = new Worker('worker1.js');
function calcularQuadrado(){
    worker1.postMessage(Number(document.getElementById('number1').value));
}
worker1.addEventListener('message' , function(event){
    const resultado = event.data;
    document.getElementById('resultado1').textContent='o quadrado do numero digitado é : ' + resultado;
})