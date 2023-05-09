//declarar uma função chamada getlocation responsavel por obter a localizaçao
var lat;
var lon;

function getLocation(){
    //testar se  não existe a localização
    if(!navigator.geolocation)
    return null
        //se ele passar pelo erro, pegamos a localização
        //Essa função chama o método getCurrentPosition do objeto navigator.geolocation, que solicita a posição atual do usuário. Quando a posição é obtida com sucesso, a função  de callback fornecida (uma função anônima, nesse caso) é chamada com o objeto Position como argumento (que chamamos de pos).
        navigator.geolocation.getCurrentPosition(function(pos){
        //a seguir, vamos selecionar o elemento HTML com o ID "lat" e atualizar o seu conteudo de texto (innertext) com a latitude obtida a partir do objeto Position (pos.coords.latitude)
        lat = document.getElementById("lat").innerText=pos.coords.latitude
        //a seguir, vamos selecionar o elemento HTML com o ID "lon" e atualizar o seu conteudo de texto (innertext) com a longitude obtida a partir do objeto Position (pos.coords.longitude)
        lon = document.getElementById("lon").innerText=pos.coords.longitude
        
        initMap();
    })
}

function initMap() {
// The location of Uluru
const uluru = { lat: lat, lng: lon };

// The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
     center: uluru,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
    position: uluru,
    map: map,
});
getLocation();
}













