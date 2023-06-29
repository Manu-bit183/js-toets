console.log('main loaded');

const gameOne = {
    name: "Assassin's Creed Mirage", // object 1 met name en price
    price: 59.99
};

const gameTwo = {
    name: 'Call Of Duty Modern Warfare', // object 2 met name en price
    price: 69.99
};

const gameThree = {
    name: 'FIFA 2023 Deluxe Edition', // object 3 met name en price
    price: 79.99
};

const gameFour = {
    name: 'Hogwarts Legacy Deluxe Edition',// object 4 met name en price
    price: 89.99
};

let button = document.querySelector('.cta');
let price = document.querySelector('.total-price');
let sidebox = document.querySelector('.box right-sidebar');

button.addEventListener("click", (event) => {
    button.textContent = `Click count: ${event.detail}`;
});

//De fetch word hier opgehaald
fetch('/json/game.json')
    .then(myData => myData.text())
    .then(textData => showGames(textData));

function showGames(data) {
    console.log(data); // De data word hier in de console gezet 

    let list = '<ul>'
    list = `
    <li>${data.name}</li>
    <li>${data.description}</li>
    <li>${data.price}</li>
    <li>${data.platform}</li>
    `
    list = "</ul>"
    sidebox.innerHTML += list
    return list
};

