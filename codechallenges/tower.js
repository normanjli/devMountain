const tower = (num) =>{
    let ans = []
    let odd = 2*num-1
    if (num===1){
        ans.push(`*`)
        return ans
    }
    for (let i = num-1; i >= 0;i--){
        let floor = `*`.repeat(odd)
        floor = floor.padStart((2*num-1+odd)/2,` `).padEnd(2*num-1,` `)
        ans.unshift(floor)
        odd -= 2
    }return ans
}
console.log(tower(6))