console.log('main loaded');

const gameOne = {
    name: "Assassin's Creed Mirage", // object 1 met name en price
    price: 59.99,
    showprice : function() { alert(this.price); }
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


// alle querySelctors
let button = document.querySelector('.cta'); // buttons van de cards
let secondbutton = document.querySelector('.second'); // buttons van de cards
let thirthbutton = document.querySelector('.thirth'); // buttons van de cards
let forthbutton = document.querySelector('.forth'); // buttons van de cards
let price = document.querySelector('.total-price1'); // rechter sidebar in html
let secondprice = document.querySelector('.total-price2'); // rechter sidebar in html
let thirthprice = document.querySelector('.total-price3'); // rechter sidebar in html
let forthprice = document.querySelector('.total-price4'); // rechter sidebar in html
let sidebar = document.querySelector('.games'); // linker siderbar in html

//De fetch word hier opgehaald
fetch('/json/game.json')
    .then(myData => myData.json())
    .then(jsonData => showInConsole(jsonData));

function showInConsole(data) {
    for (let i = 0; i < data.length; i++) {
        const data = data[i];

    };
    console.log(data); // De data word hier in de console gezet 
    sidebar.innerHTML = "<p>" + data.games+ "</p>"; //met dit geeft het alleen object aan daarom hierbenden
    sidebar.innerHTML = `
    <div>
        <div>
            <div>${"Fortnite: A popular online multiplayer battle royale game with building mechanics. price: 0"}</div>
            <div>${"The Legend of Zelda: Breath of the Wild: A critically acclaimed action-adventure game in the iconic Zelda series. price: 59.99,"}</div>
            <div>${"Grand Theft Auto V:A crime-based action-adventure game set in a sprawling open world. price: 39.99,"}</div>
            <div>${"Minecraft:A sandbox building game that allows players to create and explore virtual worlds. price: 19.99,"}</div>
            <div>${"Red Dead Redemption 2: An immersive open-world game set in the Wild West era. price: 49.99,"}</div>
            <div>${"FIFA 22: Wild Hunt: Breath of the Wild: An epic open-world RPG set in a dark fantasy universe. price: 29.99,"}</div>
            <div>${"Animal Crossing: New Horizons: Wild Hunt: Breath of the Wild: An epic open-world RPG set in a dark fantasy universe. price: 29.99,"}</div>
            <div>${"Assassin's Creed Valhalla: Warzone: Wild Hunt: Breath of the Wild: An epic open-world RPG set in a dark fantasy universe. price: 29.99,"}</div>
            <div>${"Super Mario Odyssey: Wild Hunt: Breath of the Wild: An epic open-world RPG set in a dark fantasy universe. price: 29.99,"}</div>
            <div>${"Cyberpunk 2077: Wild Hunt: Breath of the Wild: An epic open-world RPG set in a dark fantasy universe. price: 29.99,"}</div>
            <div>${"Call of Duty: Warzone: Wild Hunt: Breath of the Wild: An epic open-world RPG set in a dark fantasy universe. price: 29.99,"}</div>
        </div>
    </div>
    `;
};

price.innerHTML += 0;

let count = 0; // Dit is de count van hoeveel games je hebt
let plus = 1; // Dit komt er elke keer bij 
result = count + plus


button.addEventListener("click", function () {
    button.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    price.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});

secondbutton.addEventListener("click", function() {
    secondbutton.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    secondprice.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});

thirthbutton.addEventListener("click", function() {
    thirthbutton.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    thirthprice.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});

forthbutton.addEventListener("click", function() {
    forthbutton.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    forthprice.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});


