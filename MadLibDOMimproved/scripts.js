const allMadLib = document.querySelectorAll('.madlib');
const getUserInputButton = document.querySelector('#clickMe');
const userInputs = document.querySelectorAll(".userInput");
    
function parseUserInput(listOfInputs) {
    const arrayOfValues = [];
    listOfInputs.forEach(function(input){
        arrayOfValues.push(input.value);
    });
    return arrayOfValues;
}
    
getUserInputButton.addEventListener('click', function (e) {
    e.preventDefault();
    const userInputArray = parseUserInput(userInputs);

    allMadLib.forEach(function(madlib, index){
        madlib.innerHTML = userInputArray[index]
    })
});


