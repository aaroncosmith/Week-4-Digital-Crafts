'use strict';

const getUserInputButton = document.querySelector('#makeList');
const userInputs = document.querySelectorAll(".userInput");
const myUserList = document.querySelector('#userList')


function makeMyList() {
    userInputs.forEach(function(userInput){
        const newText = document.createElement('p');
        document.body.appendChild(newText)
        newText.innerHTML += userInput.value;
    });
}



getUserInputButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("click");
    console.log(userInputs);
    makeMyList();
});


