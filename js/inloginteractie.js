//een functie waarin het inlogveld verschijnt wanneer er op inloggen wordt gedrukt

//1. eventlistner aanmaken voor het knopje "inloggen" (deze heeft de id inloggen) en declareren welke functie moet gaan spelen
document.getElementById("inloggen").addEventListener("click", loginVerschijnen)
//2. variabele aanmaken voor het blokje waarin het login form staat
var blokje = document.querySelector(".login")


function loginVerschijnen() {
    //3. de class waarin display: none staat weghalen
    blokje.classList.remove("login");
    //4. checken in de console of het bestand goed gelinkt is en de eventlistener werkt
    console.log("it works")
}

//een functie waardoor het veld gesloten kan worden met een kruisje

//1. eventlistener maken voor het kruisje
document.getElementById("kruisje").addEventListener("click", loginVerdwijnen)

function loginVerdwijnen() {
    //2. class die net weggehaald is weer toevoegen wanneer er op het kruisje geklikt wordt
    blokje.classList.add("login");
    //3. checken in de console of het bestand goed gelinkt is en de eventlistener werkt
    console.log("it works")
}
