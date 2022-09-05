const prompt = require ("prompt-sync")()

for(let i=1 ; i<=10 ; i++) {
    let num = Number (prompt("Digite 10 números: "))

    if (num % 2 == 0) {
        num += 1;
        console.log(`O número de pares são: ${num}`)
    } else if (i % 2 != 0) {
        num += 1;
        console.log(`O número de impares são: ${num}`)
    }
}
