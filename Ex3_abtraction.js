function Employee(name ,age,position,baseSalary){
    this.name = name;
    this.age = age;
    this.position = position;
    this.baseSalary = baseSalary;

    let monthlyBonus = 3000;

    let calculateSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log("Final Salary: " + finalSalary);
    }

    this.getEmpDetails = function(){
        console.log("Employee Details: ");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Position: " + this.position);
        console.log("Base Salary: " + this.baseSalary);
        calculateSalary();
    }
}

console.log("Employee of Company: ");
let emp1 = new Employee("John",30,"Manager",5000);
emp1.getEmpDetails();
let emp2 = new Employee("Jane",25,"Web Developer",4000);
emp2.getEmpDetails();
let emp3 = new Employee("Bob",35,"Software Engineer",6000);
emp3.getEmpDetails();
console.log("We love javascript");