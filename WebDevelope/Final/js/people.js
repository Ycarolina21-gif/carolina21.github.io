const requestURL = 'https://ycarolina21-gif.github.io/carolina21.github.io/Final/People.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const People = jsonObject['People'];
    for (let i = 0; i < People.length; i++ ) {
      if (People[i].name == "John Carson" || People[i].name == "Steve Smith"||  People[i].name == "David Olson") {
        let card = document.createElement('section');
        card.setAttribute('class', 'Peoplesection');
        
        let photo = document.createElement('img');
        photo.setAttribute('class', 'Peoplephoto');
        photo.setAttribute('src', "images/" + People[i].photo);
       card.appendChild(photo);
       document.querySelector('div.blog').appendChild(card);
        
        let carddiv = document.createElement('div')
        carddiv.setAttribute('class', 'Description');
        card.appendChild(carddiv);
        
     
        let h2 = document.createElement('h2');
      h2.setAttribute('class', 'Peoplename');
        h2.textContent = People[i].name;
        carddiv.appendChild(h2);
        
            
       let Years  = document.createElement('p');
       Years.setAttribute('class', 'Years');
       Years.textContent = "Years of experience: "  + People[i].Years + " years";
        carddiv.appendChild(Years);
        
        let Email = document.createElement('p');
        Email.setAttribute('class', 'Email');
        Email.textContent = People[i].Email;
        carddiv.appendChild(Email);

        let Certification  = document.createElement('p');
        Certification.setAttribute('class', 'Certification');
        Certification.textContent = "Certifications: " + People[i].Certification;
            carddiv.appendChild(Certification);

        let Brief = document.createElement ('p');
        Brief.setAttribute('class', 'Brief');
        Brief.textContent = "A little about me: "  + People[i].Brief ;
        carddiv.appendChild(Brief);

        document.querySelector('div.blog').appendChild(card);
        photo.setAttribute('alt', "picture of: " + h2.textContent);

  }}}); 
 ;

 