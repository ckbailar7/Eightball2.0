var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");

var options = ["yes", "no", "maybe", "it is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it , yes", "Most likely", "Outlook good", "Signs point to yes", "dont count on it", "my reply is no!", "My sources say no ", "Outlook not so good"];


button.addEventListener("click", function(){
    if (input.value.length < 1) {
    alert("Please enter a question!");
    }else {
        eight.innerText = "";
        var num = input.value.length % options.length;
        answer.innerText = options[num];
    }
});
