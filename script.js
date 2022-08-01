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

    let numeroEncuesta = " ";
    while (numeroEncuesta === " " || numeroEncuesta === null){
        numeroEncuesta = parseInt(prompt("Ingrese número de encuesta."));
    }

    let correo = " ";
    while (correo === " " || correo === null){
        correo = prompt("Ingrese un correo electrónico de contacto.");
    }

    confirm("Ya podemos empezar. Estás listo?");

}

function seccionA () {

    let respuesta1 = prompt("1- En general, ¿cómo calificás el servicio de Subte de la Ciudad de Buenos Aires? \n1-Muy bueno \n2-Bueno \n3-Regular \n4-Malo \n5-Muy malo \n9-NS/NC");

    while (respuesta1 != "1" && respuesta1 != "2" && respuesta1 != "3"  && respuesta1 != "4" && respuesta1 != "5" && respuesta1 != "9"){
        alert ("Elegí una de las opciones ofrecidas.");
        respuesta1 = prompt("1- En general, ¿cómo calificás el servicio de Subte de la Ciudad de Buenos Aires? \n1-Muy bueno \n2-Bueno \n3-Regular \n4-Malo \n5-Muy malo \n9-NS/NC")
    }
   

    let respuesta2 = prompt("2- ¿Cuál de estos medios de transporte público creés que brinda un mejor servicio? \n1-Subte \n2-Colectivo \n3-Tren \n4-Metrobús \n5-Premetro \n7-Otros (especificar al final)");

        while(respuesta2 != "1" && respuesta2 != "2" && respuesta2 != "3"  && respuesta2 != "4" && respuesta2 != "5" && respuesta2 != "7") {
        alert ("Elegí una de las opciones ofrecidas.");
        respuesta2 = prompt("2- ¿Cuál de estos medios de transporte público creés que brinda un mejor servicio? \n1-Subte \n2-Colectivo \n3-Tren \n4-Metrobús \n5-Premetro \n7-Otros (especificar al final)")
        }

        if (respuesta2 === "7"){
            let respuesta2a = prompt("Ingrese un medio de transporte.") 
        }

    let respuesta3 = prompt("3- ¿Utilizaste alguna vez la red WiFi del subte? \n1-Sí \n2-No");

        while (respuesta3 != "1" && respuesta3 != "2") {
        alert ("Elegí una de las opciones ofrecidas.");
        respuesta3 = prompt("3- ¿Utilizaste alguna vez la red WiFi del subte? \n1-Sí \n2-No")
        }

        if (respuesta3 === "1"){
            let respuesta4 = prompt("4-Cómo calificarías el servicio de WiFI? \n1-Excelente \n2-Bueno \n3-Regular \n4-Malo")
        }

        while (respuesta4 != "1" && respuesta4 != "2" && respuesta4 != "3" && respuesta4 != "4"){
            alert ("Elegí una de las opciones ofrecidas.");
            respuesta4 = prompt("4-Cómo calificarías el servicio de WiFI? \n1-Excelente \n2-Bueno \n3-Regular \n4-Malo")
        }

}

function despedida (){
    alert ("Gracias por participar!");
}

ingreso()
seccionA ()
despedida ()
