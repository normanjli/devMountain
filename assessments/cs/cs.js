const addToZero = (nums) =>{
    nums.sort((a,b)=>a-b) //nlogn
    let index1= 0 //1
    let index2=nums.length-1//2
    while(index1!==index2){//1n
        if (nums[index1]+nums[index2]===0){//2
            return true//1
        }
        else if (nums[index1]+nums[index2]>0){//2
            index2--//1
        }else if(nums[index1]+nums[index2]<0){//2
            index1++//1
        }
    }
    return false//1
}
console.log(addToZero([2,-2,5,6]))
//space complexity is o(n) time complexity is nlogn due to sort. if array was presorted it would be o(n)
//nLog(n)+1+2+1N+2+1+2+1+2+1+1 = nLog(n)+N+13 lim as n approaches inf = nlog(n)
function hasUniqueSet(str){
    return new Set(str).size === str.length? true:false//n(where n str len) +1+1+1+1+1
}
console.log(hasUniqueSet(`moonday`)) 
// space complexity of O(n) timecomplexity of O(n) i believe the set construction is o(n)otherwise it would be o(1)

const isPangram = (sentence) =>{
    return new Set (sentence.toLowerCase().replace(/[^a-z]/g,`` )).size===26?true:false
}

console.log(isPangram(`qwertyu Iopasdfghjklzxcvbnm`))
// space complexity of O(n) timecomplexity of O(n) i believe the set construction is o(n)otherwise it would be o(1)

const longestWord = (wordsArr)=>{
    let longest = 0
    wordsArr.map((e)=>e.length>longest?longest=e.length:null)
    return longest
}
console.log(longestWord([`hello`, `hi`]))
//space complexity of o(n) and time complexity of o(n)