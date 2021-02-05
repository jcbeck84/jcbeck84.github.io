/*
const myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';
Everything in between is a comment.

// This is a comment

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2.jpg') {
      myImage.setAttribute('src','images/3.jpg');
    } else {
      myImage.setAttribute('src','images/2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Helloo, ${myName}`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}