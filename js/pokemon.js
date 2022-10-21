const formu = document.getElementById("pokeForm");
let miBola = document.getElementById("pokebola");

function myFetch(id) {
  let cadena = "https://pokeapi.co/api/v2/pokemon/" + id;
  fetch(cadena)
    .then((response) => response.json())
    .then((pokeData) => {
      atrapalo(pokeData);
    });
}

function createTypes(types, cajita) {
  types.forEach(function (type) {
    let typeDet = document.createElement("li");
    typeDet.innerText =
      type["type"]["name"].charAt(0).toUpperCase() +
      type["type"]["name"].slice(1);
    cajita.append(typeDet);
  });
}

function atrapalo(pokeData) {
  let pokeTypes = document.createElement("p");
  pokeTypes.classList.add("centrado");
  createTypes(pokeData.types, pokeTypes);
  let pokeName = document.createElement("h2");
  pokeName.innerText =
    pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);
  let pokeImage = document.createElement("img");
  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`;
  miBola.append(pokeName, pokeImage, pokeTypes);
}

formu.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  myFetch(e.target[0].value);
});

function limpiarFormulario() {
  formu.reset();
  miBola.innerHTML = "";
  myFetch("11");
}

myFetch("11");
