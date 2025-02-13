/*
Esercizio 2: Simulare una Chiamata Asincrona con Promises
Obbietivo: Creare una funzione che restituisca un dato dopo un timeout.
Istruzioni:
    1. Usa setTimeout per simulare un ritardo.
    2. Implementa la lofica con una Promise.
*/

    setTimeout(() => {
        console.log("ESERCIZIO N.2")

        function chiamataAsincrona() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Dati ricevuti dopo 2 secondi!");
                }, 2000);
            });
        }
        
        chiamataAsincrona()
            .then((dati) => {
                console.log(dati);  
            })
            .catch((errore) => {
                console.error("Si è verificato un errore:", errore);
            });  
    }, "1500");