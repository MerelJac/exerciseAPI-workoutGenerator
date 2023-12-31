var submitBtn = document.querySelector('input[type="submit"]');
var upperChoice = document.querySelector('input[value="upper"]');
var lowerChoice = document.querySelector('input[value="lower"]');
var fullbodyChoice = document.querySelector('input[value="full"]');
var upperBodyExercises = [];
var lowerBodyExercises = [];
var cardioExercises = [];
var coreExercises = [];
var includedExercises = [];
var fullBodyList = [];
var workoutLength = 8;

async function fetchData() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd57e87ede7msh9a81c97580ed5c7p16ceccjsnb1fa77ee9075',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        //     'X-RapidAPI-Key': '708af97118msh3f74fb80ad20ee2p1f232ejsncd6d167e1b72',
        //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        console.log(response);
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
            } 
        }} catch (error) {
                console.error(error);
            }};

    fetchData();

    submitBtn.addEventListener("click", function(event) {
        // remove prevent default when page is working
        event.preventDefault();
        includedExercises = [];
        if (upperChoice.checked == true) {
            for (var u = 0; u < workoutLength; u++) {
                JSON.stringify(upperBodyExercises[u].name);
                var pickRandomUpper = upperBodyExercises[Math.floor(Math.random() * upperBodyExercises.length)];
                if (!includedExercises.includes(pickRandomUpper)) {
                    includedExercises.push(pickRandomUpper)
                }
            };
            console.log(includedExercises)
        } else if (lowerChoice.checked == true) {
            for (var u = 0; u < workoutLength; u++) {
                JSON.stringify(lowerBodyExercises[u].name);
                var pickRandomLower = lowerBodyExercises[Math.floor(Math.random() * lowerBodyExercises.length)];
                if (!includedExercises.includes(pickRandomLower)) {
                    includedExercises.push(pickRandomLower)
                }
            };
        } else if (fullbodyChoice.checked == true) {
            var fullBodyList = upperBodyExercises.concat(lowerBodyExercises, cardioExercises, coreExercises);
            console.log(fullBodyList);
            fullBodyList.forEach(data => {
                console.log(data.name)
            })
            for (var u = 0; u < workoutLength; u++) {
                JSON.stringify(fullBodyList[u].name);
                var pickRandomFull = fullBodyList[Math.floor(Math.random() * fullBodyList.length)];
                if (!includedExercises.includes(pickRandomFull)) {
                    includedExercises.push(pickRandomFull)
                }
            };
        } else {location.reload()}
        
        //save to local storage 
        localStorage.setItem("exerciseArray", JSON.stringify(includedExercises));
        // open other other HTML file
        window.location.href = "./workout.html"
    })

