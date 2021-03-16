class Employee{
    constructor(id, name, basic_salary, HRA, Allowances){
        this.id = id
        this.name = name
        this.basic_salary = basic_salary
        this.HRA = HRA
        this.Allowances = Allowances
    }

    getSalary() {
        
        return `Employee Id : ${this.id} \n
                Name : ${this.name} \n
                Basic Salary: ${this.basic_salary} \n
                HRA: ${this.HRA} \n
                Allowances: ${this.Allowances} \n
                Total: ${this.basic_salary+this.HRA+this.Allowances}`
    }
}

const Employee1 = new Employee(1, 'Nikhil Prasad', 12000, 6000, 19000)
const Employee2 = new Employee(2, 'Vaishnavi Todase', 23000, 5000, 4000)
console.log(Employee2.getSalary())
console.log(Employee1.getSalary())