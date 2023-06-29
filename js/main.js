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
        
    }
    console.log(data); // De data word hier in de console gezet 
    sidebar.innerHTML = "<p>" + data.games + "</p>";
};

price.innerHTML += 0;

let count = 0; // Dit is de count van hoeveel games je hebt
let plus = 1; // Dit komt er elke keer bij 
result = count + plus;


button.addEventListener("click", () => {
    button.textContent = count + result++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    price.textContent = count + result++// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});

secondbutton.addEventListener("click", () => {
    secondbutton.textContent = count + result++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    secondprice.textContent = count + result++// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});

thirthbutton.addEventListener("click", () => {
    thirthbutton.textContent = count + result++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    thirthprice.textContent = count + result++// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});

forthbutton.addEventListener("click", () => {
    forthbutton.textContent = count + result++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    forthprice.textContent = count + result++// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
});


