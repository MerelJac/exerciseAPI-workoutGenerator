var submitBtn = document.querySelector('input[type="submit"]');
var upperChoice = document.querySelector('input[value="upper"]');
var lowerChoice = document.querySelector('input[value="lower"]');
var fullbodyChoice = document.querySelector('input[value="full"]');
var upperBodyExercises = [];
var lowerBodyExercises = [];
var cardioExercises = [];
var coreExercises = [];

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

// fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList")
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log(error))

async function fetchData() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '708af97118msh3f74fb80ad20ee2p1f232ejsncd6d167e1b72',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        for (var i = 0; i < result.length; i++) {
            if (result[i].bodyPart === 'back' || result[i].bodyPart === 'chest' || result[i].bodyPart === 'upper arms' || result[i].bodyPart === 'shoulders' || result[i].bodyPart === 'lower arms') {
                upperBodyExercises.push({name: result[i].name, equip: result[i].equipment,  target: result[i].target, link: result[i].gifUrl})

            } else if (result[i].bodyPart === 'upper legs' || result[i].bodyPart === 'lower legs') {
                lowerBodyExercises.push({name: result[i].name, equip: result[i].equipment,  target: result[i].target, link: result[i].gifUrl})

            } else if (result[i].bodyPart === 'cardio') {
                cardioExercises.push({name: result[i].name, equip: result[i].equipment,  target: result[i].target, link: result[i].gifUrl})

        } else if (result[i].bodyPart === 'waist') {
            coreExercises.push({name: result[i].name, equip: result[i].equipment,  target: result[i].target, link: result[i].gifUrl})
            console.log(coreExercises);
            console.log(upperBodyExercises);
            console.log(lowerBodyExercises);
            console.log(cardioExercises);

    }}} catch (error) {
        console.error(error);
    }};

    fetchData();
