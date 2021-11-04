const sortProduct = (nums) =>{
    let index = 1
    let modArr = []
    for (let i = 0;i<nums.length;i++){
        let obj = {
        product:nums[i]*index,
        original:nums[i]
        }
        modArr.push(obj)
        index++
    }modArr.sort((firstE, secondE) => firstE.product-secondE.product)
    let ans = []
    modArr.forEach(e=>ans.push(e.original))
    return ans
}

console.log(sortProduct([23,2,3,4,5]))