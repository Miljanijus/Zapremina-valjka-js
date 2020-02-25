function izracunaj(){
var poluprecnikOsnove = prompt("Unesite poluprecnik osnove valjka u cm:");
const pi = 3.14;
var visina = prompt("Unesite visinu valjka u cm:");

var zapremina = (parseInt(poluprecnikOsnove) * 2) * pi * parseInt(visina);
alert("Zapremina valjka je: " + zapremina + " cm kubnih");
}