//* FUNCTIONS
const jumbotron = () => {
    const jumbo =`
    <img src="${gamesImage[j]}" alt="${gamesTitle[j]}">
    <div class="jumbo-text">
        <h1>${gamesTitle[j]}</h1>
        <p>${gamesText[j]}</p>
    </div>
    `;
return jumboElm.innerHTML= jumbo;
};
const thumbnails = () => {
    let thumbs = '';
    for (let i=0; i < gamesImage.length; i++) {
        thumbs += `<li> <img src="${gamesImage[i]}" alt="${gamesTitle[i]}"> </li>`;
    }
    return thumbsList.innerHTML += thumbs;
};



//* DOMS ELEMENT
const jumboElm = document.querySelector('#main-carousel .jumbotron');
const arrowUp = document.querySelector('#main-carousel .arrow.up');
const arrowDwn = document.querySelector('#main-carousel .arrow.down');
const thumbsList = document.querySelector('#main-carousel ul');

//* ARRAYS
const gamesImage = data.map(image => image.image);
const gamesTitle = data.map(title => title.title);
const gamesText = data.map(text => text.text);



let j = 0;
jumbotron(); // this function generates the jumbotron
thumbnails(); // this function generates the thumbsnails

const thumbsArray = document.querySelectorAll('#main-carousel ul li'); //get all the thumbs

//* DINAMIC EVENTS - clicking buttons
//Thumbnails click
thumbsArray.forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
      j=index; // setted a corrispondence between jumbotron j and thumbsArray index
      jumbotron();
      thumbsArray.forEach (thumb => thumb.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

// Arrows click
arrowDwn.addEventListener('click', function(){
    j++;
    if (j > gamesImage.length - 1) {
      j = 0;
    }
    jumbotron();
})
arrowUp.addEventListener('click', function(){
    j--;
    if (j < 0) {
        j = gamesImage.length - 1;
    }
    jumbotron();
})

