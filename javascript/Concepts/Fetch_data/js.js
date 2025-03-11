fetchData();

async function fetchData() {
    try {
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, sorry could not fetch the resourses`);
      }
      const data = await response.json();
      console.log(data.height);
       const pokemonImage = data.sprites.front_default;
       const imageEle = document.getElementById("pokemonImages");
       imageEle.src = pokemonImage;
       imageEle.style.display = "block";
     } catch(error) {
        console.log(error);
     }
    }
