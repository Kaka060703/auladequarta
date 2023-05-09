let pesoTotal = 0;


function allowDrop(ev){
    ev.preventDefault();
}
function drag (ev){
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


    //add ou sbtrair o peso da imagem ao peso total

    if(ev.target.id === "div2"){
        //console.log(ev.target.childNodes[0].getAttribute("data-peso"))
        pesoTotal += parseInt(ev.target.childNodes[0].getAttribute("data-peso"));
    }else if(ev.target.id === "div1"){
        pesoTotal -= parseInt(ev.target.childNodes[0].getAttribute("data-peso"));

    }
    //mostra na pagina
    document.getElementById("pesoTotal").innerHTML = pesoTotal + "kg";
}


function dragEnd(ev){
    if (ev.target.parentNode.id != "div2") {
        //subtrair o peso da imagem ao peso total
        pesoTotal -= parseInt(ev.target.getAttribute("data-peso"));
        
        //mostra na pagina
        document.getElementById("pesoTotal").innerHTML = pesoTotal + "kg";
        
    }else if(ev.target.parentNode.id === "div2"){
        pesoTotal += parseInt(ev.target.getAttribute("data-peso"));
    }
    
}

