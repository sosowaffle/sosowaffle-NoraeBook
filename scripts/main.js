
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
    if(mySrc === 'https://nng-phinf.pstatic.net/MjAyNDA0MjNfMjky/MDAxNzEzODQ0NzQzMTEw.DxQGcgq986kZ2PSh1zynfmneA6-HoXM9gJShOrQdwQAg.BKJpbMCgDqfdybcmZEGkalaS4f-_ssTdnh9V82Aw9Q0g.PNG/9A718816-EB80-4A30-920C-A7A9DA55D56A-1713844732.png?type=f120_120_na') {
    myImage.setAttribute ('src','https://nng-phinf.pstatic.net/MjAyNDA0MjNfMjky/MDAxNzEzODQ0NzQzMTEw.DxQGcgq986kZ2PSh1zynfmneA6-HoXM9gJShOrQdwQAg.BKJpbMCgDqfdybcmZEGkalaS4f-_ssTdnh9V82Aw9Q0g.PNG/9A718816-EB80-4A30-920C-A7A9DA55D56A-1713844732.png?type=f120_120_na');
    } else {
    myImage.setAttribute ('src','https://nng-phinf.pstatic.net/MjAyNDA0MjNfMjky/MDAxNzEzODQ0NzQzMTEw.DxQGcgq986kZ2PSh1zynfmneA6-HoXM9gJShOrQdwQAg.BKJpbMCgDqfdybcmZEGkalaS4f-_ssTdnh9V82Aw9Q0g.PNG/9A718816-EB80-4A30-920C-A7A9DA55D56A-1713844732.png?type=f120_120_na');
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
