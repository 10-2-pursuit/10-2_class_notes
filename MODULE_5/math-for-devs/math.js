// OBJECTIVES
    // Review math concepts that developers are expected to know
    // Review what is NaN
    // Learn to use built in math methods in order to build solutions to problems containing math

// DEFINITIONS
    // Integer: a whole number that is not a fraction
    // Float/Floating point: approximate value for a decimal/fraction, as calculated by a computer
    // Positive number: greater than zero
    // Negative: less than zero
    // Non-negative: greater than or equal to zero
    
// NaN
    // What is it?
        // - A value representing something that is not a number
    // How do you get it?
        // - As a result of a mathematical operation on things that are not a number
    // We know we can use the + operator to add numbers and strings
    // What happens when we try to add a string to a number?
    // const twentyTwo = "two" + 2
    // console.log(twentyTwo) // "two2"

    // How about when try to multiply a string by a number?
    const twentyTimes = "two" * 2
    // console.log(twentyTimes) // NaN
    // How do we check equality with NaN?
        // console.log(NaN == NaN)
        // console.log(Number.isNaN(twentyTimes))


// PURCHASING MULTIPLES EXAMPLE
    // Let's imagine we are working on the website for an online store.

    // In our online store, we have a shopping cart. We want to change the cart to instead of showing:

        // duct tape : $5
        // duct tape : $5
        // duct tape : $5
        // duct tape : $5

        // To rather show:
        // 4 duct tape: $20

        // let ductTapePrice = 5;
        // let amountOfDuctTape = 4;
        // let total = ductTapePrice * amountOfDuctTape

        // console.log(total)

        // console.log(`${amountOfDuctTape} duct tape: $${total}`)

        
// Apply Discount (divide, PEMDAS, percentage)
    
    // In our online store, if you buy 3 or more of the same item, you get a 10% discount.
        
    // Before coding, let's think through what we expect:
        
    // 10% of 20 is 2. Therefore the total would be $18
        
    // Remember percentage is converted to a decimal by dividing by 100.
        
        // The new total is equal to the old total, minus the total times the percentage to subtract
    // Let's try to calculate the total. Is the following correct?
    // total = total - (total * 10) / 100
    // console.log(total)

    // Should we add parenthesis be sure we get 18?

    // Let's review the order of operations. We can use the mnemonic PEMDAS as a quick way to to remember, without having to look up:
        // Parenthesis
        // Exponents
        // Multiplication/Division
        // Addition/Subtraction
    
    // Now, let's add some logic, that if we have more than 3 rolls of duct tape, we should apply the discount:
    // let ductTapePrice = 5;
    // let amountOfDuctTape = 4;
    // let total = ductTapePrice * amountOfDuctTape;
    // if (amountOfDuctTape >= 3){
    //     total = total - (total * 10) / 100 // 18?
    // }

    // console.log(total);

    //We can make our expression shorter:
        // use a decimal to start
        // subtract our percentage from 1 and store it in a variable
        // let ductTapePrice = 5;
        // let amountOfDuctTape = 4;
        // let percentage = .1;
        // let calculatedDiscount = 1 - percentage;
        // let total = ductTapePrice * amountOfDuctTape;
        // if (amountOfDuctTape >= 3){
        //     total *= calculatedDiscount
        // }
    
        // console.log(total);

