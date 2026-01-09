window.onload = function () {

let who = ['Mi madre', 'El ascensor', 'Un repartidor', 'Un vecino'];
let action = ['me llamo', 'tardo un eternidad', 'me paro', 'se quedo parado'];
let what = ['para pedirme un favor', 'sin razon aparente', 'porque necesitaba algo'];
let when = ['en el garaje.', 'justo cuando iba a salir.', 'al llegar al coche.', 'al salir del edificio.', 'al salir.'];

let ex1 =Math.floor(Math.random() * who.length);
let ex2 =Math.floor(Math.random() * action.length);
let ex3 =Math.floor(Math.random() * what.length);
let ex4 =Math.floor(Math.random() * when.length);

document.querySelector("#excuse").innerHTML =( who[ex1] + " " + action[ex2] + " " + what[ex3] + " " + when[ex4] );
}