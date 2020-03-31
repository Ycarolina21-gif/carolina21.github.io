const requestURL = 'https://ycarolina21-gif.github.io/carolina21.github.io/Final/Activities.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const Activity = jsonObject['Activity'];
    for (let i = 0; i < Activity.length; i++ ) {
      if (Activity[i].name == "Whitewater Rafting" || Activity[i].name == "Kayaking"||  Activity[i].name == "Jet Boat tour") {
        let card = document.createElement('section');
        card.setAttribute('class', 'reservationsection');
        
        let image = document.createElement('img');
        image.setAttribute('class', 'Reserphoto');
        image.setAttribute('src', "images/" + Activity[i].photo);
       card.appendChild(image);
       document.querySelector('div.inf').appendChild(card);
        
        let carddiv = document.createElement('div')
        card.appendChild(carddiv);
     
        let h2 = document.createElement('h2');
      h2.setAttribute('class', 'Activityname');
        h2.textContent = Activity[i].name;
        carddiv.appendChild(h2);
        
        let SkillLevel  = document.createElement('p');
        SkillLevel.setAttribute('class', 'ActivitySkillLevel');
        SkillLevel.textContent = "Skill Level: " + Activity[i].SkillLevel;
            carddiv.appendChild(SkillLevel);
            
       let Length  = document.createElement('p');
       Length.setAttribute('class', 'ActivityLength');
       Length.textContent = "Length: "  + Activity[i].Length + "miles";
        carddiv.appendChild(Length);
        
        let Cost = document.createElement('p');
        Cost.setAttribute('class', 'ActivityCost');
        Cost.textContent = "Cost:$ " + Activity[i].Cost;
        carddiv.appendChild(Cost);

        let MinimumAge = document.createElement ('p');
        MinimumAge.setAttribute('class', 'ActivityMinimumAge');
        MinimumAge.textContent = "Minimum Age: "  + Activity[i].MinimumAge + "years";
        carddiv.appendChild(MinimumAge);

        document.querySelector('div.inf').appendChild(card);

  }}}); 
 ;

 