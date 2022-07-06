class Employee {
    setEmpDetails(name,id ,phoneNo,address){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.address = address;
    }

    getEmpName(){
        return this.name
    }
    getEmpId(){
        return this.id
    }
    getEmpPhoneNo(){
        return this.phoneNo
    }
    getEmpAddress(){
        return this.address
    }
}

let emp1= new Employee();
emp1.setEmpDetails('John',"A0001",'0123456789','Bangkok');
console.log(emp1.getEmpName())
console.log(emp1.getEmpId())
console.log(emp1.getEmpPhoneNo())
console.log(emp1.getEmpAddress())
let emp2= new Employee();
emp2.setEmpDetails('Jane',"A0002",'0123456789','Bangkok');
let emp3= new Employee();
emp3.setEmpDetails('Bob',"A0003",'0123456789','Bangkok');