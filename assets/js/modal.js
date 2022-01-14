const displayBlock = document.getElementById('blockdisplay');
const logouts = document.getElementById('logouts');


function myFunction(){
    displayBlock.style.zIndex = "3";
}

window.onclick = function(event) {
    if (event.target == displayBlock){
        displayBlock.style.zIndex = "1";
    }
}

function ourFunction(){
    displayBlock.style.zIndex = "1";
}

function remove(){
    logouts.style.opacity = "0";
    logouts.style.zIndex = "1";
    document.getElementById('bars').style.opacity = "1";
}

function logout(){
    logouts.style.opacity = "1";
    logouts.style.zIndex = "4";
    document.getElementById('bars').style.opacity = "0";
}



