console.group("Toán tử số học")

let so1 = 39;
let so2 = 78;
console.log(so1 + so2);
console.log(so1 - so2);
console.log(so1 * so2);
console.log(so1 / so2);
console.log(so1 % so2);// chia lấy dư
console.log(so1 ** 2);//luỹ thừa
// Math -------------------------------
// random 10 -> 20
console.log(Math.random() * 10 + 10);

// lam tron 
// 1. khong lay so thap phan (so nguyen)
console.log(Math.round(10.5)); // 11
console.log(Math.floor(10.5)); // 10 (lam tron xuong)

// 2. lay so thap phan (2 chu so)
console.log(Math.round(10.55555 * 100) / 100); // 10.56

console.groupEnd("Bài 3 - JS số học")
