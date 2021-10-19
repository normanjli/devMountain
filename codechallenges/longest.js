a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    s1.split(``)
    s2.split(``)
    let temp = new Set(s1.concat(s2))
    console.log(temp)
    return Array.from(temp).sort().join(``)
}
  console.log(longest(a,b))