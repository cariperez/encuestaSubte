// function ingreso () {

//     alert("El encuestado debe ser mayor de 16 años.");
  
//     let edad = " ";
//     let edadAprobada = false;
//     while (edadAprobada === false){
//         edad = parseInt(prompt("Ingresá tu edad."));
//         if (edad>15){
//             edadAprobada = true;
//         }   
//         else {
//             alert ("Necesitás ser mayor de 16 años para responder esta encuesta.");
//         }
//     }

// }

// ingreso ()


// class Registro {
//     constructor(id, edad, correo, telefono, linea, estacionOn, estacionOff, hora, motivo) {
//     this.id = id;
//     this.edad = edad;
//     this.correo = correo;
//     this.telefono = telefono;
//     this.linea = linea;
//     this.estacionOn = estacionOn;
//     this.estacionOff = estacionOff;
//     this.hora = hora;
//     this.motivo = motivo;
//     }
// }

// const datosEncuestados = [];
// datosEncuestados.push(new Registro("001", "20 años", "leo@gmail.com", "123456789", "A", "Acoyte", "Congreso", "10 am", "Estudio"));
// datosEncuestados.push(new Registro("002", "35 años", "juana@gmail.com", "789456123", "C", "Constitución", "Diagonal Norte", "8 am",  "Trabajo"));
// datosEncuestados.push(new Registro("003", "43 años", "maxi@gmail.com", "456789123", "B", "Florida", "Rosas", "17 pm",  "Trabajo"));

// console.table (datosEncuestados);
   
// const nuevoEncuestado = {
//     id: "004",
//     edad: prompt("Ingresá tu edad: "),
//     correo: prompt("Ingresá tu correo electrónico: "),
//     telefono: prompt("Ingresá tu teléfono: "),
//     linea: prompt("¿En qué línea te encontrás?"),
//     estacionOn: prompt("¿En qué estación ingresaste al Subte?"),
//     estacionOff: prompt("¿En qué estación salís del Subte?"),
//     hora: prompt("¿A qué hora ingresaste al Subte?"),
//     motivo: prompt("Elegí el motivo de tu viaje: trabajo - estudio - compras - salud - otros")
// };

// datosEncuestados.push(nuevoEncuestado);

// console.table (datosEncuestados);

// function buscarEstacion (){
//     let estacionBuscada = prompt ("¿Qué estación querés buscar?")
//     const resultado = datosEncuestados.find (estacion => estacion.estacionOn === estacionBuscada)
//     console.table (resultado)
//     }

// buscarEstacion ()

// let respuesta1
// let respuesta2
// let respuesta3
// let respuesta4

const selectPregunta1 = document.getElementById("pregunta1")

const selectPregunta2 = document.getElementById("pregunta2")

const selectPregunta3 = document.getElementById("pregunta3")

const selectPregunta4 = document.getElementById("pregunta4")

const selectPregunta5 = document.getElementById("pregunta5")

function cargaPreg1 () {
    opcionesCalif.forEach(opcion =>{
        selectPregunta1.innerHTML += `<option value =""> ${opcion} </option>`
    });
}

function cargaPreg2 () {
    opcionesModos.forEach(opcion =>{
        selectPregunta2.innerHTML += `<option value =""> ${opcion} </option>`
    });
}

function cargaPreg3 () {
    opcionesSiNo.forEach(opcion =>{
        selectPregunta3.innerHTML += `<option value =""> ${opcion} </option>`
    });
}

function cargaPreg4 () {
    opcionesCalif.forEach(opcion =>{
        selectPregunta4.innerHTML += `<option value =""> ${opcion} </option>`
    });
}

function cargaPreg5 () {
    opcionesCalif.forEach(opcion =>{
        selectPregunta5.innerHTML += `<option value =""> ${opcion} </option>`
    });
}

cargaPreg1()
cargaPreg2()
cargaPreg3()
cargaPreg4()
cargaPreg5()

let rta1
let rta2
let rta3
let rta4
let rta5

class Respuestas {
    constructor(rta1, rta2, rta3, rta4, rta5){
        this.rta1 = rta1
        this.rta2 = rta2
        this.rta3 = rta3
        this.rta4 = rta4
        this.rta5 = rta5
    }
}

const respuestas1 = {
    rta1: "1",
    rta2: "2",
    rta3: "3",
    rta4: "4",
    rta5: "5", 
}


const botonA = document.querySelector(".btn-rtas")

botonA.addEventListener ("click", ()=>
    alert("Tus respuestas son: ", respuestas1))


// const respuestasEncuestado001 = []

// respuestasEncuestado001.push(respuesta1, respuesta2, respuesta3, respuesta4)

// console.table (respuestasEncuestado001)

