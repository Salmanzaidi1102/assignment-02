// QUESTION # 1

let abc = 5; 
function print (abc) {
    
    return function (efg) { 
        console.log(abc + efg)
    }
}

let innerFunction = print(20);
innerFunction(5)

//QUESTION # 2

const arr = [1, 2, 3, 4, 5];
function searchArray(arr, val) {
    if (arr.length === 0) {
     
      return false;
    } else if (arr[0] === val) {
    
      return true;
    } else {
     
      return searchArray(arr.slice(1), val);
    }
  }
  console.log(searchArray(arr, 3)); 
  console.log(searchArray(arr, 6)); 
    
//QUESTION # 3

function addPara(text) {
    const newParagraph = document.createElement('p');
    const newText = document.createTextNode(text);
    newParagraph.appendChild(newText);
    document.body.appendChild(newParagraph);
  }

  addPara('Hello,  Salman!');

// QUESTION # 4 

function addListItem(text) {
    const list = document.querySelector('ul');
    const newListItem = document.createElement('li');
    const newText = document.createTextNode(text);
    newListItem.appendChild(newText);
    list.appendChild(newListItem);
  }
  addListItem('Welcome ');
;
    
// QUESTION # 5 

   function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myDiv = document.querySelector('#myDiv');
  changeBackgroundColor(myDiv, 'yellow');


// //QUESTION # 6 

 function saveObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const myObject1 = {
    name: 'Salman',
    age: 21,
    hobbies: ['reading', 'playing ', 'traveling']
  };
  
  saveObject('myObject', myObject1);
   

//QUESTION # 7

function getObject(key) {
    const objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }

  const myObject2 = getObject('myObject');
console.log(myObject2);



//QUESTION # 8

function saveObject(object) {
    for (const [key, value] of Object.entries(object)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    const newObj = {};
    for (const key in localStorage) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
  
    return newObj;
  }
  const myObject = {
    name: 'Salman',
    age: 21,
    hobbies: ['reading', 'playing', 'traveling']
  };
  
  const newObject = saveObject(myObject);
  console.log(newObject);