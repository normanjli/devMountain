

const btn = document.querySelector(`button`)
const clicked = () =>{
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then(res =>{
        let resident = res.data.results[0].residents
        console.log(resident)
        for (i of resident){
            axios.get(`${i}`)
            .then(({data:names}) => {
                const name = document.createElement(`h3`)
                name.innerHTML = names.name
                document.querySelector(`body`).appendChild(name)
            })
        }
    })
}
btn.addEventListener(`click`,clicked)