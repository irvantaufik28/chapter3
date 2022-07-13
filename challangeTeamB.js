// Soal:
// Buatlah satu function dalam JavaScript yang menerima input berbentuk array of integer kemudian mengembalikan angka terkecil dari array input!

// Contoh:
// Input: [3,1,2,5]
// Output: 1


const arr = [3, 5, 2, 12, 1, 10,]
const minValue = (myArray) => {
    let min = arr[0];
    // 3<0 ? true, 3<5 ? false, 3<2? true, 2<12 ? false, 2<1 ? true, 1<10 ? false . hasil akhir 1 nilai terkecil
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] < min) {
            min = myArray[i];
        }
    }
    return min;
}

console.log(minValue(arr))
