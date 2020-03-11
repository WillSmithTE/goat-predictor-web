const PREDICTOR_URL = 'https://goat-predictor.herokuapp.com/goat/';

function predict() {
    event.preventDefault();
    const college = document.getElementById('collegeInput').value;
    const rings = document.getElementById('ringsInput').value;
    const formattedCollege = formatInput(college);
    $.get(
        buildUrl(formattedCollege, rings),        (response) => {
            const displayText = formatResponse(response);
            document.getElementById('result').innerHTML = displayText;
        }
    );
}

function formatResponse(isGoat) {
    return isGoat === 'true' ? 'G O A T' : `that's not a goat ..`;
}

function formatInput(input) {
    const lowerCase = input.toLowerCase();
    return lowerCase.replace(' ', '');
}

buildUrl(college, rings) {
    return PREDICTOR_URL + '?' +
	'college=' + college,
	'rings=' + rings;
}

