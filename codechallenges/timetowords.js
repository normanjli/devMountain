const timeToWords = (time) =>{
    const ones =['', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']
    if (time === '00:00') {
        return 'midnight'
    }
    if (time === '12:00') {
        return 'noon'
    }
    let [hour,minute] = [...time.split(`:`)]
    parseInt(hour)
    parseInt(minute)
    console.log(hour,minute)
    if (hour>=12){
        if(minute===0){
        return `${ones[hour]} oclock PM`
        }else{
            if(minute>=20){
                let [ten, one] = [...minute.split(``)]
                return `${ones[hour]} ${tens[ten]}${ones[one]} PM`
            }else if (minute >=10){
                return`${ones[hour]} ${ones[minute]} PM`
            }else{
                let [ten, one] = [...minute.split(``)]
                return`${ones[hour]} oh ${ones[one]} PM`
            }
        }
    }else{
        if(minute==0){
            return `${ones[+hour]} oclock AM`
        }else{
            if(minute>=20){
                let [ten, one] = [...minute.split(``)]
                return `${ones[+hour]} ${tens[ten]}${ones[one]} AM`
            }else if (minute >=10){
                return`${ones[+hour]} ${ones[minute]} AM`
            }else{
                let [ten, one] = [...minute.split(``)]
                return`${ones[+hour]} oh ${ones[one]} AM`
            }
        }
    }
}

console.log(timeToWords(`03:25`))