# Coffee Debug Challenge

Welcome to the BlarBlucks Coffee Shop code debugging adventure! In this exciting quest, you will dive into the codebase of BlarBlucks, where an intern has accidentally introduced bugs into their coffee shop application. Your mission, as a talented developer, is to debug the code and restore order to the coffee shop's operations.

## Dataset

The dataset contains an array of coffee order objects. Each coffee order object has the following structure:

```javascript
{
  id: number,
  size: string,
  coffeeType: string,
  sugar: number,
  status: string,
  completedDate: string
}
```


### Functions
1. The project includes several functions to perform various operations on the coffee order data:

2. calculateTotalOrders(): Calculates the total number of orders in the dataset.

3. calculateTotalSales(): Calculates the total sales based on the coffee orders.

4. calculateOrderPrice(): Calculates the price of a given coffee order based on its size. The price is determined by the size of the coffee (Tall: $2.5, Grande: $3.0, Venti: $3.5).

5. getCompletedOrders(): Retrieves an array of completed orders from the dataset.

6. getSalesByCoffeeType(): Calculates the total sales for each coffee type and returns the sales data as an object with coffee types as keys and total sales as values.

7. calculateTotalPriceOfCompleteOrders(): Calculates the total price of orders based on a comopletion status

These functions provide essential functionality for analyzing and processing coffee orders in the coffee shop application.