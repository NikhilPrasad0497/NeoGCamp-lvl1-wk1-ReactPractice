const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

const noOfItems = (cartItems) => {
    return cartItems.map(item=>{
        const {count} = item
        let sum = 0
        if(count > 0){
           sum = count+sum
        }
        return sum
    }).reduce((sum,element) => sum+element)
}

console.log(noOfItems(cartItems))