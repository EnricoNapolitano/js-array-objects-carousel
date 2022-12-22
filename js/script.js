/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.
Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
PS :avviso: Vi ricordo anche qui che l'orario dei ticket oggi è ridotto: 15:00 - 17:00
*/

//* DOMS ELEMENT
const jumboElm = document.querySelector('#main-carousel .jumbotron');
const arrowUp = document.querySelector('#main-carousel .arrow.up');
const arrowDwn = document.querySelector('#main-carousel .arrow.down');

//* ARRAYS
const gamesImage = data.map(image => image.image);
const gamesTitle = data.map(title => title.title);
const gamesText = data.map(text => text.text);

let j = 0;
const jumbo =`
    <img src="${gamesImage[j]}" alt="${gamesTitle[j]}">
    <div class="jumbo-text">
        <h1>${gamesTitle[j]}</h1>
        <p>${gamesText[j]}</p>
    </div>
    `;
jumboElm.innerHTML= jumbo;


arrowDwn.addEventListener('click', function(){
    j++;
    if (j > gamesImage.length - 1) {
      j = 0;
    }
    const jumbo =`
      <img src="${gamesImage[j]}" alt="${gamesTitle[j]}">
      <div class="jumbo-text">
          <h1>${gamesTitle[j]}</h1>
          <p>${gamesText[j]}</p>
      </div>
      `;
    jumboElm.innerHTML = jumbo;
})


arrowUp.addEventListener('click', function(){
    j--;
    if (j < 0) {
        j = gamesImage.length - 1;
    }
    const jumbo =`
    <img src="${gamesImage[j]}" alt="${gamesTitle[j]}">
      <div class="jumbo-text">
          <h1>${gamesTitle[j]}</h1>
          <p>${gamesText[j]}</p>
      </div>
    `;
    jumboElm.innerHTML = jumbo;
})
