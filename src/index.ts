interface People {
    name:string,
    age:number,
    // greet: (gender:string) => string,

    // greet2():string
}

const person:People = {
    name:"mehedi",
    age:34,
    // greet: (gender) => {
    //     return `hello ${gender}`
    // }
}


class Manager implements People {
    name:string;
    age:number;

    constructor(name:string, age:number){  //when we chreate an object we need to pass this 2 argument here as input
        
        this.name = name,
        this.age = age
    }


}


const user = new Manager("mehedi", 34)

console.log(user.name)




