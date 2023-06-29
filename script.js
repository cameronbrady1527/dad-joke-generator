const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke');
const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

function checkLimitStatus() {
    if (jokeText.innerHTML == 'Loading...') {
        jokeText.innerHTML = 'Sorry! Joke limit reached for the day... please come back tomorrow :)';
    }
}

function getJoke() {
    xhr.open('GET', 'https://dad-jokes.p.rapidapi.com/random/joke');
    xhr.setRequestHeader('X-RapidAPI-Key', '5fe3075c40msha401e3b885422cap1173efjsn5472d1e373fd');
    xhr.setRequestHeader('X-RapidAPI-Host', 'dad-jokes.p.rapidapi.com');
    xhr.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            const joke = JSON.parse(this.responseText);
            jokeText.innerHTML = `${joke.body[0].setup} -> ${joke.body[0].punchline}`;
        }
    }
    xhr.send();

    setTimeout(checkLimitStatus, 2000);
}



// Event Listeners
jokeBtn.addEventListener('click', getJoke);

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});


