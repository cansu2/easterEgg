
let keywords = ["Ember", "Ruby", "Rails", "Elixir", "React"];

//for bonus make a constructor for keep failing for indivual user

// let user = class {
//     constructor(userEmail, failing){
//         this.userEmail ="";
//         this.failing = 0;
//     }
// }

$("#getStarted").click(function(e){
    //prevend from refreshing the page
    e.preventDefault();
   
    let userEmail = document.getElementsByName("email")[0].value;
    

    keywords.forEach(function(x) {
        // convert keywords to lowercase
        x = x.toLowerCase();
        
        let y = userEmail.indexOf(x)
        let modal = document.querySelector(".hide")
        if (y !== -1 ) 
           modal.className = "modal show"
          
    })
});

$(".boolean").click(function(e){
    e.preventDefault();
    let answer = e.target.innerText;
    console.log(answer)
   if (answer = "yes") {
    window.location.href = "challenge.html";
   }
    
});

