// Type 

type Employee = {
    name:string,
    startDate:string
}

type Manager = {
    name : string,
    department:string
}


type TeamLead = Employee & Manager;

let e:Employee = {
    name:"mehedi",
    startDate:"2-3-2000"
}

let m:Manager = {
    name:"hasan",
    department:"potato"
}

let t:TeamLead = {
    name:"mehedi",
    startDate:"2-3-2000",
    department:"potato"
}