// Find the Difference in Price (abs, min/max)
    // Let's say we want to comparison shop  
    // We find prices for our duct tape as:   
        // const pricesPerRoll = [2, 3, 4, 6, 7, 8];
    // It should be really easy to spot the min and max price. But what if we had:
          const pricesPerRoll = [4, 3, 2, 5, 3, 7, 4, 6, 3, 11, 4, 8, 3, 4, 5];
    // and these prices change daily.

    // We should write a function that will find the minimum price, find the maximum price and then console log the difference between the values
    
    // We have a method Math.min that can find the minimum of any number of arguments. However, our values are in an array. If we try to pass the array, we get NaN. We could write a loop to iterate over each value and write some logic. But we have another option the spread operator
        // let ourPrice = 5;
        // let competitorPrices = [2, 3, 4, 6, 7, 8];
        // min - 2
        // max - 8
        // 6
        
        // const comparePriceRange = (prices) => {
        // let min = Math.min(...prices); // we will change this for the actual min val
        // let max = Math.max(...prices); // we will change this for the actual max val
        // let priceRange = max - min;
        // return priceRange;
        // };
        // console.log(comparePriceRange(competitorPrices));

    // We might also be interested in the difference between our price and the lowest price:
        // const bestPrice = (competitorPrices, ourPrice) => {
        //     let competitorMin = Math.min(...competitorPrices);
        //     return competitorMin - ourPrice;
        //     // 2 - 5 -> -3
        // };
        // console.log(bestPrice(competitorPrices, ourPrice));

    // The value isn't the most informative. Let's add some more logic:


    // Let's make the return more informative:
        


    // Sometimes the difference will be a positive number, sometimes it will be negative. What if we just want the difference between the values, and not be negative or positive? Then we are looking for the absolute value. We can use a built-in JavaScript method to determine this value easily:

    // let ourPrice = 5;
    // let competitorPrices = [2, 3, 4, 6, 7, 8];
    // const bestPrice = (competitorPrices, ourPrice) => {
    //     let competitorMin = Math.min(...competitorPrices);
    //     let difference =  competitorMin - ourPrice;
    //     if (difference < 0) {
    //         console.log("The competitor has a better price");
    //     } else {
    //         console.log("We have the better price");
    //     }
    //     return `The price difference is ${Math.abs(difference)}`;
    // };
    // console.log(bestPrice(competitorPrices, ourPrice));

// Round Up Donation (subtract and round)
    // Let's say we are designing a web site and we are incorporating a way to donate to charity. Whatever the purchase price, you can give consumers the option to round up their bill to the nearest dollar and take those extra cents and put them towards a worthy cause.
    
    // let cartTotal = 26.41;
    //How can we round up?
    
    // Let's take a quick look at the docs and see if we can find a method that suits us.
    
    // Let's start with: Math.round()

    // let roundedUpCart = Math.round(cartTotal);
    //     console.log(roundedUpCart);

    // Hmmm... that gave us 26. Let's keep looking.
    
    // There is a Math.ceil method that will always round up. Let's try it:
    
    // let cartTotal = 26.41;
    // let roundedUpCart = Math.ceil(cartTotal);
    //     console.log(roundedUpCart);

    // Great! We now have a total of $27 to charge our customers.
    
    // Now, we want to subtract the difference of the original total from the new total and store that value.
    
    // let cartTotal = 26.41;
    // let roundedUpCart = Math.ceil(cartTotal);
    // let donation = roundedUpCart - cartTotal;
    //     console.log(donation);

    // Uh oh. We get an unexpected value. Turns out JS is not great with floating point numbers! We'll have to be mindful of this. We can fix this now by using another method .toFixed.
    
    // let cartTotal = 26.41;
    // let roundedUpCart = Math.ceil(cartTotal);
    // let donation = (roundedUpCart - cartTotal).toFixed(2);
    //     console.log(+donation);

