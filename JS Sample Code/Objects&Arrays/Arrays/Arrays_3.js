const arr = [10,4,5,2,5,6,9]

// Conventional Approach
let max = arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max)

let min = arr[0]
for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i]
    }
}

console.log(min)

// Reduce Approach


console.log("Max: ",arr.reduce((Max,n)=> {
    if(n>Max){
        Max=n
    }
    return Max
},arr[0]))

console.log("Min : ", arr.reduce((Min,n)=>{
    if(Min>n){
        Min=n
    }
    return Min
},arr[0]))