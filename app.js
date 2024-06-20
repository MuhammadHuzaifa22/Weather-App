// dae9933c87e147abadb51806241406
const city = document.querySelector('#city');
const form = document.querySelector('form');
const cardsContainer = document.querySelector('#cards-container');
const hthree = document.querySelector('h3');



form.addEventListener('submit', function(event) {
  event.preventDefault();
  if(city.value === ''  ){
    alert("Please input "+toUnicodeVariant('City name', 'bold sans', 'bold'));
  }

  
  axios(
    `http://api.weatherapi.com/v1/current.json?key=dae9933c87e147abadb51806241406&q=${city.value}&aqi=no`
  )
  .then((res) => {
    console.log(res.data);
    
    // Create the card container
    const card = document.createElement('div');
    card.classList.add('card', 'd-flex', 'justify-content-center');
    card.style.width = '18rem';
    card.style.border = '1px solid #000';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)';
    
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
    xmlns="http://www.w3.org/2000/svg"
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
    const top = document.getElementById('top');
    const scroll = document.getElementById('scroll-up');
    top.style.display = 'block';
    scroll.style.display = 'block';

    let abc = [];
    const userCity = `${res.data.location.name}`;
    abc.push(userCity);
    console.log(abc)
    if(abc != null){

      localStorage.setItem('abc',JSON.stringify(abc))
    }
    let abctwo = [];
    const userTemp = `${res.data.current.temp_c}°C`;
    abctwo.push(userTemp);
    if(abctwo != null){

      localStorage.setItem('abctwo',JSON.stringify(abctwo));
    }
let abcthree = [];
const now = new Date();
let abcfour = [];
// Get local date
const localDate = now.toLocaleDateString();
console.log(localDate); // This prints the current date in your local format
abcthree.push(localDate)
if(abcthree != null){
  localStorage.setItem('abcthree',JSON.stringify(abcthree))

}
// Get local time
const localTime = now.toLocaleTimeString();
console.log(localTime); 
abcfour.push(localTime)
if(abcfour != null){
  
}
localStorage.setItem('abcfour',JSON.stringify(abcfour))
    arrAY.push(card.innerHTML)
    localStorage.setItem('CARD',JSON.stringify(arrAY));

 



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
    let Arrray = [];
    const deleteButton = card.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
      card.remove();
      alert("Successfully"+toUnicodeVariant(' Deleted', 'bold sans', 'bold'));
      del++
      
      
    });
  })
  .catch((err) => {
    console.log(err);
  });
});



function toUnicodeVariant(str, variant, flags) {
  const offsets = {
      m: [0x1d670, 0x1d7f6],
      b: [0x1d400, 0x1d7ce],
      i: [0x1d434, 0x00030],
      bi: [0x1d468, 0x00030],
      c: [0x1d49c, 0x00030],
      bc: [0x1d4d0, 0x00030],
      g: [0x1d504, 0x00030],
      d: [0x1d538, 0x1d7d8],
      bg: [0x1d56c, 0x00030],
      s: [0x1d5a0, 0x1d7e2],
      bs: [0x1d5d4, 0x1d7ec],
      is: [0x1d608, 0x00030],
      bis: [0x1d63c, 0x00030],
      o: [0x24B6, 0x2460],
      p: [0x249C, 0x2474],
      w: [0xff21, 0xff10],
      u: [0x2090, 0xff10]
  }

  const variantOffsets = {
      'monospace': 'm',
      'bold': 'b',
      'italic': 'i',
      'bold italic': 'bi',
      'script': 'c',
      'bold script': 'bc',
      'gothic': 'g',
      'gothic bold': 'bg',
      'doublestruck': 'd',
      'sans': 's',
      'bold sans': 'bs',
      'italic sans': 'is',
      'bold italic sans': 'bis',
      'parenthesis': 'p',
      'circled': 'o',
      'fullwidth': 'w'
  }

  // special characters (absolute values)
  var special = {
      m: {
          ' ': 0x2000,
          '-': 0x2013
      },
      i: {
          'h': 0x210e
      },
      g: {
          'C': 0x212d,
          'H': 0x210c,
          'I': 0x2111,
          'R': 0x211c,
          'Z': 0x2128
      },
      o: {
          '0': 0x24EA,
          '1': 0x2460,
          '2': 0x2461,
          '3': 0x2462,
          '4': 0x2463,
          '5': 0x2464,
          '6': 0x2465,
          '7': 0x2466,
          '8': 0x2467,
          '9': 0x2468,
      },
      p: {},
      w: {}
  }
  //support for parenthesized latin letters small cases 
  for (var i = 97; i <= 122; i++) {
      special.p[String.fromCharCode(i)] = 0x249C + (i - 97)
  }
  //support for full width latin letters small cases 
  for (var i = 97; i <= 122; i++) {
      special.w[String.fromCharCode(i)] = 0xff41 + (i - 97)
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  var getType = function (variant) {
      if (variantOffsets[variant]) return variantOffsets[variant]
      if (offsets[variant]) return variant;
      return 'm'; //monospace as default
  }
  var getFlag = function (flag, flags) {
      if (!flags) return false
      return flags.split(',').indexOf(flag) > -1
  }

  var type = getType(variant);
  var underline = getFlag('underline', flags);
  var strike = getFlag('strike', flags);
  var result = '';

  for (var k of str) {
      let index
      let c = k
      if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c])
      if (type && (index = chars.indexOf(c)) > -1) {
          result += String.fromCodePoint(index + offsets[type][0])
      } else if (type && (index = numbers.indexOf(c)) > -1) {
          result += String.fromCodePoint(index + offsets[type][1])
      } else {
          result += c
      }
      if (underline) result += '\u0332' // add combining underline
      if (strike) result += '\u0336' // add combining strike
  }
  return result
}

