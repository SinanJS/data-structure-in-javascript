var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
;
var user = new Student("William", "M.", "George");
var result = greeter(user);
console.log(result);
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Green"] = 2] = "Green";
    color[color["Blue"] = 3] = "Blue";
})(color || (color = {}));
;
var name = "william";
var age = 37;
var sentence = "hello, I'm " + name + ",and I'm " + (age - 1) + " years old.";
//数组
var list = [1, 3, 4];
var list2 = [1, 3, "ddf"];
//元组tuple
var x;
x = ["dd", 11];
//# sourceMappingURL=first.js.map