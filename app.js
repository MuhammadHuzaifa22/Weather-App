// dae9933c87e147abadb51806241406

const city = document.querySelector('#city');
const form = document.querySelector('form');
const card = document.querySelector('.card');


form.addEventListener('submit',function(event){
event.preventDefault();
axios(
    `http://api.weatherapi.com/v1/current.json?key=dae9933c87e147abadb51806241406&q=${city.value}&aqi=no`
  )
    .then((res) => {
      console.log(res.data);
      card.innerHTML = `<div class="card d-flex justify-content-center" style="width: 22rem;">
      <div class="card-body">
        <h2 class="card-title">${res.data.location.name}</h2>
        <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
      `
    })
    .catch((err) => {
      console.log(err);
    });
})