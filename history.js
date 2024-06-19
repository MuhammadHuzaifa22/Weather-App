function addNewCard(City, Temperature) {
  // Retrieve existing card data from localStorage or initialize an empty array
  let existingCards = JSON.parse(localStorage.getItem('existingCards')) || [];

  const newLocal = {
      City: City !== null && City  !== undefined ? City : null,
      Temperature: Temperature !== null && Temperature  !== undefined ? Temperature : null
  };

  // Check if the newLocal data already exists in existingCards
  const exists = existingCards.some(card => card.City === newLocal.City && card.Temperature === newLocal.Temperature);

  if (!exists) {
      // Push newLocal into existingCards only if it does not already exist
      if (newLocal.City !== null && newLocal.Temperature !== null) {
          existingCards.push(newLocal);
      }

      // Store updated existingCards back to localStorage
      localStorage.setItem('existingCards', JSON.stringify(existingCards));

      // Render all cards after adding new card
      renderCards(existingCards);
  }
}

// Function to render cards from existingCards array
function renderCards(cards) {
  const cardContainer = document.getElementById('card-container');

  // Clear existing HTML inside card-container
  cardContainer.innerHTML = '';

  // Ensure there's data to render
  if (cards && cards.length > 0) {
      // Construct HTML for all cards
      let cardHTML = '';
      cards.forEach(card => {
          cardHTML += `
              <div class="cardp">
                  <div class="card-title">City: ${card.City || 'No card'}</div>
                  <div class="card-content">Temperature: ${card.Temperature || 'No card'}</div>
              </div>
          `;
      });

      // Append the generated HTML to card-container
      cardContainer.innerHTML = cardHTML;
  } else {
      // Display message if no cards are found
      cardContainer.innerHTML = 'No cards found.';
  }
}

// On page load, render existing cards from localStorage
window.onload = function() {
  const existingCards = JSON.parse(localStorage.getItem('existingCards')) || [];
  renderCards(existingCards);
};

// Example usage: add a new card with abC and abCtwo
// You would typically call this function based on user action (e.g., button click)
const abC = `${JSON.parse(localStorage.getItem('abc'))}`
const abCtwo = `${JSON.parse(localStorage.getItem('abctwo'))}`; // Example condition
addNewCard(abC, abCtwo);












let userData = localStorage.getItem('users');
let userdataJsonparse = JSON.parse(userData);
const hone = document.querySelector('h1');
const card1 = document.querySelector('.cCard');
let cardArr = [];
let subIndex = 0;
console.log(userdataJsonparse)
    if(userdataJsonparse){
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
    subIndex--;
    const subicon = document.querySelector('.subicon');
    subicon.innerHTML = + subIndex;
    card1.style.display = 'none'
    
    
  })
}