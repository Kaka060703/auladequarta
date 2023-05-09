addEventListener('message', function(event){
    const number1 = event.data;
    const resultado = number1*2;
    
postMessage(resultado);
})