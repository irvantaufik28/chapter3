
// Buatlah satu function dalam JavaScript yang menerima input berupa nilai minimum (min) dan nilai maksimum (max) kemudian mengembalikan array berupa bilangan ganjil diantara nilai minimum & maksimum!

// Contoh:
// Input:
//       min -> 1
//       max -> 10


let myArray = [1, 3, 5, 7, 9, 10]
const minMaxOdd = (array) => {

    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > min) {
            min = array[i];
        } if (array[i < max]) {
            max = array[i];
        }
    }

    let odd = myArray.filter((array) => { return array % 2 == 1 })
    console.log(odd)

    let result = ([max, min]);
    return result;

}

 console.log(minMaxOdd(myArray))
 