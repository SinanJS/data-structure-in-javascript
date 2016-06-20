class Student{
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName=this.firstName+" "+this.middleInitial+" "+this.lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}
function greeter(person:Person){
    return "Hello,"+person.firstName+" "+person.lastName;
};


var user = new Student("William","M.","George");
var result=greeter(user);
console.log(result);

enum color {
    Red = 1,
    Green,
    Blue
};
var name: string = `william`;
let age: number = 37;
let sentence:string =`hello, I'm ${name},and I'm ${age-1} years old.`;
//数组
var list: number[]=[1,3,4];
var list2: any[]=[1,3,"ddf"];

//元组tuple
let x: [string, number];
x = ["dd",11];
