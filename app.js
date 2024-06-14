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
    })
    .catch((err) => {
      console.log(err);
    });
card.innerHTML = 

})