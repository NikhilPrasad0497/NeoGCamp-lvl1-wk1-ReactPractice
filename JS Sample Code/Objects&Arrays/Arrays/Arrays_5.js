const arr1 = [3,5,2,9,4]
const arr2 = [6,2,8,1,3]

const sum = arr1.reduce((sum,n)=>sum+n,0) + arr2.reduce((sum,n)=>sum+n,0)
console.log(sum)