console.group("Toán tử Gan")

const a = 10;

let b = 5;
console.log(b += 2);
console.log(b -= 2);
console.log(b *= 2);
console.log(b /= 2);
console.log(b %= 2);
console.log(b **= 2);

// prefix: ++, --
let c = 10;
console.warn(++c); // c = c + 1; // 11
console.warn(c);

// postfix: ++, --
let d = 10;
console.error(d++); // 10
console.warn(d);

console.groupEnd("Toan tu Gan");

