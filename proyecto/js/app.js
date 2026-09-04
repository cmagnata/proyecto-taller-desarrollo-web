
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