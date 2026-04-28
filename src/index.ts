// Type 

// interface Admin{
//     name:string,
//     permissions:string

// }

// interface User {
//     name: string,
//     age: number
// }

// type UserOrAdmin = Admin | User;

// function greet(user:UserOrAdmin){
//     console.log(user.name)

// }

interface User {
    firstName:string,
    lastName: string,
    age: number
}

function findUsers(users: User[]){
    return users.filter((u) => u.age > 18)

}

// function filterUser (users: User[]){
//     let ans:User[] = [];

//     for(let i=0; i< users.length; i++){
//         if(users[i].age > 18){
//             ans.push(users[i])
//         }
//     }
//     return ans
// }

console.log(findUsers ([{
    firstName:"mehedi",
    lastName:"hasan",
    age:21
},{
    firstName:"raju",
    lastName:"mollik",
    age:12
}
]))

