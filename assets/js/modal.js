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
    logouts.style.visibility = "collapse";
    logouts.style.zIndex = "-1";
}

function logout(){
    logouts.style.visibility = "visible";
    logouts.style.zIndex = "4";
}



