//Map key - value pair

type User = {
    name:string;
    age:number,
    email:string
}

const users = new Map<string, User>();
users.set("raju", {name:"raj", age:22, email:"yeo@gmail.com"})
users.set("raju", {name:"raj", age:22, email:"yeo@gmail.com"})


users.get("raju")
console.log(users)