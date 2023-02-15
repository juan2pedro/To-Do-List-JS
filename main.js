console.log("Javascript Works!");
const TODO = [];
const INPROG = [];
const TOBE = [];
const DONE = [];

var ENVIAR = document.getElementById('enviar');
ENVIAR.addEventListener('click', function () {

    let Lista;
    let Nombre = document.getElementById('nombre-ADD').value;
    let Prioridad = document.getElementById('Prioridad').value;
    var ele = document.getElementsByName('lista');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            Lista = ele[i].value;
        }
    }

    if (Lista == 'ToDo') {
        TODO.push([Nombre, Prioridad])
        let carta = document.getElementById('Carta-Todo');
        let copia = carta.cloneNode(true);
        document.getElementById('ToDo-List').appendChild(copia);
        let hijo = document.getElementById('ToDo-List').children;
        hijo[0].classList.remove("Dnone");
        document.getElementById("TODO-Titulo").innerHTML = Nombre;
        document.getElementById("TODO-Texto").innerHTML = Prioridad;
    }
    if (Lista == 'InProg') {
        INPROG.push([Nombre, Prioridad])
        let carta = document.getElementById('Carta-InProg');
        let copia = carta.cloneNode(true);
        document.getElementById('InProg-List').appendChild(copia);
        let hijo = document.getElementById('InProg-List').children;
        hijo[0].classList.remove("Dnone");
        hijo.innerHTML = Nombre;
        document.getElementById("INPROG-Titulo").innerHTML = Nombre;
        document.getElementById("INPROG-Texto").innerHTML = Prioridad;
    }
    if (Lista == 'ToBe') {
        TOBE.push([Nombre, Prioridad])
        let carta = document.getElementById('Carta-ToBe');
        let copia = carta.cloneNode(true);
        document.getElementById('ToBe-List').appendChild(copia);
        let hijo = document.getElementById('ToBe-List').children;
        hijo[0].classList.remove("Dnone");
        document.getElementById("TOBE-Titulo").innerHTML = Nombre;
        document.getElementById("TOBE-Texto").innerHTML = Prioridad;
    }
    if (Lista == 'Done') {
        DONE.push([Nombre, Prioridad])
        let carta = document.getElementById('Carta-Done');
        let copia = carta.cloneNode(true);
        document.getElementById('Done-List').appendChild(copia);

        let hijo = document.getElementById('Done-List').children;
        hijo[0].classList.remove("Dnone");
        document.getElementById("DONE-Titulo").innerHTML = Nombre;
        document.getElementById("DONE-Texto").innerHTML = Prioridad;
    }
})

var MOVERDONE = document.getElementById('Done-Tobe');
MOVERDONE.addEventListener('click', function () {
    let carta = document.getElementById('Carta-Done');
    carta.remove(true);
    let copia = carta.cloneNode(true);
    document.getElementById('ToBe-List').appendChild(copia);
})