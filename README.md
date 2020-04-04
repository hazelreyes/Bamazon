# Bamazon

`Bamazon` is an Amazon-like storefront using Node.js and MySQL. The customer node app takes in orders from customers and depletes stock from the store's inventory. The manager node app allows the manager to keep track of the inventory, add stock to the inventory, and add new products to the inventory.

## Purpose

To use Node.js and MySQL to create command line Node apps that use the MySQL and Inquirer modules.

## Goals

- Create a CLI Node app using MySQL and Node.js
- Use for loops
- Use if/else statements
- Use functions
- Use MySQL database
- Use package MySQL
- Use package Inquirer

## Technologies Used 

* Git Bash
* GitHub
* MySQL
* Node.js
* Node packages: 
    * MySQL
    * Inquirer 

## Instructions

Open up the terminal or Git Bash window and navigate to the folder/directory for `Bamazon` where the files `bamazonCustomer.js` and `bamazonManager.js` are stored. 

![Git Bash window showing Bamazon directory](images/1-navigating-to-cli-app.PNG)

Type the command below to open the Customer Node application, which starts up by showing the list of products currently available.

```node bamazonCustomer.js```

![Git Bash window showing the Customer Node application and the list of products currently available](images/2-customer-app-product-list-1.PNG)

After the list is displayed, a prompt asks for the ID of the product you would like to purchase. 

![Git Bash window showing the rest of the products and prompt that asks for the ID](images/3-customer-app-product-list-2-with-id-prompt.PNG)

The MySQL database table show no changes made yet. ID 9 is going to be chosen and the stock quantity will be changed by making a purchase. 

![MySQL database table showing initial state of table before a purchase is made](images/4-initial-database-table.PNG)

After product ID 9 is chosen, a prompt then asks how many units of the product you would like to purchase. 5 is inputted and the total cost of the purchase is displayed. Another prompt asks if you want to purchase another item or exit the application.

![Git Bash window showing the purchasing process and prompting if the user wants to purchase another item or exit the application](images/5-purchased-a-product-with-purchase-or-exit-prompt.PNG)

The database table is updated and now shows 5 units less in stock quantity for Product ID 9 after purchasing 5 units of the product.

![MySQL database table updates after purchasing 5 units of the product chosen](images/6-change-in-table-after-purchase.PNG)

After choosing "Purchase", the list of products is displayed.

![Git Bash window showing that "Purchase" was chosen and a list of available products is displayed](images/7-chose-purchase-then-product-list-and-choose-id-1.PNG)

The prompt asking for the ID of the desired product appears.

![Git Bash window showing the rest of the available products and prompt that asks for the ID](images/8-chose-purchase-then-product-list-and-choose-id-2.PNG)

The database table shows 50 units in stock quantity for Product ID 4.

![MySQL database table showing initial state of table before another purchase is made](images/9-table-before-2nd-purchase.png)

5 units of product ID 4 is inputted and the total cost is displayed. The prompt to purchase again or exit is displayed. "Exit" is chosen and the application ends.

![Git Bash window shows 5 units of product ID 4 are inputted, the total cost is displayed, and "Exit" ends the app](images/10-made-another-purchase-then-chose-exit.PNG)

The database table updates and now shows 5 units less of the product ID 4.

![MySQL database table updates after purchasing 5 units of the product chosen](images/11-table-after-2nd-purchase.PNG)

We are now going to try to purchase more than what is in stock for product ID 10.

![MySQL database table showing 25 units of product ID 10](images/12-table-before-insufficient-quantity.png)

27 units of the product is inputted and we are told "Insufficient Quantity!". Then, the prompt to purchase or exit then appears.

![Git Bash window showing 27 units are inputted, we are alerted that there is an insufficient quantity, and we are prompted to purchase again or exit the app](images/13-insufficient-quantity.PNG)

Type the command below to open the Manager Node application, which starts up by showing the menu of options to choose from.

```node bamazonManager.js```

![Git Bash window showing the Manager Node application and options](images/14-manager-menu.PNG)

After choosing "View Products for Sale", a list of all products with stock quantity appears.

![Git Bash window showing list of products with stock quantity](images/15-view-products-for-sale-1.PNG)

A prompt then appears, asking to choose another option or if you are done with the app.

![Git Bash window showing prompt that asks to choose another option or if done](images/16-view-products-for-sale-2-with-prompt-to-choose-or-done.PNG)

Let's say there are 100 units of soap in stock.

![MySQL database table showing that there are 100 units of soap in stock](images/17-before-soap-becomes-low-quantity.PNG)

Then, let's say the customer bought 96 units of soap.

![Git Bash window showing the purchase of 96 units of soap on the Customer Node app](images/18-purchased-soap-to-show-low-quantity.PNG)

Now, there are only 4 units of soap in stock.

![MySQL database table showing that there are 4 units of soap in stock left](images/19-soap-is-now-low-in-quantity.PNG)

Now, the manager (on the Manager Node app) wants to select "View Low Inventory", which will show all the products that are less than 5 units in stock.

![Git Bash window showing the manager about to select "View Low Inventory"](images/20-view-low-inventory-selected-in-manager-menu.PNG)

"View Low Inventory" is selected, and the app displays the products that are low in inventory. Then, we are prompted to choose another option or if we are done.

![Git Bash window showing the products that are low in inventory and the prompt to choose or if done](images/21-view-low-inventory-for-manager.PNG)

Now, the manager wants to add to the inventory by selecting "Add to Inventory".

![Git Bash window showing the manager about to select "Add to Inventory"](images/22-add-to-inventory-select-on-manager-menu.PNG)

"Add to Inventory" is selected, and a list of product names appear for the manager to choose from.

![Git Bash window showing the a list of products manager can add inventory to](images/23-add-to-inventory-(soap).PNG)

Soap is selected, 50 units are inputted, and an alert appears that 50 units have been added to the soap inventory.

![Git Bash window showing that 50 units of soap were added to the inventory](images/24-added-50-units-of-soap.PNG)

"Choose" is selected, then "View Products for Sale" is chosen, and it is shown that there are currently 54 units of soap now.

![Git Bash window showing 54 units of soap available](images/25-view-updated-soap-quantity.PNG)

Now, the manager wants to add a product by selecting "Add New Product".

![Git Bash window showing the manager about to select "Add New Product"](images/26-add-new-product-select-manager-menu.PNG)

"Add New Product" is chosen. Then several prompts appear for the manager to input information about the new product. The app alerts us that 1 product is added to the inventory. Then, "Done" is chosen and the application ends.

![Git Bash window showing the process of adding a new product and exiting the application](images/27-add-product.PNG)

Now, the manager wants to view the products currently for sale.

![Git Bash window showing the manager selecting "View Products for Sale" and a list of currently available products](images/28-view-products-after-added-pizza-1.PNG)

The new product is given product ID 11 and is displayed as one of the products for sale.

![Git Bash window showing the new product that was just recently added](images/29-view-products-after-added-pizza-2.PNG)

## License

MIT License

Copyright (c) [2020] [Hazel N. Reyes]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
