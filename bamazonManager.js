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
  viewMenuOptions();
});

function viewMenuOptions() {
  connection.query("SELECT * FROM products", function(err, results) {
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "\nChoose from the following options:",
        choices: [
          "View Products for Sale",
          "View Low Inventory",
          "Add to Inventory",
          "Add New Product"
        ]
      })
      .then(function(answer) {
        if (answer.choice === "View Products for Sale") {
          displayProductsForSale();
        } else if (answer.choice === "View Low Inventory") {
          var lowInventoryArray = [];
          for (var i = 0; i < results.length; i++) {
            if (results[i].stock_quantity < 5) {
              lowInventoryArray.push(results[i]);
            }
          }
          for (var i = 0; i < lowInventoryArray.length; i++) {
            console.log(
              "\nItem ID: " +
                lowInventoryArray[i].item_id +
                "\nProduct: " +
                lowInventoryArray[i].product_name +
                "\nPrice: $" +
                lowInventoryArray[i].price +
                "\nIn Stock: " +
                lowInventoryArray[i].stock_quantity
            );
          }
          askIfChooseOrDone();
        } else if (answer.choice === "Add to Inventory") {
          inquirer
            .prompt([
              {
                name: "choice",
                type: "rawlist",
                choices: function() {
                  var choiceArray = [];
                  for (var i = 0; i < results.length; i++) {
                    choiceArray.push(results[i].product_name);
                  }
                  return choiceArray;
                },
                message: "Which product would you like to add more units to?"
              },
              {
                name: "units",
                type: "input",
                message:
                  "\nHow many units of the product would you like to add?"
              }
            ])
            .then(function(answer) {
              var chosenProduct;
              for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.choice) {
                  chosenProduct = results[i];
                }
              }
              var newStockQuantity =
                chosenProduct.stock_quantity + parseInt(answer.units);
              connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: newStockQuantity
                  },
                  {
                    product_name: chosenProduct.product_name
                  }
                ],
                function(err) {
                  if (err) throw err;
                  console.log(
                    "\nAdded " +
                      answer.units +
                      " units to " +
                      chosenProduct.product_name +
                      "!\n"
                  );
                  askIfChooseOrDone();
                }
              );
            });
        } else if (answer.choice === "Add New Product") {
          inquirer
            .prompt([
              {
                name: "product",
                type: "input",
                message: "\nWhat product would you like to add to the inventory?"
              },
              {
                name: "department",
                type: "input",
                message: "What department will this product be in?"
              },
              {
                name: "price",
                type: "input",
                message: "What is the cost for one unit of this product?"
              },
              {
                name: "quantity",
                type: "input",
                message:
                  "How many of this product are you adding into the invetory?"
              }
            ])
            .then(function(answer) {
              var query = connection.query(
                "INSERT INTO products SET ?",
                {
                  product_name: answer.product,
                  department_name: answer.department,
                  price: answer.price,
                  stock_quantity: answer.quantity
                },
                function(err, results) {
                  if (err) throw err;
                  console.log(
                    "\n" + results.affectedRows + " product added to the inventory!\n"
                  );
                  askIfChooseOrDone();
                }
              );
            });
        }
      });
  });
}

function displayProductsForSale() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    for (var i = 0; i < results.length; i++) {
      console.log(
        "\nItem ID: " +
          results[i].item_id +
          "\nProduct: " +
          results[i].product_name +
          "\nPrice: $" +
          results[i].price +
          "\nIn Stock: " +
          results[i].stock_quantity
      );
      console.log("\n----------------------");
    }
    askIfChooseOrDone();
  });
}

function askIfChooseOrDone() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "\nWould you like to [CHOOSE] another option or are you [DONE]?",
      choices: ["CHOOSE", "DONE"]
    })
    .then(function(answer) {
      if (answer.choice === "CHOOSE") {
        viewMenuOptions();
      } else if (answer.choice === "DONE") {
        console.log("\nGood-bye.");
        connection.end();
      }
    });
}
