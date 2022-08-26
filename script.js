class Registro {
    constructor(id, edad, correo, linea, estacionOn, estacionOff, hora, motivo, rta1, rta2, rta3, rta4, rta5, rta6, rta7, rta8, rta9, rta10, rta11) {
    this.id = id;
    this.edad = edad;
    this.correo = correo;
    this.linea = linea;
    this.estOn = estOn;
    this.estOff = estOff;
    this.hora = hora;
    this.motivo = motivo;
    this.rta1 = rta1;
    this.rta2 = rta2;
    this.rta3 = rta3;
    this.rta4 = rta4;
    this.rta5 = rta5;
    this.rta6 = rta6;
    this.rta7 = rta7;
    this.rta8 = rta8;
    this.rta9 = rta9;
    this.rta10 = rta10;
    this.rta11 = rta11;
    }
}

const preg1 = document.querySelector("#preg1")
const preg2 = document.querySelector("#preg2")
const preg3 = document.querySelector("#preg3")
const preg4 = document.querySelector("#preg4")
const preg5 = document.querySelector("#preg5")
const preg6 = document.querySelector("#preg6")
const preg7 = document.querySelector("#preg7")
const preg8 = document.querySelector("#preg8")
const preg9 = document.querySelector("#preg9")
const preg10 = document.querySelector("#preg10")
const preg11 = document.querySelector("#preg11")
const preg12 = document.querySelector("#preg12")


function cargaPreg1 () {
    opcionesCalif.forEach(opcion =>{
        preg1.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg2 () {
    opcionesModos.forEach(opcion =>{
        preg2.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg3 () {
    opcionesSiNo.forEach(opcion =>{
        preg3.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg4 () {
    opcionesCalif.forEach(opcion =>{
        preg4.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

function cargaPreg5 () {
    opcionesCalif.forEach(opcion =>{
        preg5.innerHTML += `<option value="${opcion.valor}">${opcion.opcion}</option>`
    });
}

cargaPreg1()
cargaPreg2()
cargaPreg3()
cargaPreg4()
cargaPreg5()

const nuevoEncuestado = new Registro (idEncuestado.value, edadEncuestado.value, correoEncuestado.value, linea.value, estOn.value, estOff.value, horaViaje.value, motivoViaje.value, preg1.selectedIndex, preg2.value, preg3.value, preg4.value, preg5.value, preg6.value, preg7.value, preg8.value, preg9.value, preg10.value, preg11.value)

function guardarEncuesta () {
    const datosResp = {
        id: idEncuestado.value,
        edad: edadEncuestado.value,
        correo: correoEncuestado.value,
        linea: linea.value,
        estOn: estOn.value,
        estOff: estOff.value,
        hora: horaViaje.value,
        motivo: motivoViaje.value,
        rta1: preg1.value, 
        rta2: preg2.value,
        rta3: preg3.value,
        rta4: preg4.value,
        rta5: preg5.value,
        rta6: preg6.value,
        rta7: preg7.value,
        rta8: preg8.value,
        rta9: preg9.value,
        rta10: preg10.value,
        rta11: preg11.value,
    }
    localStorage.setItem ("guardarEncuesta", JSON.stringify(datosResp))
    location.reload()
}

const botonA = document.querySelector(".btn-rtas")

botonA.addEventListener ("click", (guardarEncuesta))


const respuestas = document.querySelector(".respuestas")

let resumen = JSON.parse(localStorage.getItem("guardarEncuesta"))

function mostrarRespuestas (){
    resumen.forEach ((rta) => {
      resumen.innerHTML += `<p>${rta}</p>`;
    })
}

const botonB = document.querySelector(".btn-resumen")

botonB.addEventListener ("click", (mostrarRespuestas))

