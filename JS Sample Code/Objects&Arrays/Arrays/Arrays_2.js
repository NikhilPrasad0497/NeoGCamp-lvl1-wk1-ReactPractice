const arr = [10,4,5,2,5,6,9]

// Conventional Approach
let sum =0
for(let i=0;i<arr.length;i++){
    sum = sum+arr[i]
}

const average=(sum/arr.length)

console.log(average)

// Reduce Approach
console.log(arr.reduce((sum, arr)=> sum+arr)/arr.length)