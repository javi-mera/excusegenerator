      
   
window.onload = function() {
    let who =['Sergio', 'Sara', 'Luis', 'Miguel'];     
    let action =['gritaba','lloraba','fumaba', 'soñaba'];     
    let where =['en medio de la carretera','en mitad del bosque', 'en medio de la nada', 'en lo alto de la montaña'];     
    let when = ['antes de clase','después de un buen rato','a la hora de la cena', 'mientras hacía el pino']; 

    document.getElementById("excusa").innerHTML = createExcuse(who, action, where, when);
    return createExcuse(who, action, what, when);
}


function createExcuse(a) {
  let excuse = "";
  for (let i = 0; i < arguments.length; i++) {
    let arr = arguments[i];
    let palabra = randomText(arr);
    excuse = excuse + " " + palabra;
  }
  return excuse;
}



function randomText(a) {
  let randomNumber = Math.floor(Math.random() * a.length);
  let palabra = a[randomNumber];
  return palabra;
}
