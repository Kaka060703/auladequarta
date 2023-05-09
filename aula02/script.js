// cria uma funçao que vai mudar a cor de fundo ou a cor de texto 

var vcorfundo, vcorfonte, vnome;

function defineCor(op,cor){
    //se op igual 1 altera a cor de fundo a 2 altera a cor texto

if(op ==1){
    document.body.style.backgroundColor = cor;
    vcorfundo=cor;
}else{
    document.body.style.color = cor ;
    vcorfonte= cor;
}
}

function gravar(){
    //guardar nome do input
    vnome=document.getElementById("fnome").value;
    //passa tudo para localstorege
    localStorage.corfundo=vcorfundo;
    localStorage.corfonte=vcorfonte;
    localStorage.nome=vnome;

}