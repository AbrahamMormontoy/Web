const info = document.querySelector("p");
console.log(info.textContent);

function alertMe() {
    window.alert("Hi");
}
function save_name() {
    const name = document.getElementById("gmail").value;
    console.log(name);
}
function save_password() {
    const password = document.querySelector(".password1").value;
    console.log(password);
}

function addparagraph() {
    const random = Math.floor(Math.random() * 5);
    const number = "The random number is " + random;
    console.log(number);

    const paragraph = document.createElement("p");
    paragraph.textContent = number;
    document.body.appendChild(paragraph);
}

function save_text() {
    const text = document.getElementById("savetext").value;
    const show = "The text you wrote is: " + text;

    const show_text = document.createElement("text");
    show_text.textContent = show;
    document.body.appendChild(show_text);
}
