
/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}
alert(multiply(4,7));
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://yt3.googleusercontent.com/qikvjulYhISJezGVhKdiEONzFusstsLYPCKm9C3PcN2Yu1ASHHDKmwhMvzuyEDr-blBxa9lkGeE=s160-c-k-c0x00ffffff-no-rj') {
    myImage.setAttribute ('src','https://yt3.googleusercontent.com/qikvjulYhISJezGVhKdiEONzFusstsLYPCKm9C3PcN2Yu1ASHHDKmwhMvzuyEDr-blBxa9lkGeE=s160-c-k-c0x00ffffff-no-rj');
    } else {
    myImage.setAttribute ('src','https://yt3.googleusercontent.com/qikvjulYhISJezGVhKdiEONzFusstsLYPCKm9C3PcN2Yu1ASHHDKmwhMvzuyEDr-blBxa9lkGeE=s160-c-k-c0x00ffffff-no-rj');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } 
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
    setUserName();
}
