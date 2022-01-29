// ---------------------------------------------------------------
// Make a div
const myFirstDiv = document.createElement('div');

// add a class of wrapper to it
myFirstDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myFirstDiv);

// ---------------------------------------------------------------
// make an unordered list
// add three list items with the words "one, two, three" in them
const myListHtml = `

    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>

`;
// put that list into the above wrapper
myFirstDiv.innerHTML = myListHtml;

// -- OTRA FORMA --

/* // make an unordered list
const myList = document.createElement("ul");

// add three list items with the words "one, two, three" in them
const li1 = document.createElement("li");
li1.textContent = 'one';
myList.appendChild(li1);
const li2 = document.createElement("li");
li2.textContent = 'two';
myList.appendChild(li2);
const li3 = document.createElement("li");
li3.textContent = 'three';
myList.appendChild(li3);

// put that list into the above wrapper
myFirstDiv.appendChild(myList); */

// ---------------------------------------------------------------
// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://picsum.photos/600';
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
myFirstDiv.appendChild(myImg);

// ---------------------------------------------------------------
// with HTML string, make a div, with two paragraphs inside of it
const p1 = 'Parrafo uno';
const p2 = 'Parrafo dos';

const myHtmlParagraph = `
    <div class= "paragraphDiv">
        <p>${p1}</p>
        <p>${p2}</p>
    </div>
`;

// Selecciono en una constante, el elemento ul que agregue en myFirstDiv.
const myList = myFirstDiv.querySelector('ul');

// put this div before the unordered list from above
myList.insertAdjacentHTML('beforebegin', myHtmlParagraph);

// ---------------------------------------------------------------
// add a class to the second paragraph called warning
// Primero selecciono el div de los parrafos
const paragraphDiv = myFirstDiv.querySelector('.paragraphDiv');
// Selecciono el segundo elemento (parrafo) y agrego class.
paragraphDiv.children[1].classList.add('warning');
// remove the first paragraph
paragraphDiv.children[0].remove();
// Otra opcion
// paragraphDiv.firstElementChild.remove();

// ---------------------------------------------------------------
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name = '', age = 0, height = 0) {
        // have that function return html that looks like this:
        // <div class="playerCard">
        //   <h2>NAME — AGE</h2>
        //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
        // </div>

        const html = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age * 7}. 
               That would be a tall dog!</p>
            <button class= "deleteButton type="button">&times Delete</button>
        </div>
    `;
        return html;
}

// ---------------------------------------------------------------
// make a new div with a class of cards
const mySecondDiv = document.createElement('div');

mySecondDiv.classList.add('cards');

// ---------------------------------------------------------------
// make 4 player cards using generatePlayerCard

let cardsHtmlString = generatePlayerCard('Dona', 22, 172);
cardsHtmlString += generatePlayerCard('Leo', 34, 182);
cardsHtmlString += generatePlayerCard('Rafa', 17, 169);
cardsHtmlString += generatePlayerCard('Mig', 28, 189);

// ---------------------------------------------------------------
// append those cards to the div
mySecondDiv.innerHTML = cardsHtmlString;
// document.body.appendChild(mySecondDiv);

// put the div into the DOM just before the wrapper element
myFirstDiv.insertAdjacentElement('beforebegin', mySecondDiv);

// ---------------------------------------------------------------

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.deleteButton');
// make out delete function
function deleteCard(event) {
        const buttonClickeado = event.currentTarget;
        buttonClickeado.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
