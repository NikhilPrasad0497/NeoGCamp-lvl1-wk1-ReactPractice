const arr=[10,4,5,2,5,6,9]

const Median = arr[(arr.length+1)/2]
console.log(Median)


let obj = {}
arr.map(item=>{
    if(obj[item] === undefined){
        obj = {...obj, [item]:1}
    }else{
        obj = {...obj, [item]: obj[item]+1}
    }
    return item
})

console.log(obj)

console.log(Object.keys(obj).sort((a,b)=> obj[a]-obj[b]).length-1)
