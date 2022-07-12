// Soal:
// Buatlah satu function dalam JavaScript yang menerima input berbentuk array of integer kemudian mengembalikan angka terbesar dari array input!

// Contoh:
// Input: [3,5,2,1]
// Output: 5




const maxValue = (myArray) => {
    let max =[];
    for(let i=0; i< myArray.length; i++){
        if(myArray[i] > max)
        max = arr[i]   
    }
    return max;
}
const arr = [3,5,2,12,10,]
console.log(maxValue(arr))






// const arr =[3,5,2,1,10,12];

// function forEach (array,callback){
//     let newArray = [];
//     let min =[]
    
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//           min = array[i];
//           newArray.push(callback(array[i]))
//         }
//     }

//     return newArray;   
// }
// const maxArray = forEach(arr, (item)=>{
// return item
// });

// console.log(maxArray);
