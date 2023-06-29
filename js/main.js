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

let button = document.querySelector('.cta'); // buttons van de cards
let price = document.querySelector('.total-price'); // rechter sidebar in html
let sidebar = document.querySelector('.games'); // linker siderbar in html

//De fetch word hier opgehaald
fetch('/json/game.json')
    .then(myData => myData.json())
    .then(jsonData => showInConsole(jsonData));

function showInConsole(data) {
    console.log(data); // De data word hier in de console gezet 
    sidebar.innerHTML = "<li>" + data + "</li>";
};

button.innerHTML += `
<div class="table">
    <ul>
        <li>${data.games.price}</li>
    </ul>
</div>
`