var aElement = document.getElementById('a')
var sElement = document.getElementById('s')
var dElement = document.getElementById('d')
var fElement = document.getElementById('f')
var gElement = document.getElementById('g')
var hElement = document.getElementById('h')
var jElement = document.getElementById('j')
var kElement = document.getElementById('k')
var lElement = document.getElementById('l')

var aMusicElement = new Audio('/music/boom.wav');
var sMusicElement = new Audio('/music/clap.wav')
var dMusicElement = new Audio('/music/hihat.wav')
var fMusicElement = new Audio('/music/kick.wav')
var gMusicElement = new Audio('/music/openhat.wav')
var hMusicElement = new Audio('/music/ride.wav')
var jMusicElement = new Audio('/music/snare.wav')
var kMusicElement = new Audio('/music/tink.wav')
var lMusicElement = new Audio('/music/tom.wav')

document.body.addEventListener('keydown',function(e){
    var keycode = e.keyCode;
    if(keycode === 65){
        aElement.style.backgroundColor = "rgb(191, 59, 156)";
        aElement.style.border = "none";
        aElement.style.boxShadow = "5px 5px 5px grey";
        
        aMusicElement.play();
    }
    if(keycode === 83){
        sElement.style.backgroundColor = "rgb(191, 59, 156)";
        sElement.style.border = "none";
        sElement.style.boxShadow = "5px 5px 5px grey"
        sMusicElement.play();
    }
    if(keycode === 68){
        dElement.style.backgroundColor = "rgb(191, 59, 156)";
        dElement.style.border = "none";
        dElement.style.boxShadow = "5px 5px 5px grey"
        dMusicElement.play();
    }
    if(keycode === 70){
        fElement.style.backgroundColor = "rgb(191, 59, 156)";
        fElement.style.border = "none";
        fElement.style.boxShadow = "5px 5px 5px grey"
        fMusicElement.play();
    }
    if(keycode === 71){
        gElement.style.backgroundColor = "rgb(191, 59, 156)";
        gElement.style.border = "none";
        gElement.style.boxShadow = "5px 5px 5px grey"
        gMusicElement.play();
    }
    if(keycode === 72){
        hElement.style.backgroundColor = "rgb(191, 59, 156)";
        hElement.style.border = "none";
        hElement.style.boxShadow = "5px 5px 5px grey"
        hMusicElement.play();
    }
    if(keycode === 74){
        jElement.style.backgroundColor = "rgb(191, 59, 156)";
        jElement.style.border = "none";
        jElement.style.boxShadow = "5px 5px 5px grey"
        jMusicElement.play();
    }
    if(keycode === 75){
        kElement.style.backgroundColor = "rgb(191, 59, 156)";
        kElement.style.border = "none";
        kElement.style.boxShadow = "5px 5px 5px grey"
        kMusicElement.play();
    }
    if(keycode === 76){
        lElement.style.backgroundColor = "rgb(191, 59, 156)";
        lElement.style.border = "none";
        lElement.style.boxShadow = "5px 5px 5px grey"
        lMusicElement.play();
    }

})

// when the user take a finger away from the key this block will execute. 
document.body.addEventListener('keyup',function(e){
    var keycode = e.keyCode;
    if(keycode === 65){
        aElement.style.backgroundColor = "transparent";
        aElement.style.border = "3px solid white";
        aElement.style.boxShadow = "none";
    }
    if(keycode === 83){
        sElement.style.backgroundColor = "transparent";
        sElement.style.border = "3px solid white";
        sElement.style.boxShadow = "none";
    }
    if(keycode === 68){
        dElement.style.backgroundColor = "transparent";
        dElement.style.border = "3px solid white";
        dElement.style.boxShadow = "none";
    }
    if(keycode === 70){
        fElement.style.backgroundColor = "transparent";
        fElement.style.border = "3px solid white";
        fElement.style.boxShadow = "none";
    }
    if(keycode === 71){
        gElement.style.backgroundColor = "transparent";
        gElement.style.border = "3px solid white";
        gElement.style.boxShadow = "none";
        
    }
    if(keycode === 72){
        hElement.style.backgroundColor = "transparent";
        hElement.style.border = "3px solid white";
        hElement.style.boxShadow = "none";
    }
    if(keycode === 74){
        jElement.style.backgroundColor = "transparent";
        jElement.style.border = "3px solid white";
        jElement.style.boxShadow = "none";
    }
    if(keycode === 75){
        kElement.style.backgroundColor = "transparent";
        kElement.style.border = "3px solid white";
        kElement.style.boxShadow = "none";
    }
    if(keycode === 76){
        lElement.style.backgroundColor = "transparent";
        lElement.style.border = "3px solid white";
        lElement.style.boxShadow = "none";
    }

})
