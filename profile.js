// let userData = localStorage.getItem('users');
// console.log(userData);
// let userdataJsonparse = JSON.parse(userData);
// const hone = document.querySelector('h1');
// console.log(userdataJsonparse[0].username);
// const card1 = document.querySelector('.cCard');
// let cardArr = [];
// let subIndex = 0;
//     if(userdataJsonparse[0].username != null){
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
// let Users = storedUser ? JSON.parse(storedUser) : [];
// let UpdatedUsersJSON = JSON.stringify(Users);
// localStorage.setItem('cardArr', UpdatedUsersJSON);
//       for(let i = 0;i < cardArr.length; i++){
//         if(cardArr != null){

//           card1.style.display = 'none'
//           if(cardArr[0]){
//             const subicon = document.querySelector('.subicon');
//             subIndex++;
//             subicon.innerHTML = + subIndex;
// console.log(subicon.innerHTML)
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






const span = document.querySelector('#span');
const spantwo = document.querySelector('#spantwo');



const username =JSON.parse(localStorage.getItem('users'))
console.log(username)
// console.log(arr)
span.innerHTML=`Name : ${username[0].username} <div onclick="edit()" id="gh"><span id="edit"></span>Edit <i class="fa-solid fa-pen"></i></div>`
spantwo.innerHTML =`Registered Email <i class="fa-solid fa-envelope"></i>: ${username[0].email}`
function edit(index){
  let arr = [];
  arr.push(`Username: ${username[0].username}`,`Email: ${username[0].email}`);
  const updatedVal = prompt("Enter Updated Value")
  arr.splice(index,1,updatedVal)
span.innerHTML=`Name: ${updatedVal} <div onclick="edit()" id="gh"><span id="edit"></span></div>`

  const ed = document.querySelector('#edit');
  ed.innerHTML ='Edited'
  ed.style.color = 'blue'
}
console.log(username[0].password)
function logg(){
  const log = prompt('Enter your registered email here')
  const enterPass = prompt('Enter your password here')
  console.log(log)
  if(log !== null && enterPass !== null && log !== '' && enterPass !== '' ){

    if(log === username[0].email && enterPass === username[0].password){
      const alertDelete = prompt("Type"+toUnicodeVariant(' DELETE', 'bold sans', 'bold'));
      if(alertDelete === 'DELETE'){
      console.log(alertDelete)
      alert("Account"+toUnicodeVariant(' deleted', 'bold sans', 'bold'));
      window.location = 'index.html';
    }else{
      const alertdelete = prompt("Please type"+toUnicodeVariant(' DELETE', 'bold sans', 'bold'));
      if(alertdelete === 'DELETE'){
        console.log(alertdelete)
        alert("Account"+toUnicodeVariant(' deleted', 'bold sans', 'bold'));
        window.location = 'index.html';
      }else{
      alert("Account did not"+toUnicodeVariant(' delete', 'bold sans', 'bold'));
      
      }
    }
  }else{
    alert("Invalid"+toUnicodeVariant(' email or password', 'bold sans', 'bold'));

  }
}else{
  alert("Please input"+toUnicodeVariant(' email and password', 'bold sans', 'bold'));

}

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
