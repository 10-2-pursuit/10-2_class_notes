// fixes import path
const coffeeOrders = require("./data/coffee");
// moves return outside of loop scope
// can also just return orders.length
function calculateTotalOrders(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total = total + 1;
  }
  return total;
}

function calculateTotalSales(orders) {
  let totalSales = 0;
  // changes loop to `<`
  for (let i = 0; i < orders.length; i++) {
    totalSales += calculateOrderPrice(orders[i]);
  }
  return totalSales;
}
// adds a conditional to account for coffee w/o sugar
// adds a default case for switch
function calculateOrderPrice(order) {
  let basePrice = 0;
  switch (order.size) {
    case "Tall":
      basePrice = 2.5;
      break;
    case "Grande":
      basePrice = 3.0;
      break;
    case "Venti":
      basePrice = 3.5;
      break;
    default:
      basePrice = 2.0;
      break;
  }
  const sugarPrice = order.sugar > 0 ? 0.5 * order.sugar : 0;
  return basePrice + sugarPrice;
}
// adds return and no longer checks for bad data property
function getCompletedOrders(orders) {
  return orders.filter((order) => order.status === "Completed" );
}
// correctly uses bracket notation on salesByCoffeeType
// changes line 50 from "+" to "+="
function getSalesByCoffeeType(orders) {
  const salesByCoffeeType = {};
  for (let i = 0; i < orders.length; i++) {
    const coffeeType = orders[i].coffeeType;
    if (salesByCoffeeType[coffeeType]) {
      salesByCoffeeType[coffeeType] += calculateOrderPrice(orders[i]);
    } else {
      salesByCoffeeType[coffeeType] = calculateOrderPrice(orders[i]);
    }
  }
  return salesByCoffeeType;
}
// adds return to line 62
// properly initializes sum with 0 in line 66
function calculateTotalPriceOfCompleteOrders(orders) {
  const totalPrice = orders.reduce((sum, order) => {
    if (order.status === "Completed") {
      return sum + calculateOrderPrice(order);
    }
    return sum;
  }, 0);

  return totalPrice;
}

module.exports = {
  calculateTotalOrders,
  calculateTotalSales,
  calculateOrderPrice,
  getCompletedOrders,
  getSalesByCoffeeType,
  calculateTotalPriceOfCompleteOrders,
};
