// dae9933c87e147abadb51806241406
const city = document.querySelector('#city');
const form = document.querySelector('form');
const cardsContainer = document.querySelector('#cards-container');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  axios(
    `http://api.weatherapi.com/v1/current.json?key=dae9933c87e147abadb51806241406&q=${city.value}&aqi=no`
  )
  .then((res) => {
    console.log(res.data);

    // Create the card container
    const card = document.createElement('div');
    card.classList.add('card', 'd-flex', 'justify-content-center');
    card.style.width = '22rem';
    card.style.border = '1px solid #000'

    // Set the inner HTML of the card directly
    card.innerHTML = `<div class="FG">
      <div class="card-body">
        <h2 class="card-title">${res.data.location.name}</h2>
        <h6 class="card-subtitle mb-2 card-text" style="font-weight: lighter;">
          ${res.data.location.localtime}, ${res.data.location.country}
        </h6>
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
  })
  .catch((err) => {
    console.log(err);
  });
});
