const CANT_MAX_MASCOTAS = 4;
const CANT_MAX_PERROS = 2;
const CANT_MAX_GATOS = 2;
const CANT_MASCOTAS_DEF = 0;
const PASEO_TIEMPO_MIN = 30;
const PASEO_TIEMPO_MAX = 60;
const PASEO_TIEMPO_DEF = 0;
const PRECIO_PERRO = 50;
const PRECIO_GATO = 50;
const COSTO_POR_MINUTO = 2;
const AUMENTO_GATOS = 1.7;

let precios = confirm("Precios actualizados : \nPerros = 50 dolares \nGatos = 50 dolares");
let aviso = confirm("Aviso importante : Aumento de 70% por minuto de paseo en gatos");
let aviso2 = confirm("Costo por minuto de paseo es de 2 dolares");
let cantDeMascotas1 = prompt("Ingrese la cantidad de perros");
let cantDeMascotas2 = prompt("Ingrese la cantidad de gatos");
let cantDeTiempo = prompt("Cuanto minutos le gustaria pasear a su mascotas?");
let feriaCoin = confirm("Bienvenido al portal de feriaCoin");


if ((cantDeMascotas1 <= CANT_MAX_PERROS) && (cantDeMascotas2 <= CANT_MAX_GATOS ) && (cantDeMascotas1 > CANT_MASCOTAS_DEF) &&
     (cantDeMascotas2 > CANT_MASCOTAS_DEF) && (cantDeTiempo >= PASEO_TIEMPO_MIN) && (cantDeTiempo <= PASEO_TIEMPO_MAX)) {
    document.write(("Su pago mediante feriacoin fue exitoso : monto total " + 
    (((cantDeMascotas1 * PRECIO_PERRO) + (cantDeTiempo * COSTO_POR_MINUTO)) + (cantDeMascotas2 * PRECIO_GATO) +
    ((cantDeTiempo * COSTO_POR_MINUTO * AUMENTO_GATOS)) + " dolares")));
}

else {
    document.write("Su pago no se efectuo : algun dato es incorrecto intente nuevamente");
}