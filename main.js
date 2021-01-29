let words = document.getElementById("words")
let errors = document.getElementById("errors")
let minutes = document.getElementById("minutes")

let grossWpm = ''; // wpm without errors
let netWpm = ''; // wpm with erros calculated
let errorRate = ''


/*
    5 characters equal to a word
    grossWpm = ( words / 5 ) / minutes
    netWpm = grossWpm - ((error / 5) / minutes)
*/

let button = document.getElementById('btn');
button.addEventListener('click', () => {
    grossWpm = words.value / 5;
    grossWpm /= minutes.value;
    errorRate = errors.value / 5;
    errorRate /= minutes.value;
    netWpm = grossWpm - errorRate;


    if(isNaN(netWpm) || netWpm < 0 || netWpm === Infinity) {
        netWpm = 0;
    }
    document.getElementById('para').innerHTML = `Words per minute (WPM) ${Math.round(netWpm)}`;
    document.getElementById("correct").innerHTML = `CorrectWords = ${Math.round((words.value - errors.value) / 5.2)}`;
    document.getElementById("wrong").innerHTML = `WrongWords = ${Math.floor(errors.value / 5)}`;

    words.value = '';
    errors.value = '';
    minutes.value = '';
})