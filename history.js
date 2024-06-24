const deleteALl = document.getElementById('deleteALl');
// const abC = `${JSON.parse(localStorage.getItem('abc'))}`;
// const abCtwo = `${JSON.parse(localStorage.getItem('abctwo'))}`;
// const abcthree = `${JSON.parse(localStorage.getItem('abcthree'))}`;
// const abcfour = `${JSON.parse(localStorage.getItem('abcfour'))}`;


// addNewCard(abC, abCtwo,abcthree,abcfour);
// function addNewCard(City, Temperature,Searched,Searched2) {
//   // Retrieve existing card data from localStorage or initialize an empty array
//   let existingCards = JSON.parse(localStorage.getItem('existingCards')) || [];

  // const newLocal = {
  //     City:  `${JSON.parse(localStorage.getItem('abc'))}`,
  //     Temperature: `${JSON.parse(localStorage.getItem('abctwo'))}`,
  //     Searched:   `${JSON.parse(localStorage.getItem('abcthree'))}`,
  //     Searched2:  `${JSON.parse(localStorage.getItem('abcfour'))}`

  // };
  
  // console.log(newLocal)

  // // Check if the newLocal data already exists in existingCards
  // const exists = existingCards.some(card => card.City === newLocal.City && card.Temperature === newLocal.Temperature && card.Searched === newLocal.Searched && card.Searched2 === newLocal.Searched2 );
  // console.log(newLocal.City)
  
  // console.log(newLocal.City);
  

    // if (!exists) {
    //   // Push newLocal into existingCards only if it does not already exist

    
      
    //   if (newLocal.City !== null && newLocal.Temperature !== null && newLocal.Searched !== null && newLocal.Searched2 !== null ) {
    //     existingCards.push(newLocal);
    //       console.log(existingCards)
    //       console.log(existingCards[0])
    //       console.log(existingCards[0].City)
    //       const top = document.querySelector('#top');
    //       const scroll = document.getElementById('scroll-up');
    //       top.style.display = 'block';
    // scroll.style.display = 'block';
    //     }
        // localStorage.setItem('existingCards', JSON.stringify(existingCards));
      // Store updated existingCards back to localStorage
      
      // Render all cards after adding new card
      // renderCards(existingCards);
      // }

    // }

  

// Function to render cards from existingCards array
// function renderCards(cards) {
//   const cardContainer = document.getElementById('card-container');

//   // Clear existing HTML inside card-container
//   cardContainer.innerHTML = '';
//   // Ensure there's data to render
  
//   if (cards && cards.length > 0) {
      
//       // Construct HTML for all cards
      

//         let cardHTML = '';
        
//         cards.forEach((card,index) =>{

//           console.log(card.City)
          
//             cardHTML += `
//             <div class="cardp">
//             <div class="card-title Yt">City: ${card.City || 'No card'}</div>
//             <div class="card-content Yh">Temperature: ${card.Temperature || 'No card'}</div>
//             <div class="Yp">
//             <div class="Yu">You searched this at ${card.Searched || 'No card'} on ${card.Searched2 || 'No card'}</div>
//             </div>
//             <div class="del">
//     <div onclick="deleteCard(${index})">
//       Delete
//     </div>     
//       </div>
//             </div>
//             `;
//           });
          
//     //       top.style.display = 'block';
//     // scroll.style.display = 'block';
//           // Append the generated HTML to card-container
//           cardContainer.innerHTML = cardHTML;
//           console.log(cardHTML);

//         }
//             else {
//               // Display message if no cards are found
//               cardContainer.innerHTML = `<h2 style="color:black;margin-top:50px">No card found...</h2>`;
//             }
            
//         }
// // On page load, render existing cards from localStorage
// window.onload = function() {
//   const existingCards = JSON.parse(localStorage.getItem('existingCards')) || [];
//   renderCards(existingCards);
// };















// let userData = localStorage.getItem('users');
// let userdataJsonparse = JSON.parse(userData);
// const hone = document.querySelector('h1');
// const card1 = document.querySelector('.cCard');
// let cardArr = [];
// let subIndex = 0;
// console.log(userdataJsonparse)
//     if(userdataJsonparse){
//       card1.innerHTML = `Hi ${userdataJsonparse[0].username}! thank you for registering  my website <div class="centralize">
//       <div>
//       <button id="Read">
//         <span>Read</span>
//         <span><i class="fa-solid fa-check">Read</i></span>
//       </button>
//       <div>
      
