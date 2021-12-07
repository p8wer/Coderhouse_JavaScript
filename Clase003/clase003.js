let contadorMuerte = 0
do {
    let contadorPowder = prompt("(Internamente, piensas...) ¿Estoy segura que deberia intentar ayudarlos? [Si/no]")
    if (contadorPowder == "si") {
        contadorMuerte++
        console.log(contadorMuerte)
    } else {
        contadorMuerte--
        console.log(contadorMuerte)
    }
} while (contadorMuerte <= 3)

if (contadorMuerte == 3) {
    alert("Por tu culpa, ellos ahora estan muertos. ¡Te dije que tenias que haberte quedado en casa, Powder!")
}

alert("(Muchos años después, en un reencuentro no muy agradable...)")

let preguntaDificil = prompt("Por favor Powder, se que estas ahí, ¡te lo suplico!")

while (preguntaDificil != "rendirse") {
    switch (preguntaDificil) {
        case "mylo":
            alert("El siempre me decia que arruinaba todo, que soy una Jinx...")
            break
        case "claggor":
            alert("Veo que usas sus lentes Vi, que lindo recuerdo... pero fue mi culpa...")
            break
        case "vander":
            alert("El nos cuidaba...")
            break
        case "mamá":
            alert("(Solo recuerdas una horrible escena de brutalidad en el puente cuando eras más pequeña)")
            break
        case "mama":
            alert("(Solo recuerdas una horrible escena de brutalidad en el puente cuando eras más pequeña)")
            break
        case "papá":
            alert("(Solo recuerdas una horrible escena de brutalidad en el puente cuando eras más pequeña)")
            break
        case "papa":
            alert("(Solo recuerdas una horrible escena de brutalidad en el puente cuando eras más pequeña)")
            break
        case "vi":
            alert("YA NO ME QUERES VI, CAITLYN ESTO, CAITLYN LO OTRO. PENSE QUE REALMENTE ME IBAS A QUERER DEVUELTA, A MI, ¡TU HERMANA!")
            break
        case "powder":
            alert("NO SOY POWDER. NO SOY POWDER. NO SOY POWDER. YO SOY JINX. YO SOY JINX. YO SOY JINX.")
            break
        default:
            alert("(Notas algo nublados tus recuerdos, solo que los gritos en tu cabeza estan aun más fuertes)")
            break
    }
    preguntaDificil = prompt("¡Pensa en ellos Powder, ¡maldita sea!, en Mylo, en Claggor, en Vander, en mamá, en papá! [NOTA: Si deseas terminar esta secuencia, solamente escribe \"rendirse\"🙂]")
}

if (preguntaDificil == "rendirse") {
    alert("Powder está muerta. Brindemos por nuestra nueva hermandad, Vi y Jinx.")
}