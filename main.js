const PREDICTOR_URL = 'https://goat-predictor.herokuapp.com/goat/';

function predict() {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const formattedName = formatName(name);
    $.get(
        PREDICTOR_URL + formattedName,
        (response) => {
            const displayText = formatResponse(response);
            document.getElementById('result').innerHTML = displayText;
        }
    );
}

function formatResponse(isGoat) {
    return isGoat === 'true' ? 'G O A T' : `that's not a goat ..`;
}

function formatName(name) {
    const lowerCase = name.toLowerCase();
    return lowerCase.replace(' ', '');
}
