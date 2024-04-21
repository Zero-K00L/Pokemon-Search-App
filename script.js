const userInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('specialAttack');
const specialDefense = document.getElementById('specialDefense');
const speed = document.getElementById('speed');
const spriteContainer = document.getElementById('sprite-container');

const testBtn = document.getElementById('test-btn');

const pokemonURL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon'

const fetchPokemonData = async () => {
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





/* const deconIdNameURL = (data) => {
    let pokeToFind = userInput.value;
    const {count, results} = data;
    results.forEach((pokemon) => {
        const {id, name, url} = pokemon;
        if(Number(pokeToFind) === id || pokeToFind === name) {
            console.log('Pokemon found:', name ,url);
            return url;
        }
        else {
            console.log('false');
            return false;
        }
    });
};




const fetchPokemonDetails = async () => {
    try {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        
    }
    catch (err) {
        console.log(err);
    }
} */