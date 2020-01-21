//functie die het hartje bij het verhaal invult zodat de gebruiker feedback krijgt dat het verhaal in de lijst is opgeslagen

//1. eventlistener aan het hartje toevoegen
document.getElementById("hartje").addEventListener("click", vulHartje)
//2. variable hartje maken
var hartje = document.querySelector("#hartje")

function vulHartje() {
    //3. de html veranderen naar de unicode van een gevuld hartje met de code uit les 4
    hartje.innerHTML = "&#9829;";
    //4. er loopt iets niet helemaal lekker met de grootte van de twee hartjes, dus deze class wordt toegevoegd om het verschil te compenseren
    hartje.classList.add("hartjegevuld")
    //5. in de console checken of het bestand goed gelinkt is en de eventlistener werkt
    console.log("it works");
}
