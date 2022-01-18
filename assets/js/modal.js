const displayBlock = document.getElementById('blockdisplay');
const logouts = document.getElementById('logouts');
const invisible2 = document.getElementsByClassName('invisible2');
const invisible = document.getElementsByClassName('invisible');
const visible = document.getElementsByClassName('visible');
const puser = document.getElementsByClassName('puser');
const usemail = document.getElementsByClassName('usemail');
const pnumber = document.getElementsByClassName('pnumber');


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

function searchFunction(){
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('inputs');
    
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            document.getElementById('notFound').style.display = "block";
        }
        else {
            x[i].style.display="block";     
            document.getElementById('notFound').style.visibility = "hidden";            
        }
    }
  }
  
function phoneFunction(){
    invisible2.className = "visible";
    visible.className = "invisible2";
    puser.className = "visible";
    pnumber.style.backgroundColor = "#22046b";
}

function emailFunction(){
    invisible.className = "visible";
    visible.className = "invisible";
    puser.className = "visible";
    usemail.style.backgroundColor = "#22046b";
}

function userFunction(){
    usemail.className = "invisible";
    invisible.className = "invisible";
    invisible2.className = "invisible2";
    visible.className = "visible";
    puser.style.backgroundColor = "#22046b";
}


