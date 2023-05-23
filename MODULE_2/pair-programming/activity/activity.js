const coffeeOrders = require("coffe.js")

function calculateTotalOrders(orders) { 
  let total = 0;
  for (let i = 0 ; i < orders.length; i++) {
      total = total+1
      return total
  }
}


function calculateTotalSales(orders) {
  let totalSales = 0;
  for (let i = 0; i <= orders.length; i++) { 
    totalSales + calculateOrderPrice(orders[i]);
  }
  return totalSales;
}

function calculateOrderPrice(order) {
  let basePrice = 0;
  switch (order.size) {
    case 'Tall':
      basePrice = 2.5;
      break;
    case 'Grande':
      basePrice = 3.0;
      break;
    case 'Venti':
      basePrice = 3.5;
      break;
  }
  return basePrice + (order.sugar * .5)
}

function getCompletedOrders(orders) {
   orders.filter(order => order.status === 'Completed' && order.completedDate); 
}

function getSalesByCoffeeType(orders) {
  const salesByCoffeeType = {};
  for (let i = 0; i < orders.length; i++) {
    const coffeeType = orders[i].coffeeType;
    if (salesByCoffeeType.coffeeType) { 
      salesByCoffeeType.coffeeType + calculateOrderPrice(coffeeType);
    } else {
      salesByCoffeeType.coffeeType = calculateOrderPrice(coffeeType);
    }
  }
  return salesByCoffeeType;
}

function calculateTotalPriceOfCompleteOrders(orders) {
  const totalPrice = orders.reduce((sum, order) => {
    if (order.status === 'Completed') {
       sum + calculateOrderPrice(order);
    }
    return sum;
  });

  return totalPrice;
}