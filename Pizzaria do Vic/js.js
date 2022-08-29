var saladsMenu = document.getElementById("saladsMenu");
var pizzaMenu = document.getElementById("pizzaMenu");
var starterMenu = document.getElementById("starterMenu");
var gatoMenu = document.getElementById("gatoMenu");
var botaoMenuPizza = document.getElementById("botaoMenuPizza");
var botaoMenuSalads = document.getElementById("botaoMenuSalads");
var botaoMenuStarter = document.getElementById("botaoMenuStarter");


function changeToPizzaMenu()
{
    saladsMenu.style.display = "none";
    pizzaMenu.style.display = "block";
    starterMenu.style.display = "none";
    gatoMenu.src = "img/pusheenPizza.gif";

    botaoMenuPizza.style.backgroundColor = "red";
    botaoMenuSalads.style.backgroundColor = "black";
    botaoMenuStarter.style.backgroundColor = "black";
}

function changeToSaladsMenu()
{
    saladsMenu.style.display = "block";
    pizzaMenu.style.display = "none";
    starterMenu.style.display = "none";
    gatoMenu.src = "img/pusheenPlanta.gif";

    botaoMenuSalads.style.backgroundColor = "red";
    botaoMenuStarter.style.backgroundColor = "black";
    botaoMenuPizza.style.backgroundColor = "black";
}

function changeToStarterMenu()
{
    saladsMenu.style.display = "none";
    pizzaMenu.style.display = "none";
    starterMenu.style.display = "block";
    gatoMenu.src = "img/pusheen-cake.gif";
    
    botaoMenuStarter.style.backgroundColor = "red";
    botaoMenuSalads.style.backgroundColor = "black";
    botaoMenuPizza.style.backgroundColor = "black";
}


