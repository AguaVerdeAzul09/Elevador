var piso_seleccionado;
const primer_piso = 1;
const ultimo_piso = 20;

var direccion = prompt ('¿Subes o bajas');
piso_seleccionado = prompt ("¿A que piso va?");

if (direccion==="subes") {

	for (var piso_actual = 1; piso_actual<= ultimo_piso; piso_actual++) {

	console.log("Estas en el piso "+piso_actual);

	    if (piso_actual==piso_seleccionado) {
		alert ("llegaste"+piso_seleccionado);
	    }
    }
} else if (direccion=="bajas"){

   for (piso_actual = 20; piso_actual>= primer_piso; piso_actual--) {

	    console.log("Estas en el piso "+piso_actual);

	    if (piso_actual==piso_seleccionado) {
		alert ("llegaste");
	    }
    }
 } 