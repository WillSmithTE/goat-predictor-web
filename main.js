function predictderp() {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const prediction = getPrediction(name);
    document.getElementById('result').innerHTML = prediction;
}

function getPrediction(name) {
    return 'GOAT';
}
