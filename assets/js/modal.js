const displayBlock = document.getElementById('blockdisplay');
const logouts = document.getElementById('logouts');
const iconmail = document.getElementById('iconmail');
const iemail = document.getElementById('emails');
const iconuser = document.getElementById('iconuser');
const iuser = document.getElementById('uName');
const iconphone = document.getElementById('iconphone');
const iphone = document.getElementById('numbers');
const clickphone = document.getElementById('clickphone');
const clickuser = document.getElementById('clickuser');
const clickemail = document.getElementById('clickemail');

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
    iphone.className = "visible";
    iconphone.className = "visible";
    iuser.className = "invisible";
    iconuser.className = "invisible";
    clickuser.style.display = "block";
    clickemail.style.display = "block";
    iemail.className = "invisible";
    iconmail.className = "invisible";
    clickphone.style.display = "none";
}

function emailFunction(){
    iemail.className = "visible";
    iconmail.className = "visible";
    iuser.className = "invisible";
    iconuser.className = "invisible";
    clickuser.style.display = "block";
    clickphone.style.display = "block";
    iphone.className = "invisible";
    iconphone.className = "invisible";
    clickemail.style.display = "none";
}

function userFunction(){
    iuser.className = "visible";
    iconuser.className = "visible";
    iemail.className = "invisible";
    iconmail.className = "invisible";
    clickemail.style.display = "block";
    clickphone.style.display = "block";
    iphone.className = "invisible";
    iconphone.className = "invisible";
    clickuser.style.display = "none";
}


