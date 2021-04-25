let bodyt = document.getElementById("body-table");
let horarios = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:30"]
let fragment = new DocumentFragment();
let listHorario = []
horarios.forEach(function (horarios) {
    crearFragmento("tr")
    crearColumnas("td", 10, horarios)
})
bodyt.appendChild(fragment);



/* ---------------------FUNCIONES CREACION-------------------- */

function crearFragmento(objeto) {
    newElement = document.createElement(objeto)
    fragment.appendChild(newElement)
    return (newElement);
}
function crearColumnas(objeto, cant, vector) {
    for (let i = 0; i < cant; i++) {
        newColum = crearFragmento(objeto);
        newColum.className += "hora";
        newColum.setAttribute("id", i + vector)
        newColum.textContent = vector;
        let horario = { id: newColum.id, texto: vector, cant: 7 }
        listHorario.push(horario)
        newColum.addEventListener("click", clickcolumna)
    }
    fragment.appendChild(newColum);
    return (newColum);
}


/* function filtrar(a) {
    for (let i = 0; i < tabla[0].length; i++) {
        let currentNumber = tabla[0][i];
        if (currentNumber.nodeName == "TD") {
            ntabla.push(currentNumber)
        }
    }
} */

/* --------------------FUNCION DE ACCION-------------------- */


function clickcolumna(a) {
    /* console.log(listHorario); */
    let k = listHorario.find(h => h.id == a.target.id)
    if (k.cant > 0) k.cant -= 1;
    else alert("no se puede bajar mas");
    console.log(k.cant);
}


/* ------------------------------------------------------------------------------------------------------------------------ */



/* let horas = [];
let nhorarios = [];
let c = 9;
let i = 0
for (i = 0; i <= 9; i++) {
    horas[i] = c++
}

for (i = 0; i <= horas.length - 1; i++) {

    nhorarios.push(horas[i] + ":00")
    nhorarios.push(horas[i] + ":30")

} console.log(nhorarios); */