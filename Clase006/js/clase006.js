//por tantos prompts si veia esto solamente y limpio al principio me daba cuenta que al fin podía ver el programa de 0 despues de spammear CTRL + F5
console.log(""
    + "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣉⡥⠶⢶⣿⣿⣿⣿⣷⣆⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⣿⣿⣿⡿⢡⡞⠁⠀⠀⠤⠈⠿⠿⠿⠿⣿⠀⢻⣦⡈⠻⣿⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⣿⣿⣿⡇⠘⡁⠀⢀⣀⣀⣀⣈⣁⣐⡒⠢⢤⡈⠛⢿⡄⠻⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠉⠐⠄⡈⢀⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⣿⣿⣿⠇⢠⣿⣿⣿⣿⡿⢿⣿⣿⣿⠁⢈⣿⡄⠀⢀⣀⠸⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⡿⠟⣡⣶⣶⣬⣭⣥⣴⠀⣾⣿⣿⣿⣶⣾⣿⣧⠀⣼⣿⣷⣌⡻⢿⣿\r\n"
    + "⣿⣿⠟⣋⣴⣾⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⣿⣿⣿⡿⢸⣿⣿⣿⣿⣷⠄⢻\r\n"
    + "⡏⠰⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢂⣭⣿⣿⣿⣿⣿⠇⠘⠛⠛⢉⣉⣠⣴⣾\r\n"
    + "⣿⣷⣦⣬⣍⣉⣉⣛⣛⣉⠉⣤⣶⣾⣿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡘⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿\r\n"
    + "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n")


/*

CLASE 005 - OBJETOS

*/

/*
class BombaPowder {
    constructor(nombre, tamaño, color, animal) {
        this.nombre = nombre
        this.tamaño = tamaño
        this.color = color
        this.animal = animal
    }
    loggear() {
        console.log("los parametros inputteados son " + this.nombre + ", " + this.tamaño + ", " + this.color + ", " + this.animal)
    }
    existir() {
        alert("Que genial tu creación, Powder!\r\nMe gusta que hayas hecho una bomba sobre un " + this.animal + " de color " + this.color + ".")
        if (this.tamaño > 4) {
            alert("Aunque para serte sincera, se ve muuy grande. Estas segura que funcionará?")
        }
    }
}
*/

/*
nombre es string
tamaño no puede ser mayor a nose, 5 cm
color es string
animal es string
*/

/*
pregBomb1 = prompt("¿Cómo llamaremos a la bomba?")
pregBomb2 = prompt("¿Qué tan alta va a ser?")
parseInt(pregBomb2)
pregBomb3 = prompt("¿De qué color será?")
pregBomb4 = prompt("Y para terminar... ¿en qué animal esta basada?")
const miPrimerBombucha = new BombaPowder(pregBomb1, pregBomb2, pregBomb3, pregBomb4)
miPrimerBombucha.loggear()
miPrimerBombucha.existir() //boom!
*/

/*

CLASE 006 - ARRAYS

*/

/*
tienda hextech?
piedra bruta
gema
guante atlas
martillo talis
secreto: vial de shimmer
*/

const zauniteWares =
    [{ nombre: "Piedra Hextech", precio: 40, cantidad: 3 },
    { nombre: "Hexgema", precio: 300, cantidad: 1 },
    { nombre: "Guante Atlas", precio: 1000, cantidad: 2 }, //uno para cada mano, duhh
    { nombre: "Martillo Talis", precio: 1000, cantidad: 1 }]
//agregar el vial de shimmer con algun secreto?

alert("Qué deseas comprar? Aún queda lo siguiente:")

for (let i = 0; i < zauniteWares.length; i++) {
    console.log(zauniteWares[i].nombre)
    console.log(zauniteWares[i].precio)
    console.log(zauniteWares[i].cantidad)
}

