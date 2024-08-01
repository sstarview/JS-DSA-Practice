const bubbleSort = (unsortedArray)=>{
    const length = unsortedArray.length;


    for (let i = length - 1; i >= 0; i-- ) {
        let swap = 0;
        console.log(i);
        for (let j = 0; j < i; j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                const temp = unsortedArray[j + 1];
                unsortedArray[j + 1] = unsortedArray[j];
                unsortedArray[j] = temp;
                console.log(unsortedArray);
                swap += 1;
            }
        }
        if (swap == 0) {
            console.log('Returned due to swap 0');
            return console.log(unsortedArray);
        }
    }
    console.log(unsortedArray);
}

// const unsortedArray = [34, 33, 44, 21, 63];
const unsortedArray = [ 33, 34, 21, 44, 63 ]

bubbleSort(unsortedArray);