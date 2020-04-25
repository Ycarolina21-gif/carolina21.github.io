const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if ( towns[i].name == "Fish Haven") {

        let card = document.getElementById('Events')
        let carddiv = document.createElement('div')
        card.appendChild(carddiv);
     
        let event1 = document.createElement('p');
        event1.textContent =  towns[i].events[0];
        carddiv.appendChild(event1);

        let event2 = document.createElement ('p');
        event2.textContent =  towns[i].events[1];
        carddiv.appendChild(event2);

        let event3 = document.createElement ('p');
        event3.textContent =  towns[i].events[2];
        carddiv.appendChild(event3);

      

  }}}); 
 ;
 