//       <div></div></div></div></div></div></div>
//       `
//       cardArr.push(card1.innerHTML)
//       console.log(card1.innerHTML)
//       console.log(cardArr)
//       let storedUser = localStorage.getItem('cardArr')
//       let Users = storedUser ? JSON.parse(storedUser) : [];
//       let UpdatedUsersJSON = JSON.stringify(Users);
//       localStorage.setItem('cardArr', UpdatedUsersJSON);
//       for(let i = 0;i < cardArr.length; i++){
//         if(cardArr != null){

//           card1.style.display = 'none'
//           if(cardArr[0]){
//             const subicon = document.querySelector('.subicon');
//             subIndex++;
//             subicon.innerHTML = + subIndex;
//             console.log(subicon.innerHTML)
//           }
//         }
//         else{
//           hone.style.color = 'red'
//           hone.innerHTML = `You have not registered yet`
//         }
//       }
  
//   const read = document.querySelector('#Read');
//   read.addEventListener('click',function(event){
//       event.preventDefault();
//     subIndex--;
//     const subicon = document.querySelector('.subicon');
//     subicon.innerHTML = + subIndex;
//     card1.style.display = 'none'
    
    
//   })
// }


// let deleteIndex = 0;
// function deleteCard(index) {
//   let existingCards = JSON.parse(localStorage.getItem('existingCards')) || [];
//   existingCards.splice(index, 1);
//   localStorage.setItem('existingCards', JSON.stringify(existingCards));
//   renderCards(existingCards);
//   deleteIndex++
//   console.log(deleteIndex)
//   localStorage.setItem('deleteIndex',JSON.stringify(deleteIndex))
//   alert("Deleted"+toUnicodeVariant(' Successfully', 'bold sans', 'bold'));
  
// }

// function toUnicodeVariant(str, variant, flags) {
//   const offsets = {
//       m: [0x1d670, 0x1d7f6],
//       b: [0x1d400, 0x1d7ce],
//       i: [0x1d434, 0x00030],
//       bi: [0x1d468, 0x00030],
//       c: [0x1d49c, 0x00030],
//       bc: [0x1d4d0, 0x00030],
//       g: [0x1d504, 0x00030],
//       d: [0x1d538, 0x1d7d8],
//       bg: [0x1d56c, 0x00030],
//       s: [0x1d5a0, 0x1d7e2],
//       bs: [0x1d5d4, 0x1d7ec],
//       is: [0x1d608, 0x00030],
//       bis: [0x1d63c, 0x00030],
//       o: [0x24B6, 0x2460],
//       p: [0x249C, 0x2474],
//       w: [0xff21, 0xff10],
//       u: [0x2090, 0xff10]
//   }

//   const variantOffsets = {
//       'monospace': 'm',
//       'bold': 'b',
//       'italic': 'i',
//       'bold italic': 'bi',
//       'script': 'c',
//       'bold script': 'bc',
//       'gothic': 'g',
//       'gothic bold': 'bg',
//       'doublestruck': 'd',
//       'sans': 's',
//       'bold sans': 'bs',
//       'italic sans': 'is',
//       'bold italic sans': 'bis',
//       'parenthesis': 'p',
//       'circled': 'o',
//       'fullwidth': 'w'
//   }

//   // special characters (absolute values)
//   var special = {
//       m: {
//           ' ': 0x2000,
//           '-': 0x2013
//       },
//       i: {
//           'h': 0x210e
//       },
//       g: {
//           'C': 0x212d,
//           'H': 0x210c,
//           'I': 0x2111,
//           'R': 0x211c,
//           'Z': 0x2128
//       },
//       o: {
//           '0': 0x24EA,
//           '1': 0x2460,
//           '2': 0x2461,
//           '3': 0x2462,
//           '4': 0x2463,
//           '5': 0x2464,
//           '6': 0x2465,
//           '7': 0x2466,
//           '8': 0x2467,
//           '9': 0x2468,
//       },
//       p: {},
//       w: {}
//   }
//   //support for parenthesized latin letters small cases 
//   for (var i = 97; i <= 122; i++) {
//       special.p[String.fromCharCode(i)] = 0x249C + (i - 97)
//   }
//   //support for full width latin letters small cases 
//   for (var i = 97; i <= 122; i++) {
//       special.w[String.fromCharCode(i)] = 0xff41 + (i - 97)
//   }

//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   const numbers = '0123456789';

