addEventListener('message', function(event){
    const number2 = event.data;
    var resultado =1;
    for(let i =1; number2 >= i ;i++){
        resultado *= i;
        
        
        postMessage(resultado);
    }
     
})