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

// alle 14 querySelctors
let firstBtn = document.querySelector('.first'); // buttons van de cards
let secondBtn = document.querySelector('.second'); // buttons van de cards
let thirdBtn = document.querySelector('.thirth'); // buttons van de cards
let forthBtn = document.querySelector('.forth'); // buttons van de cards
let min1Btn = document.querySelector('.min-1'); // buttons van de cards
let min2Btn = document.querySelector('.min-2'); // buttons van de cards
let min3Btn = document.querySelector('.min-3'); // buttons van de cards
let min4Btn = document.querySelector('.min-4'); // buttons van de cards
let inclusive = document.querySelector('.every-game'); // rechter sidebar in html
let price = document.querySelector('.total-price1'); // rechter sidebar in html
let secondprice = document.querySelector('.total-price2'); // rechter sidebar in html
let thirthprice = document.querySelector('.total-price3'); // rechter sidebar in html
let forthprice = document.querySelector('.total-price4'); // rechter sidebar in html
let total = document.querySelector('.total'); // rechter sidebar in html
let number =document.querySelector('.game'); // rechter sidebar in html
let sidebar = document.querySelector('.games'); // linker siderbar in html

let array = [gameOne,gameTwo,gameThree,gameFour];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    inclusive.innerHTML += `<p class="price-item"> + ${element.name}, &euro;${element.price} </p>`;// Dit zorgt ervoor dat het zicht baar is op de pagina`
}

//De fetch word hier opgehaald
fetch('/json/game.json') //json data word opgehaald
    .then(myData => myData.json())
    .then(jsonData => showInPage(jsonData));

//met dit geeft het alleen object aan daarom hierbenden
function showInPage(data) {
    for (let i = 0; i < data.games.length; i++) {
        const game = data.games[i];
        console.log(game);// De data word hier in de console gezet
        sidebar.innerHTML += `<p class="price-item"> + ${game.name}:${game.description} en wlke platform:${game.platform}: &euro;${game.price} </p>`;// Dit zorgt ervoor dat het zicht baar is op de pagina
    };

};

let count = 0; // Dit is de count van hoeveel games je hebt
let count2 = 0; // Dit is de count van hoeveel games je hebt
let count3 = 0; // Dit is de count van hoeveel games je hebt
let count4 = 0; // Dit is de count van hoeveel games je hebt
let plus = 1; // Dit komt er elke keer bij 
let plus2 = 1; // Dit komt er elke keer bij 
let plus3 = 1; // Dit komt er elke keer bij 
let plus4 = 1; // Dit komt er elke keer bij 
let minus = 1;// Dit gaat er elke keer af
let minus2 = 1;// Dit gaat er elke keer af
let minus3 = 1;// Dit gaat er elke keer af 
let minus4 = 1;// Dit gaat er elke keer af

// Dit is voor de plus button 
firstBtn.addEventListener("click", function () {
    firstBtn.textContent = count;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    price.textContent = count + plus++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    game.innerHTML = gameOne.price; // verandert de totale price
});

// Dit zorgt ervoor dat de aantal naar beneden gaat
min1Btn.addEventListener("click", function () {
    min1Btn.textContent = count;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    price.textContent = count - minus--;// Zorgt ervoor dat de button de omlaag haald po de pagina
});

// Dit is voor de plus button 
secondBtn.addEventListener("click", function () {
    secondBtn.textContent = count;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    secondprice.textContent = count2 + plus2++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    total.innerHTML = gameTwo.price;// verandert de totale price
});

// Dit zorgt ervoor dat de aantal naar beneden gaat
min2Btn.addEventListener("click", function () {
    min2Btn.textContent = count2;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    secondprice.textContent = count2 - minus2--;// Zorgt ervoor dat de button de omlaag haald po de pagina
});

// Dit is voor de plus button 
thirdBtn.addEventListener("click", function () {
    thirdBtn.textContent = count3;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    thirthprice.textContent = count3 + plus3++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    total.innerHTML = gameThree.price;// verandert de totale price
});

// Dit zorgt ervoor dat de aantal naar beneden gaat
min3Btn.addEventListener("click", function () {
    min3Btn.textContent = count3;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    thirthprice.textContent = count3 - minus3--;// Zorgt ervoor dat de button de omlaag haald po de pagina
});

// Dit is voor de plus button 
forthBtn.addEventListener("click", function () {
    forthBtn.textContent = count4;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    forthprice.textContent = count4 + plus4++;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    total.innerHTML += gameOne.price;// verandert de totale price
});

// Dit zorgt ervoor dat de aantal naar beneden gaat
min4Btn.addEventListener("click", function () {
    min4Btn.textContent = count4;// Zorgt ervoor dat de button de nummer omhoog haald op de pagina
    forthprice.textContent = count4 - minus4--;// Zorgt ervoor dat de button de omlaag haald po de pagina
});

total.innerHTML += gameOne.price + gameTwo.price + gameThree.price + gameFour.price