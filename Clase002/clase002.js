// preguntas
let nombre = prompt("¿Como te llamas?");
let arcaneAct = prompt("¿Cual es tu acto preferido de Arcane?");
let arcaneCharacter = prompt("¿Cual es tu personaje preferido de Arcane?");
let arcaneLength = prompt("¿Cuantos capitulos tiene Arcane?")
let arcaneIntro = prompt("Oh the misery... Everybody wants to be my: "); // 🎵

// a la consola para saber que este ok todo
console.log("Las respuestas del user fueron: " + nombre + ", " + arcaneAct + ", " + arcaneCharacter + ", " + arcaneLength + ", " + arcaneIntro);

// resultado final
if ((nombre == "123") || (nombre == "asd")) {
    alert("Tu respuesta fue: " + nombre + ". Eso no fue muy creativo de tu parte... 😑");
    console.log("User parece estar aburrid@.");
} else {
    alert("Qué onda " + nombre + ", ¿todo bien?");
};

if ((arcaneAct == "1") || (arcaneAct == "2") || (arcaneAct == "3")) {
    alert("Tu respuesta sobre los actos fue: " + arcaneAct + ". " + "No importa cual de los 3 elegiste realmente. ¡Son los 3 muy buenos!");
} else {
    alert("Tu respuesta sobre los actos fue: " + arcaneAct + ". " + "Mmmh... me parece que no estaras bien informad@...");
    console.log("User no vió Arcane.")
};

if ((arcaneCharacter == "Silco") || (arcaneCharacter == "silco")) {
    alert("Tu respuesta de personaje fue: " + arcaneCharacter + ". " + "Estoy reee de acuerdo con vos. Es genial el desarrollo que tuvo.");
    alert("Everybody betrays us.");
    console.log("Don't cry, you're perfect.");
} else {
    alert("Tu respuesta de personaje fue: " + arcaneCharacter + ". " + "En eso podemos estar de acuerdo. Que grande que es " + arcaneCharacter + " la verdad.");
};

if (arcaneLength == "9") {
    alert("Tu respuesta de la cantidad de capitulos fue: " + arcaneLength + ". " + "¡Respuesta correcta! Tomá 10 puntitos imaginarios 😋.");
    console.log("User es basado.");
} else {
    alert("Tu respuesta de la cantidad de capitulos fue: " + arcaneLength + ". " + "¿Cuantos dedos tenes en la mano menos uno?");
};

if ((arcaneIntro == "enemy") || (arcaneIntro == "Enemy") || (arcaneIntro == "ENEMY")) {
    alert("Tu respuesta sobre la canción fue: " + arcaneIntro + ".")
    alert("🎵SPARE THE SIMPATHY, EVERYBODY WANTS TO BE MY ENEMY-Y-Y-Y-Y🎵");
    alert("🎵(Look out for yourself!)🎵");
} else {
    alert("Tu respuesta la canción fue: " + arcaneIntro + ". " + "Que suerte que tenes... un mundo sin enemigos...");
};