do {

    do {
        gasto1 = prompt(zauniteWares[0].nombre + ", cantidad: " + zauniteWares[0].cantidad + "\r\n¿Cuantos deseas comprar?")
        parseInt(gasto1)
        alert("Compraste " + gasto1 + " " + zauniteWares[0].nombre + "(s). Gastaste " + (zauniteWares[0].precio * gasto1) + " P$.")
        zauniteWares[0].cantidad = zauniteWares[0].cantidad - gasto1
        if (zauniteWares[0].cantidad > 0) {
            respuesta = prompt("Te interesa comprar más?")
            respuesta.toLowerCase()
        }
        if ((zauniteWares[0].cantidad <= 0) && (respuesta == "si")) {
            alert("No te creas más listo que yo eh!")
            respuesta = "no"
        }
    } while ((respuesta == "si") || (zauniteWares[0].cantidad > 0))

    do {
        gasto2 = prompt(zauniteWares[1].nombre + ", cantidad: " + zauniteWares[1].cantidad + "\r\n¿Cuantos deseas comprar?")
        parseInt(gasto2)
        alert("Compraste " + gasto2 + " " + zauniteWares[1].nombre + "(s). Gastaste " + (zauniteWares[1].precio * gasto2) + " P$.")
        zauniteWares[1].cantidad = zauniteWares[1].cantidad - gasto2
        if (zauniteWares[1].cantidad > 0) {
            respuesta = prompt("Te interesa comprar más?")
            respuesta.toLowerCase()
        }
        if ((zauniteWares[1].cantidad <= 0) && (respuesta == "si")) {
            alert("No te creas más listo que yo eh!")
            respuesta = "no"
        }
    } while ((respuesta == "si") || (zauniteWares[1].cantidad > 0))

    do {
        gasto3 = prompt(zauniteWares[2].nombre + ", cantidad: " + zauniteWares[2].cantidad + "\r\n¿Cuantos deseas comprar?")
        parseInt(gasto3)
        alert("Compraste " + gasto3 + " " + zauniteWares[2].nombre + "(s). Gastaste " + (zauniteWares[2].precio * gasto3) + " P$.")
        zauniteWares[2].cantidad = zauniteWares[2].cantidad - gasto3
        if (zauniteWares[2].cantidad > 0) {
            respuesta = prompt("Te interesa comprar más?")
            respuesta.toLowerCase()
        }
        if ((zauniteWares[2].cantidad <= 0) && (respuesta == "si")) {
            alert("No te creas más listo que yo eh!")
            respuesta = "no"
        }
    } while ((respuesta == "si") || (zauniteWares[2].cantidad > 0))

    do {
        gasto4 = prompt(zauniteWares[3].nombre + ", cantidad: " + zauniteWares[3].cantidad + "\r\n¿Cuantos deseas comprar?")
        parseInt(gasto4)
        alert("Compraste " + gasto4 + " " + zauniteWares[3].nombre + "(s). Gastaste " + (zauniteWares[3].precio * gasto4) + " P$.")
        zauniteWares[3].cantidad = zauniteWares[3].cantidad - gasto4
        if (zauniteWares[3].cantidad > 0) {
            respuesta = prompt("Te interesa comprar más?")
            respuesta.toLowerCase()
        }
        if ((zauniteWares[3].cantidad <= 0) && (respuesta == "si")) {
            alert("No te creas más listo que yo eh!")
            respuesta = "no"
        }
    } while ((respuesta == "si") || (zauniteWares[3].cantidad > 0))

} while ((zauniteWares[0].cantidad >= 0) && (zauniteWares[1].cantidad >= 0) && (zauniteWares[2].cantidad >= 0) && (zauniteWares[3].cantidad >= 0))

if ((zauniteWares[0].cantidad < 0) && (zauniteWares[1].cantidad < 0) && (zauniteWares[2].cantidad < 0) && (zauniteWares[3].cantidad < 0)) {
    //SHIMMER
    alert("Veo que tienes un interés muy peculiar en ciertas... cosas... Toma, te daré aqui un pequeño objeto. Pero guardalo bien.")
    alert("Obtuviste 1 Vial de Shimmer.")
}