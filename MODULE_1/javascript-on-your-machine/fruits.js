function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
}
  
  const fruits = ["🍓", "🍐", "🍎"];
  const input = process.argv[2];
  if (input) {
    let result = addFruit(fruits, input);
    console.log(result);
    console.log(input)
  } else {
    console.log("No fruit added...");
    console.log(input)
  }