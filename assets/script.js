var submitBtn = document.querySelector('input[type="submit"]');
var upperChoice = document.querySelector('input[value="upper"]');
var lowerChoice = document.querySelector('input[value="lower"]');
var fullbodyChoice = document.querySelector('input[value="full"]');


submitBtn.addEventListener("click", function(event) {
    // remove prevent default when page is working
    event.preventDefault();
    if (upperChoice.checked == true) {
        console.log("upper")
    } else if (lowerChoice.checked == true) {
        console.log("lower")
    } else if (fullbodyChoice.checked == true) {
        console.log("full")
    } else {location.reload()}
})

