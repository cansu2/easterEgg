// create random len array with random numbers 

var randomInt = () => { 
    return Math.floor(Math.random() * 10) 
};

var randomIntArray = Array(randomInt()).fill(0).map(randomInt);

//display numbers on html 

document.getElementsByClassName("numbers")[0].innerHTML = randomIntArray;

//correct answer

//eliminate duplicate items in the array

uniqueArray = randomIntArray.filter(function(item, pos) {
    return randomIntArray.indexOf(item) == pos;
})

//sort the array ascending order

var ascendingSort = uniqueArray.sort(function(a, b){return a-b})
var correctSort = ascendingSort.reverse();

console.log(correctSort);

//comparison with user's answer and correct answer
var compareArrays = (arr1, arr2) => {
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        console.log("correct")
        window.location.href = "pass.html";
    } else {
        console.log("nope")
        window.location.href = "fail.html";
    }
}


// input is array or string? whats it?
$(".btn").click(function(e){
    e.preventDefault();
   checkUserAnswer();
    
});

var checkUserAnswer = () => {
    var userInput = document.getElementsByClassName("input")[0].value;
    
    console.log(userInput);
    var inputArray = [];

    userInput.split(",").forEach(function(x) {
       let inputInteger = parseInt(x)
       inputArray.push(inputInteger);
    });

    console.log(inputArray);

    compareArrays(inputArray, correctSort)
}


// const newUser = new user(10, 10);





