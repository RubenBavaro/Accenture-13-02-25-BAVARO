/*
Esercizio 1: Chiamata API con Async/Await
Obbietivo: Creare una funzione asincrona che recuperi dati da JSONPlaceholder.
Istruzioni:
    1. Usa fetch per ottenere i dati.
    2. Usa await per sospendere l'esecuzione fino alla risoluzione della Promise.
    3. Gestisci eventuali errori con un blocco try/catch.
*/

setTimeout(() => {
    console.log("ESERCIZIO N.1")

    async function fetchData() {
        try{
            const risposta = await fetch('https://jsonplaceholder.typicode.com/posts/');
            if (!risposta.ok) throw new Error("Error!");
            const dati = await risposta.json();
            console.log("Dati ricevuti", dati);
        } catch(error){
            console.log(error);
        }
    }
    
    fetchData();  
}, "1000");
