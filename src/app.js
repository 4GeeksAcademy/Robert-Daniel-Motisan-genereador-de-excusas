window.onload = function () {

    const who = ['Mi madre', 'El ascensor', 'Un repartidor', 'Un vecino'];
    const action = ['me llamo', 'tardo un eternidad', 'me paro', 'se quedo parado'];
    const what = ['para pedirme un favor', 'sin razon aparente', 'porque necesitaba algo'];
    const when = ['en el garaje.', 'justo cuando iba a salir.', 'al llegar al coche.', 'al salir del edificio.', 'al salir.'];
    //funcion para generar numeros aleatorios
    const randomNumGenerator = (ArrayforUse) => Math.floor(Math.random() * ArrayforUse.length)
    //funcion para extraer valor del array
    const getRandomValueFromArray = (ArrayforUse) => ArrayforUse[randomNumGenerator(ArrayforUse)]
    //array de las "variables"
    const nouns = [who, action, what, when];
    // genera la excusa
    const excuse = nouns.reduce((acc, array) => {
        return acc + getRandomValueFromArray(array) + " "
    }, "");
    //excusa generada en el html
    document.querySelector("#excuse").innerHTML = (excuse);
}