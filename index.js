console.log('hello world')

const message = document.querySelector('#message');

function revealMessage() {
    message.classList.remove('hide');

    setTimeout(() => {
        message.classList.add('hide');
    }, 2000);
}

function addMovie(event) {
    event.preventDefault();

    const inputField = document.querySelector('input');

    const movie = document.createElement('li');

    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener('click', crossOffMovie);

    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';

    deleteBtn.addEventListener('click', deleteMovie);

    movie.appendChild(deleteBtn);

    const movieList = document.querySelector('ul');
    movieList.appendChild(movie);
   
    inputField.value = '';

}

function deleteMovie(event) {
    const movieTitle = event.target.parentNode.firstChild.textContent;
    
    event.target.parentNode.remove();
    message.textContent = `${movieTitle} deleted!`;
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');

    const movieTitle = event.target.textContent;

    if (event.target.classList.contains('checked')) {
        message.textContent = `${movieTitle} watched!`;
    } else {
        message.textContent = `${movieTitle} added back!`;
    }

    revealMessage();
}

document.querySelector('form').addEventListener('submit', addMovie);
