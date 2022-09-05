const prompt = require ("prompt-sync")()

let n1 = Number (prompt("Digite um valor para n1: "))

let n2 = Number (prompt("Digite um valor para n2: "))

let n3 = Number (prompt("Digite um valor para n3\n"))

console.log(n1 +"," + n2 + "," + n3)

if (n1 > n2 && n1 > n3) {
    console.log(`O maior número é: ${n1}`)
} else if (n2 > n1 && n2 > n3) {
    console.log(`O maior número é: ${n2}`)
} else if (n3 > n1 && n3 > n2) {
    console.log(`O maior número é: ${n3}`)
}