// Find the Median (math round/ceil/floor)
    // Now that we've reviewed some basics, let's go through how to solve the Find the Median problem.

    // Using the following numbers array, find the median:
        // const nums = [
        //     14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
        //     17, 12, 71, 18, 15, 12,
        //   ];
        const evenLengthNums = [5, 7, 4, 3, 1] // 4.5
    // 1. Do we understand all the words in stating the problem
        // - What is the median?
            // - Middle num in a set of nums sorted in order
        // - How can we determine the median?
            // - order nums, find the length of nums, if even add the nums divide by 2, if odd choose the middle num
    // 2.What are we asked to show?
        // - The value of the median (middle number)
        // - What if there is an even number of values?
            // - Then we take the average of the two numbers in the middle
    // 3. Restate the problem in your own words
        // - Sort the numbers from low to innerHeight, try to find the middle number, if there are two add them then divide by two
    // 4. Is there enough information for you to find a solution?

    // 5. What is our plan?

    // Part 1: Sort the numbers
        
        // The above array's numbers were carefully chosen to allow us to use the default sorting in the .sort array method.

        // The default sort method, sorts by the first number only. In a later lesson, we'll learn how to use a callback in order to sort in a different way. Let's take a look:

        // const arrayOfNums = [70, 111, 450, 3];

        // console.log(arrayOfNums.sort());

        // We are going to dedicate time later to work with .sort and other sorting algorithms. For today, let's just use the basic version
        // const findTheMedian = (numArray) => {
        //     return numArray.sort();
        // };
        //     console.log(findTheMedian(nums));
        // Question: does numArray.sort() - change numArray? or would we need to use numArray = numArray.sort() in order to update the order of values in numArray?

    // Part 2: Finding the middle value:
        // How do we get the middle value? Sometimes it is easier to work through a simpler example and then apply what you have figured out to the bigger problem:

            const shortArray = ["first", "middle", "last"];
        // Our array has a length of 3, 3/2 = 1.5
        // We can't have an element at a position of 1.5! Only integers are allowed.
    
        // How can we round up or round down?
    
        // We'll have to reach for some built in JavaScript methods!
        
        // We have 3 Math methods that could be helpful to us.
    
        // Math.ceil() - this method will always round up (ceil is short for ceiling)
            // shortArray[Math.ceil(shortArray.length / 2)];

        // Math.round() - this will round up or down to the nearest integer
            // shortArray[Math.round(shortArray.length / 2)];

        //Math.floor() - this one always rounds down
            // shortArray[Math.floor(shortArray.length / 2)];

        // What if we have an even number of array items?
            // const shortArray2 = [1, 2, 4, 5];
        //We should take the middle two numbers and take the average.

            // const firstNum = shortArray2[Math.floor(shortArray2.length / 2)];
            // const secondNum = shortArray2[Math.ceil(shortArray2.length / 2)];
            // console.log(firstNum, secondNum);
            // Hmmm, both give the value 4. Let's subtract 1

            // const firstNum = shortArray2[Math.floor(shortArray2.length / 2) - 1];
            // const secondNum = shortArray2[Math.ceil(shortArray2.length / 2)];
            // console.log(firstNum, secondNum);
            // Now, let's get the average or also known as 'mean'

        // Before we dive in, what is the expected value of the average?

            // const firstNum = shortArray2[Math.floor(shortArray2.length / 2) - 1];
            // const secondNum = shortArray2[Math.ceil(shortArray2.length / 2)];
            // const average = (firstNum + secondNum) / 2;
            // console.log(firstNum, secondNum, average);
            // We get 2 4 4 - is that the expected for the average? We were expecting 3. What went wrong?

        // We need to add parentheses in order to first add the numbers together and then divide

            // const firstNum = shortArray2[Math.floor(shortArray2.length / 2) - 1];
            // const secondNum = shortArray2[Math.ceil(shortArray2.length / 2)];
            // const average = (firstNum + secondNum) / 2;
            // console.log(firstNum, secondNum, average);
    
    
    // Part 3: Putting it All Together
    // const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
    let nums = [11, 11, 13, 17, 11, 12]
    const findTheMedian = (numArray) => {
        numArray.sort()

        if (numArray.length % 2 !== 0 ){
            return numArray[Math.floor(numArray.length/2)]
        } else {
            const firstNum = numArray[Math.floor(numArray.length/2)-1]
            const secondNum = numArray[Math.ceil(numArray.length/2)]
            const average = (firstNum + secondNum) / 2
            return average
        }
    }

    console.log(findTheMedian(nums))

// Other Math References

    // Here are some other math methods and concepts you may see on an interview/on Code Wars/ at work

    // Comparison Operators

    // Math.pi - the value of pi
    // Math.pow or ** - raise any number to any power
    // Math.random - generate a random number between 0 and 1
    // Math.sqrt - get the square root of a number
    // Unary negation - convert a positive number to a negative one, or a negative one into a positive one:
        // let x = 3;
        // console.log(-x);
        // // -3
    // Coercion into a number from a string
        // let y = "3";
        // console.log(typeof +y);

      





