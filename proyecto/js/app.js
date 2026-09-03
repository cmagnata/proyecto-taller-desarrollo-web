let turno_actual = null; 
let personas_atendidas = 0;
let Fila_turnos = [];



function actualizarVistaPantalla(){
    if (turno_actual !== null) {
        document.getElementById("numeroModulo").textContent = turno_actual.valor;
        document.getElementById("tipoAtencion").textContent = turno_actual.tipo_turno;
    }
    else {
        document.getElementById("numeroModulo").textContent = "No hay turnos";
        document.getElementById("tipoAtencion").textContent = "No hay turnos";
    }
    document.getElementById("cantidadCola").textContent = Fila_turnos.length;
    document.getElementById("cantidadAtendidos").textContent = personas_atendidas;
}

actualizarVistaPantalla();

