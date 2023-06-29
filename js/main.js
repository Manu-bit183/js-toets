console.log('main loaded');

const gameOne = {
    name: "Assassin's Creed Mirage", // object 1 
    price: 59.99
};

const gameTwo = {
    name: 'Call Of Duty Modern Warfare', // object 2
    price: 69.99
};

const gameThree = {
    name: 'FIFA 2023 Deluxe Edition', // object 3
    price: 79.99
};

const gameFour = {
    name: 'Hogwarts Legacy Deluxe Edition',// object 4
    price: 89.99
};

let button = document.querySelector('.cta');
let price = document.querySelector('.total-price');
let games = document.querySelector('.box right-sidebar');

//De fetch word hier opgehaald
fetch('/json/game.json')
.then(myData => myData.text())
.then(textData => showGame(textData));

function showGame(data) {
    console.log(data); // De data word hier in de console gezet
    document.games.innerHTML += "<h2>" +data+ "</h2>"
};