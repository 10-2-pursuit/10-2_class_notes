const coffeeOrders = require("./data/coffee");

function calculateTotalOrders(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total = total + 1;
  }
  return total;
}

function calculateTotalSales(orders) {
  let totalSales = 0;
  for (let i = 0; i < orders.length; i++) {
    totalSales += calculateOrderPrice(orders[i]);
  }
  return totalSales;
}

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

function getCompletedOrders(orders) {
  return orders.filter(
    (order) => order.status === "Completed" && order.completedDate
  );
}

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
