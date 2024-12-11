const id=123;
let email="abcd321@gmail.com";
var pass=123456789;
job="developer";
let sate;

// id=324; //It is not allowed Because const can't update and reinitalize
email="xyz123@gmail.com";
pass="0987654321";
job="Full Stack";

/*
Good for the programmer to do not use Var in our program because of issue in block scope and functional scope
*/

console.log(id);
console.log([id,email,pass,job,sate]);

