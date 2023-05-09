const video = document.getElementById('video');

playV.addEventListener('click', function(){
    video.play(); 
})

playP.addEventListener('click', function(){
    video.pause(); 
})

playM.addEventListener('click', function(){
    video.muted = true; 
})

playR.addEventListener('click', function(){
    video.currentTime -= 5; 
})

playA.addEventListener('click', function(){
    video.currentTime += 5; 
})

playT.addEventListener('click', function(){
    video.requestFullscreen(); 
}) 