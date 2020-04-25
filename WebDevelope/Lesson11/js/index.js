const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" ||  towns[i].name== "Soda Springs") {
        let card = document.createElement('section');
        card.setAttribute('class', 'townsection');
        let carddiv = document.createElement('div')
        card.appendChild(carddiv);
      let h2 = document.createElement('h2');
      h2.setAttribute('class', 'townname');
        h2.textContent = towns[i].name;
        carddiv.appendChild(h2);
 
        let motto  = document.createElement('h3');
      motto.setAttribute('class', 'townmotto');
      motto.textContent = towns[i].motto;
            carddiv.appendChild(motto);
            
       let yearFounded  = document.createElement('p');
       yearFounded.setAttribute('class', 'towninfo');
        yearFounded.textContent = "Year Founded: "  + towns[i].yearFounded;
        carddiv.appendChild(yearFounded);
        
        let currentPopulation = document.createElement('p');
        currentPopulation.setAttribute('class', 'towninfo');
        currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
        carddiv.appendChild(currentPopulation);

        let averageRainfall = document.createElement ('p');
        averageRainfall.setAttribute('class', 'towninfo');
        averageRainfall.textContent = "Average RainFall: "  + towns[i].averageRainfall;
        carddiv.appendChild(averageRainfall);

        let image = document.createElement('img');
        image.setAttribute('class', 'townphoto');
        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', "picture of: " + h2.textContent);
       card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

  }}}); 
 ;

 