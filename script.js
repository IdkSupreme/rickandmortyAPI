let txtCharacter = document.getElementById("txt-character");
let containerCards = document.getElementById("containerCards");
let URL1 = "https://rickandmortyapi.com/api/character";
let URL2 = "https://rickandmortyapi.com/api/character/?name=";

const getApi = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();

    return data.results;
}

let createCards = (character) => {
    let card = document.createElement("div");
    card.classList.add("card-character");

    let imgCard = document.createElement("img");
    imgCard.src = character.image;
    imgCard.alt = character.name;

    let containerDescription = document.createElement("div");
    containerDescription.classList.add("description-card");

    let nameCharacter = document.createElement("h2")
    nameCharacter.textContent = character.name
    let genderCharacter = document.createElement("p")
    genderCharacter.textContent = character.gender
    let specieCharacter = document.createElement("p")
    specieCharacter.textContent = character.species

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);
    containerDescription.appendChild(specieCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);
} 

let generaCharacter = async () => {
    let data = await getApi(URL1);
    data.map( character => createCards(character));
}

let getByName = async () => {
    containerCards.innerHTML = "";
    let data = await getApi(URL2+event.target.value);
    data.map(character => createCards(character));
}

window.addEventListener('DOMContentLoaded', generaCharacter);
txtCharacter.addEventListener('keyup', getByName);








