// Dynamic Greeting Message
const greetings = ["Welcome to Kofia Restaurant!", "Enjoy Our Delicious Meals!", "Experience Fine Dining!"];
let index = 0;
setInterval(() => {
    document.getElementById("dynamic-greeting").innerText = greetings[index];
    index = (index + 1) % greetings.length;
}, 4000);

// Form Input Transformation
function transformInput(input) {
    input.value = input.value.toUpperCase();
    input.style.color = "blue";
}

// Submit Notification
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formNotification").innerText = "Form Submitted Successfully!";
});

// Hover Effect on Price
function increaseFont(element) {
    element.style.fontSize = "1.5em";
}

// Change Image on Button Click
function changeImage(button) {
    const cardImage = button.parentElement.previousElementSibling;
    cardImage.src = "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207";
}
