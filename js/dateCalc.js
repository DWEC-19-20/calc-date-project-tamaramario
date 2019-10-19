var f = new Date();
document.getElementById("fi1").value = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(); 

document.getElementById("Calcular1").addEventListener("click",function(e){
  var fi1 = document.getElementById("fi1").value; 
  var dn1 = document.getElementById("dn1").value;
  document.getElementById("ff1").value = calcDate(fi1, dn1); 
});

document.getElementById("Calcular2").addEventListener("click",function(e){
  var fi2 = document.getElementById("fi2").value; 
  var ff2 = document.getElementById("ff2").value;  
  document.getElementById("dn2").value = getDays(fi2, ff2); 
});

document.getElementById("Calcular3").addEventListener("click",function(e){
  var fi3 = document.getElementById("fi3").value; 
  var dh3 = document.getElementById("dh3").value;  
  document.getElementById("ff3").value = calcWorkingDate(fi3, dh3); 
});

document.getElementById("Calcular4").addEventListener("click",function(e){
  var fi4 = document.getElementById("fi4").value; 
  var ff4 = document.getElementById("ff4").value;  
  document.getElementById("dh4").value = getWorkingDays(fi4, ff4); 
});

const MILI = 86400000;
const MILI_YEAR = 31556900000;



/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
  var fecha = new Date(startdate); //Asigna a fecha la variable formato fecha que recoge
  var fechaMS = fecha.getTime(); //Pasa fecha a milisegundos
  var daysMS = days * MILI; //Pasa los días a milisegundos
  return new Date(fechaMS+daysMS).toLocaleDateString("es-ES"); //Devuelve la suma de los milisegundos en formato fecha
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {
  var FechaIn = new Date(startdate);
  var FechaFin = new Date(endDate);

  var fechaInMS = FechaIn.getTime();
  var fechaFiMS = FechaFin.getTime();

   return (fechaFiMS-fechaInMS)/MILI;
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) { 
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
   return 0;
}

