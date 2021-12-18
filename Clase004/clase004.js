/**

Vamos a crear bombas con Powder!
Suena mejor en mi cabeza...

Que necesitan las bombas?

Lata para la granada (caparazon de la granada?)

 **/
unoIngred = 0
dosIngred = 0
tresIngred = 0
cuatroIngred = 0

function primerIngrediente() {
    alert("Vamos a agregar tachas para la explosión. Cuantas agregamos? [0-100]")
    primIngre = prompt("¿Cuantas tachuelas debería agregar Powder?")
    primIngre.parseInt
    unoIngred = unoIngred + primIngre
}

function segundoIngrediente() {
    alert("En este paso, es hora de el potasio para la explosión. Cuantos miligramos? [0-10]")
    segunIngre = prompt("¿Cuanto potasio debería sumar Powder?")
    segunIngre.parseInt
    dosIngred = dosIngred + segunIngre
}

function tercerIngrediente() {
    alert("Necesitamos cablesitos para la explosión. Cuantos son suficientes? [0-3]")
    tercIngre = prompt("¿Cuantas cablesitos debería colocar Powder?")
    tercIngre.parseInt
    tresIngred = tresIngred + tercIngre
}

function cuartoIngrediente() {
    alert("Hace falta un reactivo para la explosión. Cuantas cucharadas de polvora agregamos? [0-5]")
    cuartIngre = prompt("¿Cuantas cucharadas de polvora debería agregar Powder?")
    cuartIngre.parseInt
    cuatroIngred = cuatroIngred + cuartIngre
}

do {
    primerIngrediente()
    segundoIngrediente()
    tercerIngrediente()
    cuartoIngrediente()
} while ((unoIngred <= 100) && (dosIngred <= 10) && (tresIngred <= 3) && (cuatroIngred <= 5))

if (unoIngred > 100) {
    alert("Hay tachuelas por todos lados! Que desastre...")
    statusBomba = false
} else{
    statusBomba = true
}
if (dosIngred > 10) {
    alert("Explotaste uno de tus dedos... ay...")
    statusBomba = false
} else{
    statusBomba = true
}

if (tresIngred > 3) {
    alert("Muchos cables hicieron mucho enrollo en la granada... no hay que activar por acá")
    statusBomba = false
} else{
    statusBomba = true
}

if (cuatroIngred > 5) {
    alert("BOOM- creo que tu vida es lo que menos importa considerando el agujero que hay en el edificio...")
    statusBomba = false
} else{
    statusBomba = true
}

if ((unoIngred < 25) && (dosIngred < 3) && (tresIngred < 2) && (cuatroIngred < 2)) {
    alert("Has intentado bien Powder! Aunque la bomba no haya sido eficiente, estoy orgullosa de ti! - Vi")
} else if(statusBomba = true) {
    alert("Que impresionante bomba Powder, viste que era cuestión de intentarlo? estoy orgullosa de ti! - Vi")
} else{
    alert("Better luck next time! A ti, que estas leyendo esto 😅")
}
