const workoutContainer = document.querySelector(".workoutContainer");
const APIprintSection = document.querySelector(".APIdisplayContaier")
const printSection = document.querySelector(".print-here");
const infoSection = document.querySelector(".info");
const homeBtn = document.querySelector("#homeBtn");

console.log(JSON.parse(localStorage.getItem("exerciseArray")));

let exerciseList = JSON.parse(localStorage.getItem("exerciseArray"));

exerciseList.forEach((element) => {
    var exercise = document.createElement('p');
    exercise.innerText = element.name;
    exercise.addEventListener("mouseover", function() {
        infoSection.innerHTML = `<img class="gif" src="${element.link}" alt="demonstration of ${element.name}"><div class="forStyle"><h2>targeted muscle group</h2><p>${element.target}</p></div><div class="forStyle"><h2>equipment</h2><p>${element.equip}</p></div>`
    });
    printSection.append(exercise);

});


