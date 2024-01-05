
var random = Math.floor(Math.random() * 100) + 1;
var ans = document.getElementById("ans");
var range = document.getElementById("range");
var valid = document.getElementById("valid");
var prev = []

function calculate() {
    var input = document.getElementById("fetch");
    var a = input.value;
    var submit = document.getElementById("submit");
    console.log(random);
    if(a >= 1 && a <= 100) {
        document.getElementById("valid").innerHTML = "";
        console.log(prev.length);
        if(random == a) {
            ans.innerHTML = "Congratulations! you pick the right answer";
            ans.style.color = "green";
            range.innerHTML = "";
            input.disabled = true;
            submit.disabled = true;

        }
        else if(prev.length > 9) {
            valid.innerHTML = "Your turns are over. You can start new game";
            valid.style.color = "red";
            ans.innerHTML = "";
            range.innerHTML = "";
            prev = [];
            input.disabled = true;
            submit.disabled = true;
        }
        else {
            ans.innerHTML = "Sorry! you pick the wrong answer";
            ans.style.color = "red";
            
            prev.push(a);
            valid.innerHTML = "Previous guesses : "+prev.join(" ");
            valid.style.color = "";
            
            if(a > random) range.innerHTML = "your value is high";
            else range.innerHTML = "your value is low";
        }
    }
    else {
        document.getElementById("valid").innerHTML = "Please enter a valid number between 1 and 100";
        document.getElementById("valid").style.color = "red";
    }   
}
   
function reset() {
    var input = document.getElementById("fetch");
    var submit = document.getElementById("submit");
    random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("fetch").value = "";
    valid.innerHTML = "";
    ans.innerHTML = "";
    range.innerHTML = "";
    prev = [];
    input.disabled = false;
    submit.disabled = false;
}