let userData = localStorage.getItem('users');
console.log(userData);
let userdataJsonparse = JSON.parse(userData);
console.log(userdataJsonparse)
const hone = document.querySelector('h1');

console.log(userdataJsonparse[0].username);
const Nlocal = userdataJsonparse[0].username;
const nLocal = localStorage.setItem('Nlocal',JSON.stringify(Nlocal))
const card1 = document.querySelector('.cCard');
let cardArr = [];
let subIndex = 0;
    if(userdataJsonparse[0].username != null){
      card1.innerHTML = `Hi ${userdataJsonparse[0].username}! thank you for registering  my website <div class="centralize">
      <div>
      <button id="Read">
        <span>Read</span>
        <span><i class="fa-solid fa-check">Read</i></span>
      </button>
      <div>
      
      <div></div></div></div></div></div></div>
      `
      cardArr.push(card1.innerHTML)
      console.log(card1.innerHTML)
      console.log(cardArr)
      let storedUser = localStorage.getItem('cardArr')
let Users = storedUser ? JSON.parse(storedUser) : [];
let UpdatedUsersJSON = JSON.stringify(Users);
localStorage.setItem('cardArr', UpdatedUsersJSON);
console.log(UpdatedUsersJSON)
      for(let i = 0;i < cardArr.length; i++){
        if(cardArr != null){

          card1.style.display = 'none'
          if(cardArr[0]){
            const subicon = document.querySelector('.subicon');
            subIndex++;
            subicon.innerHTML = + subIndex;
            console.log(subicon.innerHTML)
          }
        }
        else{
          hone.style.color = 'red'
          hone.innerHTML = `You have not registered yet`
        }
      }
  
  const read = document.querySelector('#Read');
  read.addEventListener('click',function(event){
    event.preventDefault();
    let storedUsers = localStorage.getItem('users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];
      subIndex--;
      // localStorage.removeItem('username');
      card1.style.display = 'none'
    //   Users.forEach(user => {
    //     if (user.username) {
    //         delete user.username;
    //     }
    // });
    // localStorage.setItem('users', JSON.stringify(Users));
    const subicon = document.querySelector('.subicon');
    subicon.innerHTML = + subIndex;
    // console.log()
  })
}


///////////////////////////////////////////////////////////////////////////////////////

let userDAta = localStorage.getItem('users');
console.log(userDAta);
let userdataJSonparse = JSON.parse(userDAta);
console.log(userdataJSonparse[0].username);
const carD1 = document.querySelector('.cCard');
let cardARr = [];
let subINdex = 0;
    if(userdataJSonparse[0].username != null){
      card1.innerHTML = `Hi ${userdataJSonparse[0].username}! thank you for registering  my website <div class="centralize">
      <div>
      <button id="Read">
        <span>Read</span>
        <span><i class="fa-solid fa-check">Read</i></span>
      </button>
      <div>
      
      <div></div></div></div></div></div></div>
      `

      cardArr.push(carD1.innerHTML)
      console.log(carD1.innerHTML)
      console.log(cardARr)
      let storedUser = localStorage.getItem('cardArr')
let Users = storedUser ? JSON.parse(storedUser) : [];
let UpdatedUsersJSON = JSON.stringify(Users);
localStorage.setItem('cardArr', UpdatedUsersJSON);
      for(let i = 0;i < cardArr.length; i++){
        if(cardArr != null){

          card1.style.display = 'none'
          if(cardARr[0]){
            const subicon = document.querySelector('.subicon');
            subIndex++;
            subicon.innerHTML = + subIndex;
console.log(subicon.innerHTML)
          }
        }
        else{
          hone.style.color = 'red'
          hone.innerHTML = `You have not registered yet`
        }
      }
  
  const read = document.querySelector('#Read');
  read.addEventListener('click',function(event){
      event.preventDefault();
    subIndex--;
    const subicon = document.querySelector('.subicon');
    subicon.innerHTML = + subIndex;
    card1.style.display = 'none'
  });
    
  
}