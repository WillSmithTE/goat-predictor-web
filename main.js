const PREDICTOR_URL = 'https://goat-predictor.herokuapp.com/goat';

function predict() {
    event.preventDefault();
    const college = document.getElementById('collegeInput').value;
    const rings = document.getElementById('ringsInput').value;
    const siblings = document.getElementById('siblingsInput').value;
    const formattedCollege = formatInput(college);
    $.get(
        buildUrl(formattedCollege, rings, siblings), (response) => {
            document.getElementById('result').innerHTML = JSON.parse(response);
        }
    );
}

function formatResponse(score) {
    return score === 100 ? 'G O A T' : score + `? that's not a goat ..`;
}

function formatInput(input) {
    const lowerCase = input.toLowerCase();
    return lowerCase.replace(' ', '');
}

function buildUrl(college, rings, siblings) {
    return PREDICTOR_URL + '?' +
        'college=' + college + '&' +
        'rings=' + rings + '&' +
        'siblings=' + siblings;
}

