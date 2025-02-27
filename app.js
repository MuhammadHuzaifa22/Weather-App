// dae9933c87e147abadb51806241406
const city = document.querySelector('#city');
const form = document.querySelector('form');
const cardsContainer = document.querySelector('#cards-container');
const hthree = document.querySelector('h3');
let searchArray = [];
let searchIndex = 0;
let tenSearchIndex = 0;
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if(city.value === ''  ){
    alert("Please input "+toUnicodeVariant('City name', 'bold sans', 'bold'));
  }

  
  axios(
    `https://api.weatherapi.com/v1/current.json?key=dae9933c87e147abadb51806241406&q=${city.value}&aqi=no`
  )
  
  .then((res) => {
    console.log(res.data);
    
    // Create the card container
    let card = document.createElement('card')
    card.classList.add('card', 'd-flex', 'justify-content-center');
    card.style.width = '18rem';
    card.style.border = '1px solid #000';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)';
  card.style.textShadow = ' 2px 2px 4px white'
    let arrAY = [];

    // Set the inner HTML of the card directly
    card.innerHTML = `
    <button class="delete-button">
    <svg
    class="bin-top"
    viewBox="0 0 39 7"
    
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
    <line
    x1="12"
    y1="1.5"
    x2="26.0357"
      y2="1.5"
      stroke="white"
      stroke-width="3"
    ></line>
  </svg>
  <svg
    class="bin-bottom"
    viewBox="0 0 33 39"
    fill="none"
    xmlns="https://www.w3.org/2000/svg"
    >
    <mask id="path-1-inside-1_8_19" fill="white">
    <path
        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
      ></path>
      </mask>
      <path
      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
      fill="white"
      mask="url(#path-1-inside-1_8_19)"
      ></path>
      <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
      <path d="M21 6V29" stroke="white" stroke-width="4"></path>
      </svg>
      </button>
      <div class="FG">
      <div class="card-body">
        <h2 class="card-title">${res.data.location.name}</h2>
        <h6 class="card-subtitle mb-2 card-text" style="font-weight: lighter;">
          ${res.data.location.localtime}, ${res.data.location.country}
        </h6>
        <h4>Country: ${res.data.location.country}</h4>
        <div class="cardFlex">
          <h3>${res.data.current.temp_c}°C</h3>
          <img width="160px" src="${res.data.current.condition.icon}">
        </div>
        <h4>${res.data.current.condition.text}</h4>
      </div>
      <div class="more-info-container" style="display: none;">
      <h4>Temperature in fahrenheit <i class="fa-solid fa-temperature-low" style="color:blue"></i>: ${res.data.current.temp_f}°F</h4>
      <h6>Humidity <i class="fa-solid fa-cloud-showers-heavy" style="color:blue"></i>: ${res.data.current.humidity}% </h6>
      <div class"FC">
      <p style="margin-top:1%">Wind Speed In Mph <i class="fa-solid fa-wind" style="color:blue"></i>: ${res.data.current.wind_mph} mph(Meter Per Hour)</p>
      <p>Wind Speed In Kph <i class="fa-solid fa-wind" style="color:blue"></i>: ${res.data.current.wind_kph} kph(Killo Meter Per Hour)</p>
      <p>Feelslike In Celsius: ${res.data.current.feelslike_c}°C</p>
      <p>Feelslike In Fahrenheit: ${res.data.current.feelslike_f}°F</p>
      </div>
      <div class="last">
      <h5>Last Updated: ${res.data.current.last_updated}</h5>
      </div>
      </div>
      <button class="more-info-button">Show More <i class="fa-solid fa-angle-down"></i></button>
      </div>
      `;
      const now = new Date();
      const localDate = now.toLocaleDateString();
      var localTime = now.toLocaleTimeString();
      searchIndex = 1;
      searchArray.push(searchIndex)
      console.log(searchArray)
      console.log(searchIndex)
      tenSearchIndex++
      console.log(tenSearchIndex)
      const ht = document.querySelector('.ht');
      
      if(searchIndex > 0){
       var localTime = now.toLocaleTimeString();
       ht.style.display ='none';
       ht.innerHTML = `You searched ${searchIndex} card at <span id="sP">${localTime}</span>`
       localStorage.setItem('Searched',JSON.stringify(ht.innerHTML))
      }


if(tenSearchIndex % 10 == 0 ){
  var newNow = new Date()
  var newlocalTime = newNow.toLocaleTimeString();
  ht.innerHTML = `You searched ${tenSearchIndex} cards at ${localTime}`
  console.log(ht.innerHTML)
  localStorage.setItem('Searched2',JSON.stringify(ht.innerHTML))

}

      localStorage.setItem('LocalTimeRes',JSON.stringify(localTime));
    localStorage.setItem('LocalDateRes',JSON.stringify(localDate))

    let abc = [];
    const userCity = `${res.data.location.name}`;
    abc.push(userCity);
    console.log(abc)
    if(abc != null){
      localStorage.setItem('abc',JSON.stringify(abc))
    }
    let abctwo = [];
    const userTemp = `${res.data.current.temp_c}°C`;
    console.log(localTime)
    abctwo.push(userTemp);
    if(abctwo != null){

      localStorage.setItem('abctwo',JSON.stringify(abctwo));
    }
let abcthree = [];
// Get local date
console.log(localDate); // This prints the current date in your local format
abcthree.push(localDate)
if(abcthree != null){
  localStorage.setItem('abcthree',JSON.stringify(abcthree))

}


      city.value = ''   

      // Append the card to the cards container
      cardsContainer.appendChild(card);


      // Attach event listener to the "More Info" button
      const moreInfoButton = card.querySelector('.more-info-button');
      const moreInfoContainer = card.querySelector('.more-info-container');
      moreInfoButton.addEventListener('click', function() {
      if (moreInfoContainer.style.display === 'none') {
        moreInfoContainer.style.display = 'block';
        moreInfoButton.innerHTML = 'Show Less <i class="fa-solid fa-angle-up" ></i>';
        
      } else {
        moreInfoContainer.style.display = 'none';
        moreInfoButton.innerHTML = 'Show More <i class="fa-solid fa-angle-down" ></i>';
      }
    });
    
    let del = 0;
    const deleteButton = card.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
      card.remove();
      del++
      localStorage.setItem('ResName',JSON.stringify(`${res.data.location.name}`));
      localStorage.setItem('ResTemp',JSON.stringify(`${res.data.current.temp_c}`));
      localStorage.setItem('ResLocalTime',JSON.stringify(`${res.data.location.localtime}`))
      localStorage.setItem('ResCountry',JSON.stringify(`${res.data.location.country}`));
      localStorage.setItem('ResIcon',JSON.stringify(`${res.data.current.condition.icon}`));
      localStorage.setItem('ResCondition',JSON.stringify(`${res.data.current.condition.text}`))
    });
  })
  .catch((err) => {
    console.log(err);
  });
});


