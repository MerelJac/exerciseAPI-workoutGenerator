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
        } 
    }} catch (error) {
            console.error(error);
        }};

fetchData();