let turno_actual = null; 
let personas_atendidas = 0;
let Fila_turnos = [];

let contadores = {
    "Atencion General": 0,
    "Toma de Muestras": 0,
    "Pagos": 0
};

const letras = {
    "Atencion General": "G",
    "Toma de Muestras": "T",
    "Pagos": "P"
};

document.getElementById("formularioturno").addEventListener("submit", function(event) {
    event.preventDefault();

    const tipo = document.getElementById("tipoAtencion").value;

    if (!tipo) {
        alert("Debes seleccionar un tipo de atención");
        return;
    }

    contadores[tipo]++;

    const nuevoTurno = {
        id: Fila_turnos.length + 1,
        tipo_turno: tipo,
        valor: letras[tipo] + contadores[tipo].toString().padStart(3, "0")
    };

    Fila_turnos.push(nuevoTurno);

    document.getElementById("numeroGenerado").textContent = nuevoTurno.valor;
    document.getElementById("tipoGenerado").textContent = nuevoTurno.tipo_turno;
    document.getElementById("turnoGenerado").classList.remove("d-none");

});
