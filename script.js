const userInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const typesContainer = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const spriteContainer = document.getElementById('sprite-container');

const typesClasses = document.querySelectorAll('.type');

const testBtn = document.getElementById('test-btn');

const pokemonURL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon'

const fetchPokemonData = async () => {
    let input = userInput.value.toLowerCase();
    try {
        const res = await fetch(`${pokemonURL}/${input}/`);
        const data = await res.json();
        deconIdNameURL(data);
    }
    catch (err) {
        console.log(err);
        alert('Pokemon not found');
    }
};

const deconIdNameURL = (data) => {
    let pokeToFind = userInput.value.toLowerCase();
    const {height, id, name, order, sprites, stats, types, weight} = data;
    pokemonName.textContent = name.toUpperCase();
    pokemonId.textContent = '#' + id;
    pokemonHeight.textContent = 'height: '+ height;
    pokemonWeight.textContent = 'weight: '+ weight;
    spriteContainer.innerHTML = `<img class="sprite" src="${sprites['front_default']}" alt="an image of ${name}">`;
    typesClasses.forEach((type, index) => {
        type.textContent = types[index].type.name;
        type.classList.add(`${types[index].type.name}`);
    });
    hp.textContent = stats[0].base_stat;
    attack.textContent = stats[1].base_stat;
    defense.textContent = stats[2].base_stat;
    specialAttack.textContent = stats[3].base_stat;
    specialDefense.textContent = stats[4].base_stat;
    speed.textContent = stats[5].base_stat;
};



/* const fetchPokemonDetails = async (url) => {
    try {
        const res = await fetch(url);
        const dataDetails = await res.json();
        pokemonINFO(dataDetails)
    }
    catch (err) {
        console.log(err);
    }
};

const pokemonINFO = (dataDetails) => {
    for(const pokeDetails of dataDetails) {
        const {height, id, name, order, sprites, stats, weight} = pokeDetails;
        console.log('this is the height', height);
    }
}; */




fetchPokemonData();




// ORIGINAL FETCH CODE UNMODIFIED

/* const fetchPokemonData = async () => {
    try {
        const res = await fetch(pokemonURL);
        const data = await res.json();
        deconIdNameURL(data);
    }
    catch (err) {
        console.log(err);
    }
};

const deconIdNameURL = (data) => {
    let pokeToFind = userInput.value.toLowerCase();
    const {results} = data;
    
    for(const pokemon of results) {
        const {id, name, url} = pokemon;
        if(Number(pokeToFind) === id || pokeToFind === name) {
            console.log('Pokemon found:', name ,url);
            return url;
        }
    }
    console.log('Pokemon not found');
    return null;
}; */