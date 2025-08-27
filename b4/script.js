console.group("b4")

////// Vòng lặp
// Vòng lặp for:
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Vòng lặp while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Vòng lặp do while
let p = 0;
do {
    console.log(p);
    p++;
} while (p < 10);
////// Cú pháp khai báo Array:
let emptyArray = [];
// let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "Hello", true, null, undefined];

let arr = [1,2, "three", true, null];
// In ra phần tử ở vị trí số 2 trong mảng
console.log(arr[2]);

//// Ví dụ với các phương thức đi kèm với Array
// thuoc tinh lay chieu dai mang
console.log(fruits.length); // 3

// phương thức push()
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits)

let person = {
    name: "John",
    age: 30,
    job: "Developer"
}

let obj = {}

person.name = "Jane"

delete person.age

for (let k in person){
    console.log(person[k])
}

let hocSinh = [
  { ten: 'An', tuoi: 15, lop: '10A1' },
  { ten: 'Bình', tuoi: 16, lop: '11A2' },
  { ten: 'Châu', tuoi: 15, lop: '10A1' }
]
let dung = {ten: "Dung", tuoi: 17, lop: "11A3"}
hocSinh.push(dung)

for (let hs in hocSinh){
    console.log(hs)
}

hocSinh[1].age = 17

hocSinh.splice(2,1)
for (let hs in hocSinh){
    console.log(hs)
}

// tao obj
const obj1 = new Animal("mno");
console.log(obj1);

for (let key in obj1) {
    console.log(key, obj1[key])
}

console.log("a" in obj || "Khong co")

console.log(obj1.hasOwnProperty("$gender") ? "co" : "khong")

const obj2 = { ...obj1, gender: 0};
console.log(obj2);

const {animalName, ... otherInfo} = obj2;
console.log(animaiName);
console.log(otherInfo);

console.log(typeof []); // object -x array
console.log(Array.isArray([])); // true

console.log(typeof {}); // object


console.groupEnd("b4")