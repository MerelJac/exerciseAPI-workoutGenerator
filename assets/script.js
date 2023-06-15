var submitBtn = document.querySelector('input[type="submit"]');
var upperChoice = document.querySelector('input[value="upper"]');
var lowerChoice = document.querySelector('input[value="lower"]');
var fullbodyChoice = document.querySelector('input[value="full"]');
var upperBodyExercises = [];

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
        // console.log(result[0].gifUrl);
        for (var i = 0; i < result.length; i++) {
            if (result[i].bodyPart === 'back' || result[i].bodyPart === 'chest') {
                upperBodyExercises.push({name: result[i].name, link: result[i].gifUrl})
            }
        } console.log(upperBodyExercises)
    } catch (error) {
        console.error(error);
    }};

    fetchData();
