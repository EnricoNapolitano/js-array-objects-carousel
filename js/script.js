//* FUNCTIONS ----
const createJumbotron = () => {
    const jumbo =`
    <img src="${gamesImage[j]}" alt="${gamesTitle[j]}">
    <div class="jumbo-text">
        <h1>${gamesTitle[j]}</h1>
        <p>${gamesText[j]}</p>
    </div>
    `;
return jumboElm.innerHTML= jumbo;
};
const createThumbnails = () => {
    let thumbs = '';
    for (let i=0; i < gamesImage.length; i++) {
        thumbs += `<li> <img src="${gamesImage[i]}" alt="${gamesTitle[i]}"> </li>`;
    }
    return thumbsList.innerHTML += thumbs;
};
const changeThumb = () => {
    thumbsArray.forEach (thumb => thumb.classList.remove('active'));
    thumbsArray[j].classList.add('active');
};
const changeJumboAuto = () => {
    j < gamesImage.length - 1 ? j++ : j=0;
    createJumbotron();
    changeThumb();
} 


//* DOMS ELEMENT ----
const jumboElm = document.querySelector('#main-carousel .jumbotron');
const arrowUp = document.querySelector('#main-carousel .arrow.up');
const arrowDwn = document.querySelector('#main-carousel .arrow.down');
const thumbsList = document.querySelector('#main-carousel ul');
const play_pauseElm = document.querySelector('.play-pause');

//* ARRAYS ----
const gamesImage = data.map(image => image.image);
const gamesTitle = data.map(title => title.title);
const gamesText = data.map(text => text.text);

let j = 0;

//* PRINTING ON PAGE ----
createJumbotron(); // this function generates the jumbotron
createThumbnails(); // this function generates the thumbsnails

const thumbsArray = document.querySelectorAll('#main-carousel ul li'); //get all the thumbs

//* DINAMIC EVENTS - clicking buttons ----
//Thumbnails click
thumbsArray.forEach((thumb, index) => {
    thumb.addEventListener('click', function() {
      j=index; // jumbotron j and thumbsArray index corrispondence
      createJumbotron();
      changeThumb();
    });
  });

// Arrow Down click
arrowDwn.addEventListener('click', function(){
    j++;
    if (j > gamesImage.length - 1) {
      j = 0;
    }
    createJumbotron();
    changeThumb();
})
//Arrow Up click
arrowUp.addEventListener('click', function(){
    j--;
    if (j < 0) {
        j = gamesImage.length - 1;
    }
    createJumbotron();
    changeThumb();
})

const setInterval_3s = setInterval(changeJumboAuto, 3000); // jumbotron switches image each 3 seconds

let play = true;
play_pauseElm.addEventListener ('click', function(){
    if (play) {
        clearInterval(setInterval_3s)
        play = false;
    } else
        setInterval(setInterval_3s);
        play = true;
});

