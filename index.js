console.log("Hello there");

const button = document.querySelector("button");

function get_input() {
    const num = prompt("What is your favourite number?");
    var answer = "";
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            answer = answer + i + ',';
        }
    }
    alert(answer);
}

button = document.getElementById()