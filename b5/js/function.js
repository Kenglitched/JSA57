// cong dung: tach code - toi su dung code, gon code hon
//dinh nghia: la 1 khoi lenh thuc thi 1 nhiem vu cu the

const parameter = 10;

function functionName(parameter) {
    console.log(parameter, "Day la tham so")
    return "tra ve gia tri cu the";
}

functionName(15);

console.log(
    (function (a,b = 10) {
    return a + b;
    })(15)
);

document.body.addEventListener("click", () => console.log("first"));

const sum = (a,b) => a+b;
console.log(sum(12,4));

const student = {
    fullName: "Nguyen Van A",
    age: 12,
    courses: [ "GA", "JSB", "PB"]
}

student.findCourse = (key) => {
    return student.courses.filter((item) => item === key );
}
console.log(student.findCourse("GA"));

// arrow function: khong ghi nho ngu canh -> this -> trả về this của function cha 
// document
//   .querySelector("#btn")
//   .addEventListener("click", () => console.log(this)); // window

document.querySelector("#btn").addEventListener("click", function (e) {
  console.log(this); // tra ve button dang tuong tac
});

