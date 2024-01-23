var getWinner = function(arr, k) {
    let currentWins = 0;
     let currentWinningNumber = arr[0];
     while (currentWins < k) {
         console.log(currentWins)
        console.log("Starting Array:", arr)
         if (arr[0] > arr[1]) {
            let firstItem = arr.splice(1, 1)[0];
             arr.push(firstItem);
             currentWins++
             console.log("Updated Array:", arr)
         } else {
             currentWinningNumber = arr[1]
             firstItem = arr.shift();
             arr.push(firstItem);
             currentWins = 1
             console.log("Updated Array:", arr)
         }
     }
     return currentWinningNumber
 };

console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2))