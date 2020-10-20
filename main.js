// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"


// Stampare numeri da 0 a 100
for (var i = 1; i <= 100; i++) {
    // Prima controlliamo se i numeri sono sia multipli di 3 e anche di 5
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    // Dopo controllo se sono multipli di 3
    } else if (i % 3 === 0) {
    console.log("Fizz");
    // Dopo controllo se sono multipli di 5
    } else if (i % 5 === 0) {
    console.log("Buzz");
    // Tutti i numeri che non sono ne multipli di 3 ne di 5 ne di entrambi
    } else {
    console.log(i);
    }
}
