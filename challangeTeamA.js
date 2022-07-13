// Buatlah satu function dalam JavaScript yang menerima input berbentuk array of integer kemudian mengembalikan angka terbesar dari array input!!!!

// Contoh:
// Input: [3,5,2,1]
// Output: 5

const arr = [3,5,2,1]
const maxValue = (myArray) => {
    let max = [];
    // 3>0? true, 3>5 ? true, 5>2 ? false, 5>12? true, 12>10 ? false. hasil akhir nilai terbesar 12
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > max)
            max = myArray[i]
    }
    return max;
}
console.log(maxValue(arr))






