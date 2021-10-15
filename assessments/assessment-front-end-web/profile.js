const fav = document.getElementById(`favorites`)
const favColor = () =>{
    fav.innerHTML = ``
    fav.innerHTML = `Blue`
}
const favPlace = () =>{
    fav.innerHTML = ``
    fav.innerHTML = `Yosemite Valley National Park`
    let place = document.createElement(`img`)
    place.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/1280px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg"
    fav.appendChild(place)
}
const favRitual = () =>{
    fav.innerHTML = ``
    fav.innerHTML = `making coffee!`
}

document.getElementById(`color`).addEventListener(`click`,favColor)
document.getElementById(`place`).addEventListener(`click`, favPlace)
document.getElementById(`ritual`).addEventListener(`click`, favRitual)
