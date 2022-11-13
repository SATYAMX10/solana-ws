const a = 10;
//a=11;
const b = 7;
if (a > b) {
  console.log(a + "  is greter than  " + b);
} else {
  console.log(b + "is bigger than " + a);
}
for (let c = 1; c <= 5; c++) {
  console.log(c);
}

const arr = [2, 7, "sattu", false];
console.log(arr);
const key = {
  pi: 3.14,
};
console.log(key.pi);
try {
  console.log(key.pi.c);
} catch (err) {
  console.log(err);
  console.log("key.pi.c not found");
}
function print(x) {
  console.log(x);
}
print("hello");
print(a + " " + b);
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "u "
}));
console.log("bi ");
