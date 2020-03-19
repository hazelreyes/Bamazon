var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "rootroot123",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  showItemsForSale();
});

function showItemsForSale() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log("\nProducts\n---------");
    for (var i = 0; i < results.length; i++) {
      console.log(
        "\nItem ID: " +
          results[i].item_id +
          "\nProduct: " +
          results[i].product_name +
          "\nPrice: $" +
          results[i].price
      );
      console.log("\n----------------------");
    }
  });
  purchaseAnItem();
}

function purchaseAnItem() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_id);
            }
            return choiceArray;
          },
          message: "What is the ID of the product you would like to buy?"
        },
        {
          name: "units",
          type: "input",
          message: "\nHow many units of the product would you like to buy?"
        }
      ])
      .then(function(answer) {
        var chosenProduct;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.choice) {
            chosenProduct = results[i];
          }
        }

        if (chosenProduct.stock_quantity >= parseInt(answer.units)) {
          var newStockQuantity =
            chosenProduct.stock_quantity - parseInt(answer.units);
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newStockQuantity
              },
              {
                item_id: chosenProduct.item_id
              }
            ],
            function(error) {
              if (error) throw err;
              var totalCost = answer.units * chosenProduct.price;
              console.log("\nYour total is $" + totalCost + ".\n");
              askIfBuyAgainOrExit();
            }
          );
        } else {
          console.log("\nInsufficient quantity!\n");
          askIfBuyAgainOrExit();
        }
      });
  });
}

function askIfBuyAgainOrExit() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message:
        "\nWould you like to [PURCHASE] another item or [EXIT] the application?",
      choices: ["PURCHASE", "EXIT"]
    })
    .then(function(answer) {
      if (answer.choice === "PURCHASE") {
        showItemsForSale();
      } else if (answer.choice === "EXIT") {
        console.log("\nGood-bye.");
        connection.end();
      }
    });
}
