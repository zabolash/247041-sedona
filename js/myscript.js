var form = document.querySelector(".search");
var formViewer = document.querySelector(".form-viewer");
var dateIn = document.querySelector("[name=date-in]");
var dateOut = document.querySelector("[name=date-out]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");
form.addEventListener("submit", function(event) {
    if ((!dateIn || !dateOut || !adults || !children) || (adults.value == 0 && children.value == 0)) {
        event.preventDefault();
        alert("Please fill in all fields");
    }
    else {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
    }
});

form.classList.remove("active");

formViewer.addEventListener("click", function(event) {
    event.preventDefault();
    if (!form.classList.contains("active")) {
        form.classList.add("active");
    }
    else {
        form.classList.remove("active");
    }
});
