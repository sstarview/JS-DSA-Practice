// const swap = require('../helper-functions/swap-two-numbers');



/* 
    These kind of sliding problem where we have to use two pointers,
    i.e, i, and j. In most cases pick both pointer the same 
    to escape the problem of handeling last index.
    Eg: if we take i = 0 and j = 1
    for the last array j length will be greater than array itself.
*/


function insertionSort(unsortedArray) {
    for (let i = 0; i < unsortedArray.length; i++) {
        let j = i;
        while (j > 0 && unsortedArray[j - 1] > unsortedArray[j]) {
            [unsortedArray[j], unsortedArray[j - 1]] = [unsortedArray[j - 1], unsortedArray[j]];
            console.log(unsortedArray);
            // [unsortedArray[j], unsortedArray[j - 1]]= swap(unsortedArray[j], unsortedArray[j - 1])
            // const temp = unsortedArray[j];
            // unsortedArray[j] = unsortedArray[j - 1];
            // unsortedArray[j-1] = temp;
            j--;
        }
    }
    console.log(unsortedArray);
}





const unsortedArray = [ 13, 46, 24, 52, 20, 9 ];
// const unsortedArray = [ 33, 34, 21, 44, 63 ]

insertionSort(unsortedArray);