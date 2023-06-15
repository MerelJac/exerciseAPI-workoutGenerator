const workoutContainer = document.querySelector(".workoutContainer");
const APIprintSection = document.querySelector(".APIdisplayContaier")
const printSection = document.querySelector(".print-here");
const infoSection = document.querySelector(".info");

console.log(JSON.parse(localStorage.getItem("exerciseArray")));

let exerciseList = JSON.parse(localStorage.getItem("exerciseArray"));

exerciseList.forEach((element) => {
    var exercise = document.createElement('p');
    exercise.innerText = element.name;
    exercise.addEventListener("mouseover", function() {
        infoSection.innerHTML = `<p>${element.equip}</p><p>${element.target}</p><img src="${element.link}" alt="demonstration of ${element.name}">`
        console.log("worked!")
    });
    printSection.append(exercise);

});

