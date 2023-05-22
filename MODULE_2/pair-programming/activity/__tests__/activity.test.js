const {
    calculateTotalOrders,
    calculateTotalSales,
    calculateOrderPrice,
    getCompletedOrders,
    getSalesByCoffeeType,
    calculateTotalPriceOfCompleteOrders,
  } = require('../activity'); 
  
  describe('Coffee Shop Functions', () => {
    const coffeeOrders = require("../data/coffee")
  
    describe('calculateTotalOrders', () => {
      test('should return the correct total number of orders', () => {
        const totalOrders = calculateTotalOrders(coffeeOrders);
        expect(totalOrders).toBe(coffeeOrders.length);
      });
    });
  
    describe('calculateTotalSales', () => {
      test('should return the correct total sales', () => {
        const totalSales = calculateTotalSales(coffeeOrders);
        const expectedTotalSales = 40.5
        expect(totalSales).toBe(expectedTotalSales);
      });
    });
  
    describe('calculateOrderPrice', () => {
      test('should calculate the correct price for a coffee order', () => {
        const order =    {
            orderNumber: 1,
            customerName: 'John Doe',
            coffeeType: 'Caffè Americano',
            size: 'Grande',
            milk: 'No milk',
            sugar: 2,
            status: 'Completed'
          }
        const expectedPrice = 4; 
        const price = calculateOrderPrice(order);
        expect(price).toBe(expectedPrice);
      });
    });
  
    describe('getCompletedOrders', () => {
      test('should return an array of completed orders', () => {
        const completedOrders = getCompletedOrders(coffeeOrders);
        const allCompleted = completedOrders.every(order => order.status === 'Completed');
        expect(allCompleted).toBe(true);
      });
    });
  
    describe('getSalesByCoffeeType', () => {
      test('should calculate the sales by coffee type', () => {
        const salesByCoffeeType = getSalesByCoffeeType(coffeeOrders);
        const expectedSalesByCoffeeType = {
            '64 oz black coffee' : 3.5,
            'Caffè Americano': 4,
            "Caffè Latte": 2.5,
            'Caffè Misto':4,
            'Cappuccino':4,
            'Caramel Macchiato':5,
            'Espresso': 2,
            'Frappuccino':3.5,
            'Iced Coffee':5,
            'Mocha':3,
            'White Chocolate Mocha':4

        };
        expect(salesByCoffeeType).toEqual(expectedSalesByCoffeeType);
      });
    });
  
    describe('calculateTotalPriceOfCompleteOrders', () => {
      test('should calculate the correct total price of completed orders', () => {
        const totalPrice = calculateTotalPriceOfCompleteOrders(coffeeOrders);
        const expectedTotalPrice = 16;
        expect(totalPrice).toBe(expectedTotalPrice);
      });
    });
  });
  
