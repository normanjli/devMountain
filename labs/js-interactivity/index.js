const message = document.querySelector(`#message`)
const revealMessage = () => {
    message.classList.remove(`hide`)
    setTimeout( ()=> {
    console.log(message.classList)
    message.classList.add(`hide`)
    console.log(message.classList)
    } ,1000)
}
const deleteMovie = (e) =>{
    e.target.parentNode.remove()
    message.textContent = (`${e.target.parentNode.firstElementChild.textContent} Deleted`)
    revealMessage()
}
const crossOffMovie =(e) =>{
    e.target.classList.toggle(`checked`)
    e.target.classList.contains(`checked`)? message.textContent = `${e.target.textContent} Watched`: message.textContent = `Added ${e.target.textContent} back to watch list`
    revealMessage()
}
 const addMovie = (e) =>{
    e.preventDefault()
    let inputField = document.querySelector(`input`)
    let movie = document.createElement(`li`)
    let movieTitle = document.createElement(`span`)
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener(`click`, crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `x`
    deleteBtn.addEventListener(`click`, deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector(`ul`).appendChild(movie)
    inputField.value = ``
}
document.querySelector(`form`).addEventListener(`submit`, addMovie)