let userData = localStorage.getItem('users');
console.log(userData);
let userdataJsonparse = JSON.parse(userData);
const hone = document.querySelector('h1');
console.log(userdataJsonparse[0].username);
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