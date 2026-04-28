interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address:Address
    
  
}

interface officeUser {
  address:Address 
   
}


let user: User = {
  name: "mehedi",
  age: 5,
  address: {
    city: "dhaka",
    country: "Bangladesh",
    pincode: 34554,
  },
};

function isLegal(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

const ans = isLegal(user);

if (ans) {
  console.log("I am legal");
} else {
  console.log("I am not legal to vote");
}
