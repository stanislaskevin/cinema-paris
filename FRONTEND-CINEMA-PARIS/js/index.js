const BACKEND_URL = 'http://localhost:3000/cinemas'

const xhr = new XMLHttpRequest();
xhr.open('GET', BACKEND_URL);
xhr.send();

xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.response))
    } else {
        console.log('Une erreur est survenue, Statut de la requête: ' + xhr.status)
    }
})

xhr.addEventListener('error', e => {
    console.log('Une erreur est survenue. Contenue de l\'erreur: ', e)
})














/* Etape 1
const API_URL = 'https://data.iledefrance.fr/api/records/1.0/search/?dataset=les_salles_de_cinemas_en_ile-de-france&rows=50';

const xhr = new XMLHttpRequest();
xhr.open('GET', API_URL);
xhr.send();

xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.response))
    } else {
        console.log('Une erreur est survenue, Statut de la requête: ' + xhr.status)
    }
})

xhr.addEventListener('error', e => {
    console.log('Une erreur est survenue. Contenue de l\'erreur: ', e)
})
*/
