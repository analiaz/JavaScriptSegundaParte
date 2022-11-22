// querySelector
//document habla de todo lo que esta en la etiqueta de html
//const heading = document.querySelector('.header__texto h2'); // 0 o 1 elemento
//console.log(heading);
//heading.textContent = 'Nuevo Heading'; //modifica el texto del selector

//querySelectorALl
//const enlaces = document.querySelectorAll('.navegacion a');
//console.log(enlaces[0])
//enlaces[0].textContent = 'nuevo texto para enlaces';
//enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


//getElemntById se usaba antes 
//const heading2 = document.getElementById('heading');

//----------Generar un nuevo enlace---------------
//const nuevoEnlace = document.createElement('A') // USAR MAYUSCULAS

//agregar el hredf
//nuevoEnlace.href = 'nuevo_enlace.htm'
//agregar el texto
//nuevoEnlace.textContent = 'nuevo enlace'

//agregar la clase
//nuevoEnlace.classList.add('navegacion__enlace')

//agregar en el documento

 //const navegacion = document.querySelector('.navegacion');
 //navegacion.appendChild(nuevoEnlace);

//console.log(nuevoEnlace)


// Eventos

//console.log(1);

//window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen de HTML esten listos
  //  console.log(32);
//});

//window.onload = function() {
//    console.log(3)
//}


//document.addEventListener('DOMContentLoaded',function() { //Solo espera que se descarge el html, pero no espera el css o imagenes
//    console.log(2)
//})

//(window.onscroll = function() {
//    console.log('scrolling...')
//})

//selecciona elementos y asociarles un evento
//const btnEnviar = document.querySelector('.boton--primario')

//btnEnviar.addEventListener('click', function(e){ //el click esta mas asociado al boton, una imagen, textos
//    e.preventDefault(); //es util para validar un formulario


//    console.log('enviando formulario')
//});

//Eventos de los Inputs y TextArea

const datos =  {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento submit se usa mas en formularios
formulario.addEventListener('submit', function(e){ //submit esta mas asociado al formulario
    e.preventDefault();

    
    //validar el formulario

    const { nombre, email, mensaje} = datos; //destructuring del objeto

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('todos los campos son obligatorios', true);
        return; 
    }

    //crear la alerta de enviar correctamente
    mostrarAlerta('mensaje enviado correctamente');
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error= null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(error);

    setTimeout(() => {
        alerta.remove();
    }, 5000);

}

// muestra una alerta de que se envio correctamente
//function mostrarMensaje(mensaje){
//    const alerta = document.createElement('P');
//    alerta.textContent = mensaje;
//    alerta.classList.add('correcto');

//    formulario.appendChild(alerta);
    //desaparecer despues de 5 segundos
//    setTimeout(() => {
//        alerta.remove();
//    }, 5000);
//}
//muestra un error en pantalla
////function mostrarError(mensaje){
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

     //desaparesca despuesd e 5 segundos
//     setTimeout(() => {
//        error.remove();
//     }, 5000)
//}

