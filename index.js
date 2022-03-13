function add (num1, num2) {
    return num1 + num2
}

console.log(add(3, 4))

function subtract (num1, num2) {
    return num1 - num2
}

console.log(subtract(10, 3))

function multiply (num1, num2) {
    return num1 * num2
}
console.log(multiply(2, 3))

function divide (num1, num2) {
    return num1 / num2
}
console.log(divide(10, 2))

function increment(n) {
    return n + 1
}
console.log(increment(10))

function decrement(n) {
    return --n
}
console.log(decrement(10))

function makeInt(n) {
    return parseInt(n, 10)
}

console.log(makeInt("2"))

function preserveDecimal(n) {
    return parseFloat(n)
}

console.log(preserveDecimal("8.33"))
console.log(preserveDecimal("no data"))
