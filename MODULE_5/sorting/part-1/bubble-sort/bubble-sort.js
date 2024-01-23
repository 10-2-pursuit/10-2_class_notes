// BUBBLE SORT

// lets say we had an array of cards we wanted to order from lowest to highest
const cards = [10, 3, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4];

// we want to swap our card comparing two elements that are next to each other
    // if they are in the correct order, it moves along to the next pair
    // if they are in the wrong order, they are swapped and then it moves along to the next pair

    const onePassBubbleSort = (array) => {
        for(let i = 0; i < array.length-1; i++){
            if(array[i] > array[i+1]){
                let tempValue = array[i]
                array[i] = array[i+1]
                array[i+1] = tempValue
            }
        }
        return array
    }
    console.log(cards)
    // console.log(onePassBubbleSort(cards))


    // lets improve on this my creating a flag that will run our loop until it is in order
    
    // what do we think the time complexity of bubble sort will be?
    
    // const cards = [10, 3, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4];

    
    const bubbleSort = (array) => {
        let unsorted = true
        // create boolean that will determine if we are sorted

        while(unsorted){
            //create a while loop that will run while that value is truthy
            unsorted = false
            // every time we enter the while loop we want to change the value of the boolean since there is the possibility we might be sorted
            
            // iterate over the array
            for(let i = 0; i < array.length-1; i++){
                if(array[i] > array[i+1]){
                    // create a conditional to compare the current element to the next element i.e. the case we would want to swap when true
                    // let tempValue = array[i]
                    // array[i] = array[i+1]
                    // array[i+1] = tempValue
                    [array[i], array[i+1]] = [array[i+1], array[i]]
                    // inside condition:
                    // swap values
                    unsorted = true
                    // set our boolean to true because we know we made a swap
                }
            }
        }
            return array
            // return our array with swapped items
    }

    console.log(bubbleSort(cards))










    // const bubbleSort = (arr) => {

    //     let unordered = true;

    //     while (unordered){
    //         unordered = false;
            
    //         for (let i = 0; i < arr.length; i++) {
    //             if (arr[i] > arr[i + 1]) {
    //                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    //                 unordered = true;
    //             }
    //         }
    //     };
      
    //     return arr;
    // };

    // console.log(bubbleSort(cards))