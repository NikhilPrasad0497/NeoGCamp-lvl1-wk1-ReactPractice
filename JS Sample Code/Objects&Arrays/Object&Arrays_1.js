const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];
// Total Marks and Name
function NameTotal(studentDetails){
    const tmp1=studentDetails.map(item =>{
        const {name, maths, science, english, computer} = item
        let Total = maths+science+english+computer
        return {name, Total}
    })
    return tmp1
}

console.log(NameTotal(studentDetails))

function HighestMarks(NameTotal){
    const arrofTotal=NameTotal
    return arrofTotal.sort((a,b)=> a.Total-b.Total).filter((item,index)=>index === arrofTotal.length-1)[0]
}

console.log("Highest Marks : ", HighestMarks(NameTotal(studentDetails)))

const LowestMarks =(NameTotal)=>{
    return NameTotal.sort((a,b)=> a.Total - b.Total)[0]
}

console.log("Lowest Marks : ",LowestMarks(NameTotal(studentDetails)))

const AvgOfComputer = (studentDetails) => {
    const computerArr= studentDetails.map(item => {
        const {computer} = item
        return computer
    })
    const totalofcomputer =computerArr.reduce((sum, computer) => sum + computer)
    return (totalofcomputer/(computerArr.length))
}

console.log("Average Marks of class in Computer Subject : ",AvgOfComputer(studentDetails))

const GradesOfStudents = (NameTotal) =>{
    const nametotal = NameTotal
    console.log(nametotal)
    return nametotal.map((item)=>{
        const {Total}= item
        // console.log(typeof(Total), Total)
        const totalMarks = 400;
        let grade= ''
        if(((Total/totalMarks)*100) >= 75){
            grade = 'A'   
        }else if(((Total/totalMarks)*100) >= 60){
            grade = 'B'
        }else if(((Total/totalMarks)*100) >= 35 ){
            grade = 'C'
        }else if(((Total/totalMarks)*100) < 35){
            grade = 'D'
        }
        return {...item, Grade: grade}
    })
}

console.log(GradesOfStudents(NameTotal(studentDetails)))

const StudentsPassed = (GradesOfStudents)=>{
    const passed= GradesOfStudents.filter(item=>{
        const {name, Total, Grade} = item
        if(Grade !== 'D'){
            return {item}
        }      
    })
    console.log(passed)
    return (passed)
}

console.log(StudentsPassed(GradesOfStudents(NameTotal(studentDetails))))
