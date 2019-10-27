var f = new Date();
document.getElementById("fi1").value = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(); 

document.getElementById("Calcular1").addEventListener("click",function(e){
  var fi1 = document.getElementById("fi1").value; 
  var dn1 = document.getElementById("dn1").value;
  document.getElementById("fi1").value = calcDate(fi1, dn1);
});

document.getElementById("Calcular2").addEventListener("click",function(e){
  var fi2 = document.getElementById("fi2").value; 
  var ff2 = document.getElementById("ff2").value;  
  document.getElementById("dn2").value = getDays(fi2, ff2); 
});

document.getElementById("Calcular3").addEventListener("click",function(e){
  var fi3 = document.getElementById("fi3").value; 
  var dh3 = document.getElementById("dh3").value;  
  document.getElementById("fi3").value = calcWorkingDate(fi3, dh3); 
});

document.getElementById("Calcular4").addEventListener("click",function(e){
  var fi4 = document.getElementById("fi4").value; 
  var ff4 = document.getElementById("ff4").value;  
  document.getElementById("dh4").value = getWorkingDays(fi4, ff4); 
});

const MILI = 86400000;
var festivos = ["01-01","01-06","05-01","08-15","10-12","11-01","12-06","12-08","12-25"];

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
  var fecha = new Date(startdate); //Asigna a fecha la variable formato fecha que recoge
  var fechaMS = fecha.getTime(); //Pasa fecha a milisegundos
  var daysMS = days * MILI; //Pasa los días a milisegundos

  var fechaFin = new Date(fechaMS+daysMS);

  var fecha_text = fechaFin.toISOString().substring(0, 10);
  
  return  fecha_text;
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

  var entra = false;
  if(days<0){
    days = days * -1;
    entra = true;
  }
  var i = 0;
  var FechaIn = new Date(startdate);

  while(i<days){
    if(entra){
      FechaIn = new Date(FechaIn.getTime()-MILI);
    }else{
      FechaIn = new Date(FechaIn.getTime()+MILI);
    }
    if(FechaIn.getDay() != 6 && FechaIn.getDay()!=0){
      for(var indice in festivos){
        if(FechaIn.toISOString().substring(5, 10) == festivos[indice]){
          i--;
        }
      }
      i++;
    }
  }
  var fecha_text = FechaIn.toISOString().substring(0, 10);
  return  fecha_text;
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/

function getWorkingDays(startdate, endDate) {

  //días hábiles son las fechas que no caen en uno de los siguientes días: fines de semana, 
  //1 enero, 6 enero, 1 mayo ,15 agosto, 12 octubre, 1 noviembre, 6 diciembre, 8 diciembre y 25 diciembre

  var diasNaturales = getDays(startdate,endDate);
  var FechaIn =  new Date(startdate);
  var restaDias = 0;

  for (i=0;i<diasNaturales;i++){
    if(FechaIn.getDay()==6 || FechaIn.getDay()==0){
      restaDias++;
    }
    else{
      for(var indice in festivos){
        if(FechaIn.toISOString().substring(5, 10) == festivos[indice]){
          restaDias++;
        }
      }
    }
    FechaIn = new Date(FechaIn.getTime()+MILI);
  }

  return diasNaturales - restaDias;
}
