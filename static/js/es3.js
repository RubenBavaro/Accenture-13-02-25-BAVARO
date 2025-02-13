/*
Esercizio 3: Chiamata API Async/Await
Obbiettivo: Recuperare dati da più endpoint conteporaneamente.
Istruzioni:
    1. Effetua più chiamate API.
    2. Usa Promise.all per eseguirle in parallelo.
    3. Gestisci la risposta combinata.

*/

setTimeout(() => {
    console.log("ESERCIZIO N.3")

async function fetchAllData() {
    try{
        const urls = [
            'https://jsonplaceholder.typicode.com/posts/1',
            'https://jsonplaceholder.typicode.com/posts/2',
            'https://jsonplaceholder.typicode.com/posts/3'
        ] 
        
        const richieste = urls.map(url => fetch(url).then(res => res.json()))

        const dati = await Promise.all(richieste);
        console.log("Dati ricevuti", dati);
    } catch(error){
        console.log(error);
    }
}

fetchAllData();
}, "4000");