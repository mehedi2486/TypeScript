interface User {
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

//select subset of the interface
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

//makes all existing properties optional
type updatePropsOptional = Partial<UpdateProps>

 function UpdateUser (updatedProps: updatePropsOptional){
    
 }

 UpdateUser({
    name:"mehedi",
    age:34,
   

 })


 function updateOptional (updateOptional:updatePropsOptional){
    name:"hi@gamil.com"
 }    