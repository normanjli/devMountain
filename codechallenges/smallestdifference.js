const smallestDifference = (arr1, arr2)=>{ //nlogn
    arr1.sort()
    arr2.sort()
    let difference = null
    for (let index = 0;index<arr1.length;index++){
        let a = arr1[index]
        let b = arr2[index]
        if (a>b){
            for (let i = index; i< arr1.length;i++){
                console.log(a)
                if (Math.abs(a-arr2[i])<difference || difference===null){
                    difference = Math.abs(a-arr2[i])
                }
            }
        }else if (b>a){
            for (let i = index; i< arr2.length;i++){
                console.log(b)
                if (Math.abs(b-arr1[i])<difference || difference===null){
                    difference = Math.abs(b-arr1[i])
                }
            }
        }else{
            return 0
        }
    }
    return difference
}                                                              

let arr1 = [1000, 27, 14, 90, 18]
let arr2 = [30, 23, 54, 33, 96]

console.log(smallestDifference(arr1,arr2))

const smallestDifBinary = (arr1, arr2)=>{
    let diff = null
    if(arr1.length>=arr2.length){
        arr2.sort()
        let guess = Math.floor((arr1.length-1)/2)
        for (let i of arr1){
            while (i>arr2[guess]){
                
            }

        }
    }


}