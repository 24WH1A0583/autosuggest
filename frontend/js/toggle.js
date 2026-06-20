//const toggle = document.getElementById("toggle");
const name = document.getElementById("name");
const gender = document.getElementById("gender");
const img = document.getElementById("user-img");

/*toggle.addEventListener("change", function () {
    if (toggle.checked) {
        name.innerText = "Jane Doe";
        gender.innerText = "Female";
        img.src = "/images/jane.png";
    }
    else {
        name.innerText = "John Doe";
        gender.innerText = "Male";
        img.src = "/images/john.png";
    }
});*/
// array of 2 user objects with their required details
var users=[
    {
        "Name": "John Doe",
        "Gender": "Male",
        "Image": "/images/john.png"
    },
    {
        "Name": "Jane Doe",
        "Gender": " Female",
        "Image": "/images/jane.png"
    }
]
let currId=0;//initially showing first user(0 index)    
function toggleUser() {
    currId = (currId + 1) % users.length; //(or % 2 since size==2) toggle between 0 and 1
    document.getElementById("name").innerText = users[currId].Name;//change the name text to the new user name
    document.getElementById("gender").innerText = users[currId].Gender;
    document.getElementById("user-img").src = users[currId].Image;//change the image src to the new user image 
           
}
