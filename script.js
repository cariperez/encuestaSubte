function ingreso () {

    alert("El encuestado debe ser mayor de 16 años.");
  
    let edad = " ";
    let edadAprobada = false;
    while (edadAprobada === false){
        edad = parseInt(prompt("Ingresá tu edad."));
        if (edad>15){
            edadAprobada = true;
        }   
        else {
            alert ("Necesitás ser mayor de 16 años para responder esta encuesta.");
        }
    }

    confirm("Ya podemos empezar. Estás listo?");

}

ingreso ()


class Registro {
    constructor(id, edad, correo, telefono, linea, estacionOn, estacionOff, hora, motivo) {
    this.id = id;
    this.edad = edad;
    this.correo = correo;
    this.telefono = telefono;
    this.linea = linea;
    this.estacionOn = estacionOn;
    this.estacionOff = estacionOff;
    this.hora = hora;
    this.motivo = motivo;
    }
}

const datosEncuestados = [];
datosEncuestados.push(new Registro("001", "20 años", "leo@gmail.com", "123456789", "A", "Acoyte", "Congreso", "10 am", "Estudio"));
datosEncuestados.push(new Registro("002", "35 años", "juana@gmail.com", "789456123", "C", "Constitución", "Diagonal Norte", "8 am",  "Trabajo"));
datosEncuestados.push(new Registro("003", "43 años", "maxi@gmail.com", "456789123", "B", "Florida", "Rosas", "17 pm",  "Trabajo"));

console.table (datosEncuestados);
   
const nuevoEncuestado = {
    id: "004",
    edad: prompt("Ingresá tu edad: "),
    correo: prompt("Ingresá tu correo electrónico: "),
    telefono: prompt("Ingresá tu teléfono: "),
    linea: prompt("¿En qué línea te encontrás?"),
    estacionOn: prompt("¿En qué estación ingresaste al Subte?"),
    estacionOff: prompt("¿En qué estación salís del Subte?"),
    hora: prompt("¿A qué hora ingresaste al Subte?"),
    motivo: prompt("Elegí el motivo de tu viaje: trabajo - estudio - compras - salud - otros")
};

datosEncuestados.push(nuevoEncuestado);

console.table (datosEncuestados);

function buscarEstacion (){
    let estacionBuscada = prompt ("¿Qué estación querés buscar?")
    const resultado = datosEncuestados.find (estacion => estacion.estacionOn === estacionBuscada)
    console.table (resultado)
    }

buscarEstacion ()

debugger

let respuesta1
let respuesta2
let respuesta3
let respuesta4
    
function seccionA () {

    respuesta1 = prompt("1- En general, ¿cómo calificás el servicio de Subte de la Ciudad de Buenos Aires? \n1-Muy bueno \n2-Bueno \n3-Regular \n4-Malo \n5-Muy malo \n9-NS/NC");

    while (respuesta1 != "1" && respuesta1 != "2" && respuesta1 != "3"  && respuesta1 != "4" && respuesta1 != "5" && respuesta1 != "9"){
        alert ("Elegí una de las opciones ofrecidas.");
        respuesta1 = prompt("1- En general, ¿cómo calificás el servicio de Subte de la Ciudad de Buenos Aires? \n1-Muy bueno \n2-Bueno \n3-Regular \n4-Malo \n5-Muy malo \n9-NS/NC")
    }
   

    respuesta2 = prompt("2- ¿Cuál de estos medios de transporte público creés que brinda un mejor servicio? \n1-Subte \n2-Colectivo \n3-Tren \n4-Metrobús \n5-Premetro \n7-Otros (especificar al final)");

    while(respuesta2 != "1" && respuesta2 != "2" && respuesta2 != "3"  && respuesta2 != "4" && respuesta2 != "5" && respuesta2 != "7") {
        alert ("Elegí una de las opciones ofrecidas.");
        respuesta2 = prompt("2- ¿Cuál de estos medios de transporte público creés que brinda un mejor servicio? \n1-Subte \n2-Colectivo \n3-Tren \n4-Metrobús \n5-Premetro \n7-Otros (especificar al final)")
    }

    if (respuesta2 === "7"){
            let respuesta2a = prompt("Ingrese un medio de transporte.") 
    }

    respuesta3 = prompt("3- ¿Utilizaste alguna vez la red WiFi del subte? \n1-Sí \n2-No");

    while (respuesta3 != "1" && respuesta3 != "2") {
        alert ("Elegí una de las opciones ofrecidas.");
        respuesta3 = prompt("3- ¿Utilizaste alguna vez la red WiFi del subte? \n1-Sí \n2-No")
    }

    if (respuesta3 === "1"){
            respuesta4 = prompt("4-Cómo calificarías el servicio de WiFI? \n1-Excelente \n2-Bueno \n3-Regular \n4-Malo")
    }

    while (respuesta4 != "1" && respuesta4 != "2" && respuesta4 != "3" && respuesta4 != "4"){
            alert ("Elegí una de las opciones ofrecidas.");
            respuesta4 = prompt("4-Cómo calificarías el servicio de WiFI? \n1-Excelente \n2-Bueno \n3-Regular \n4-Malo")
    }
}

seccionA ()

const respuestasEncuestado001 = []

respuestasEncuestado001.push(respuesta1, respuesta2, respuesta3, respuesta4)

console.table (respuestasEncuestado001)

