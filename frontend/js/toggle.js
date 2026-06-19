const toggle = document.getElementById("toggle");
const name = document.getElementById("name");
const gender = document.getElementById("gender");
const img = document.getElementById("user-img");

toggle.addEventListener("change", function () {
    if (toggle.checked) {
        name.innerText = "Jane Doe";
        gender.innerText = "Female";
        img.src = "/images/jane doe.png";
    }
    else {
        name.innerText = "John Doe";
        gender.innerText = "Male";
        img.src = "/images/john.png";
    }
});