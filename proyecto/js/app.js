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

function actualizarVistaOperador(){
     if (turno_actual !== null && turno_actual !== undefined) {
        document.getElementById("actualOperador").textContent = turno_actual.valor;
        document.getElementById("tipoAtencionOperador").textContent = turno_actual.tipo_turno;
    }
    else {
        document.getElementById("actualOperador").textContent = "No hay turnos";
        document.getElementById("tipoAtencionOperador").textContent = "No hay turnos";
    }
    document.getElementById("colaOperador").textContent = Fila_turnos.length;
    document.getElementById("atendidosOperador").textContent = personas_atendidas;
}


function siguienteTurno(){
    if (Fila_turnos.length !== 0) {
        personas_atendidas = personas_atendidas + 1;
        turno_actual = Fila_turnos.shift();
    }
    else{
        turno_actual = null;
    }
    actualizarVistaPantalla();
    actualizarVistaOperador();
}

actualizarVistaOperador();