//   var getType = function (variant) {
//       if (variantOffsets[variant]) return variantOffsets[variant]
//       if (offsets[variant]) return variant;
//       return 'm'; //monospace as default
//   }
//   var getFlag = function (flag, flags) {
//       if (!flags) return false
//       return flags.split(',').indexOf(flag) > -1
//   }

//   var type = getType(variant);
//   var underline = getFlag('underline', flags);
//   var strike = getFlag('strike', flags);
//   var result = '';

//   for (var k of str) {
//       let index
//       let c = k
//       if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c])
//       if (type && (index = chars.indexOf(c)) > -1) {
//           result += String.fromCodePoint(index + offsets[type][0])
//       } else if (type && (index = numbers.indexOf(c)) > -1) {
//           result += String.fromCodePoint(index + offsets[type][1])
//       } else {
//           result += c
//       }
//       if (underline) result += '\u0332' // add combining underline
//       if (strike) result += '\u0336' // add combining strike
//   }
//   return result
// }

let Res_Array = JSON.parse(localStorage.getItem('Res_Array')) || [];

const ResName = JSON.parse(localStorage.getItem('ResName'));
console.log(ResName);
const ResLocalTime = JSON.parse(localStorage.getItem('ResLocalTime'));
console.log(ResLocalTime);
const ResCountry = JSON.parse(localStorage.getItem('ResCountry'));
console.log(ResCountry);
const ResIcon = JSON.parse(localStorage.getItem('ResIcon'));
console.log(ResIcon);
const ResCondition = JSON.parse(localStorage.getItem('ResCondition'));
console.log(ResCondition);
const ResTemp = JSON.parse(localStorage.getItem('ResTemp'));
console.log(ResTemp);
const Reslocaltime = JSON.parse(localStorage.getItem('LocalTimeRes'));
console.log(Reslocaltime);
const ResLocalDate = JSON.parse(localStorage.getItem('LocalDateRes'));
console.log(ResLocalDate);


if (ResName && ResLocalTime && ResCountry && ResIcon && ResCondition) {
  let currentLocalTime = new Date().toLocaleTimeString();
  let currentLocalDate = new Date().toLocaleDateString();
  console.log(currentLocalTime)

  let resObj = {
    ResName: ResName,
    ResLocalTime: ResLocalTime,
    ResCountry: ResCountry,
    ResIcon: ResIcon,
    ResCondition: ResCondition,
    ResTemp : ResTemp,
    SearchLocalTime: currentLocalTime,  // Store the current time
    SearchLocalDate: currentLocalDate   // Store the current date
  };
  console.log(resObj.SearchLocalTime)
  Res_Array.push(resObj);
  localStorage.setItem('Res_Array', JSON.stringify(Res_Array));
}
// const ResDate = JSON.parse(localStorage.getItem('abcthree'));
console.log(Res_Array);
// const ResTime = JSON.parse(localStorage.getItem('abcfour'));
// console.log(ResTime[0])
function renderCards() {
  const cardContainer = document.getElementById('new-card-container');
  cardContainer.innerHTML = ''; // Clear existing cards to avoid duplicates
  Res_Array.reverse()
  Res_Array.forEach(item=> {
    // Create card element
    const card = document.createElement('div');
    card.className = 'CArd';

    // Create content for the card
    card.innerHTML = `
    <h2>${item.ResName}</h2>
    <p>Local Time: ${item.ResLocalTime}</p>
    <h4>Country: ${item.ResCountry}</h4>
    <div class="resFor">
    <h3>${item.ResTemp}°C</h3>
    <img src="${item.ResIcon}" alt="${item.ResCondition}">
    </div>
    <p>Condition: ${item.ResCondition}</p>
    <h4 class="hhh">You searched this at ${item.SearchLocalTime} on ${item.SearchLocalDate}</h4>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);


  });
}


// Call the function to render cards
renderCards(Res_Array);
  const cardContainer = document.getElementById('new-card-container');
function deleteAll() {
  cardContainer.innerHTML = 'No card found'; 
  Res_Array = []; 
  localStorage.removeItem('Res_Array'); 
  localStorage.removeItem('ResName')
  deleteALl.style.display = 'none'
}

const ntCard = JSON.parse(localStorage.getItem('Searched'));
const subicon = document.querySelector('.subicon');
if(ntCard){
  subicon.innerHTML = 1
}

const nthCard = JSON.parse(localStorage.getItem('Searched2'));
if(nthCard && nthCard){
  subicon.innerHTML = 2;
}