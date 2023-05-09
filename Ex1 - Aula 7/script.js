worker1 = new Worker('worker1.js');

function calcularQuadrado(){
    worker1.postMessage(Number(document.getElementById('number1').value));
}
worker1.addEventListener('message', function(event){
    const resultado = event.data;

    document.getElementById('resultado1').textContent=' o quadrado do numero digitado é :' +resultado;
})

worker2 = new Worker('worker2.js');
function calcularFatorial(){
    worker2.postMessage(Number(document.getElementById('number2').value));
}
worker2.addEventListener('message', function(event){
    const resultado = event.data;

    document.getElementById('resultado2').textContent=' o fatorial de '+ document.getElementById('number2').value +' é : ' + resultado;
})