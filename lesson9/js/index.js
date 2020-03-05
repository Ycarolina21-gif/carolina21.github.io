const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        
      let h2 = document.createElement('h1');
        h2.textContent = towns[i].name;
        card.appendChild(h2);
 
   
   let motto  = document.createElement('h2');
   motto.textContent = towns[i].motto;
        card.appendChild(motto);
        
       let yearFounded  = document.createElement('p');
        yearFounded.textContent = "Year Founded: "  + towns[i].yearFounded;
        card.appendChild(yearFounded);
        
        let currentPopulation = document.createElement('p');
        currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
        card.appendChild(currentPopulation);

        let averageRainfall = document.createElement ('p');
        averageRainfall.textContent = "Average RainFall: "  + towns[i].averageRainfall;
        card.appendChild(averageRainfall);
        
        let image = document.createElement('img');
        image.setAttribute('src', towns[i].photo);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);
  }});

  