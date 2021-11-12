const addToZero = (nums) =>{
    nums.sort((a,b)=>a-b)
    let index1= 0
    let index2=nums.length-1
    while(index1!==index2){
        if (nums[index1]+nums[index2]===0){
            return true
        }
        else if (nums[index1]+nums[index2]>0){
            index2--
        }else if(nums[index1]+nums[index2]<0){
            index1++
        }
    }
    return false
}
console.log(addToZero([2,-2,5,6]))
//space complexity is o(n) time complexity is nlogn due to sort. if array was presorted it would be o(n)
function hasUniqueSet(str){
    return new Set(str).size === str.length? true:false
}
console.log(hasUniqueSet(`moonday`)) 
// space complexity of O(n) timecomplexity of O(n) i believe the set construction is o(n)otherwise it would be o(1)

const isPangram = (sentence) =>{
    return new Set (sentence.toLowerCase()).size===26?true:false
}

console.log(isPangram(`the Quick brown fox jumped over the lazy dog`))
// space complexity of O(n) timecomplexity of O(n) i believe the set construction is o(n)otherwise it would be o(1)

const longestWord = (wordsArr)=>{
    let longest = 0
    wordsArr.map((e)=>e.length>longest?longest=e.length:null)
    return longest
}
console.log(longestWord([`hello`, `hi`]))
//space complexity of o(n) and time complexity of o(n)