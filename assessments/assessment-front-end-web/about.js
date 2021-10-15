console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for your submission');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const complimentHover=()=>{
	alert(`this cat loves your kindness!`)
}
document.querySelector(`img`).addEventListener(`mouseover`, complimentHover)