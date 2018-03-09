/* eslint-env browser*/

//STEP ONE 
/*var movies = ["favMovie1", "favMovie2", "favMovie3", "favMovie4", "favMovie5"];
window.console.log(movies[1]);*/

//STEP TWO 
/*var movies = new Array(5);
movies[0] = "favMovie1";
movies[1] = "favMovie2";
movies[2] = "favMovie3";
movies[3] = "favMovie4";
movies[4] = "favMovie5";

window.console.log(movies[0]);*/

//STEP THREE
/*var movies = new Array(5);
movies[0] = "favMovie1";
movies[1] = "favMovie2";
movies[2] = "favMovie3";
movies[3] = "favMovie4";
movies[4] = "favMovie5";
movies[5] = "favMovie6";

window.console.log(movies.length);*/

//STEP FOUR
/*var movies = [];
movies[0] = "favMovie1";
movies[1] = "favMovie2";
movies[2] = "favMovie3";
movies[3] = "favMovie4";
movies[4] = "favMovie5";

delete movies[0];

window.console.log(movies);*/

//STEP FIVE
/*var i;
var movies = [];
movies[0] = "favMovie1";
movies[1] = "favMovie2";
movies[2] = "favMovie3";
movies[3] = "favMovie4";
movies[4] = "favMovie5";
movies[5] = "favMovie6";
movies[6] = "favMovie7";
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies);
}*/

//STEP SIX
/*var i;
var movies = [];
movies[0] = "favMovie1";
movies[1] = "favMovie2";
movies[2] = "favMovie3";
movies[3] = "favMovie4";
movies[4] = "favMovie5";
movies[5] = "favMovie6";
movies[6] = "favMovie7";
for (i in movies) {
    window.console.log(movies[i]);
}*/

//STEP SEVEN 
/*var i;
var movies = [];
movies[0] = "favMovie1";
movies[1] = "favMovie2";
movies[2] = "favMovie3";
movies[3] = "favMovie4";
movies[4] = "favMovie5";
movies[5] = "favMovie6";
movies[6] = "favMovie7";
movies.sort;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}*/

//STEP EIGHT
/*var i;
var movies = [];
movies[0] = "Movies I Like:";
movies[1] = " ";
movies[3] = "favMovie1";
movies[4] = "favMovie2";
movies[5] = "favMovie3";
movies[6] = "favMovie4";
movies[7] = "favMovie5";
movies[8] = "favMovie6";
movies[9] = "favMovie7";
movies[10] = " ";
movies.sort();
movies = movies.concat("Movies I regret watching:", " ", "leastFavMovies1", "leastFavMovies2", "leastFavMovies3");
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}*/

//STEP NINE
/*var i;
var movies = [];
movies[0] = " ";
movies[1] = "favMovie1";
movies[2] = "favMovie2";
movies[3] = "favMovie3";
movies[4] = "favMovie4";
movies[5] = "favMovie5";
movies[6] = "favMovie6";
movies[7] = "favMovie7";
movies[8] = " ";
movies[9] = "Movies I Like:";
movies.sort();
movies = movies.concat(" ", "leastFavMovies1", "leastFavMovies2", "leastFavMovies3", " ", "Movies I regret watching:");
movies.reverse();
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}*/

//STEP TEN OPTION I
/*var i;
var movies = ["favMovies1", "favMovie2", "favMovie3", "favMovie4", "favMovie5", "favMovie6", "favMovie7"];
var leastFavMovies = ["leastFavMovies1", "leastFavMovies2", "leastFavMovies3"];

movies = movies.pop();
window.console.log(movies);*/

//STEP TEN OPTION II
/*var movies = [];
movies[0] = "Movies I like";
movies[1] = "favMovie1";
movies[2] = "favMovie2";
movies[3] = "favMovie3";
movies[4] = "favMovie4";
movies[5] = "favMovie5";
movies[6] = "favMovie6";
movies[7] = "favMovie7";
movies = movies.pop();
window.console.log(movies);*/

//STEP ELEVEN
/*var movies = [];
movies[0] = "favMovie1";
movies[1] = "favMovie2";
movies[2] = "favMovie3";
movies[3] = "favMovie4";
movies[4] = "favMovie5";
movies[5] = "favMovie6";
movies[6] = "favMovie7";
movies = movies.shift();
window.console.log(movies);*/

//STEP TWELVE
/*var movies = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5", "Movie6"];
window.console.log(movies.indexOf("Movie1"));
window.console.log(movies.indexOf("Movie3"));
window.console.log(movies.indexOf("Movie6"));
movies[7] = "Movie7";
movies[8] = "Movie8";
movies[9] = "Movie9";

window.console.log(movies);*/

//STEP THIRTEEN
/*var employee1 = [];
employee1["id"] = 0123;
employee1["name"] = "Raquel Mendoza";
employee1["title"] = "Zen Ninja";
employee1["department"] = "Universe";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 3210;
employee2["name"] = "Carly Matsumoto";
employee2["title"] = "Pro Volleyball Player";
employee2["department"] = "USA Team";
employee2["isCurrent"] = true;

var employees = [employee1, employee2];

window.console.log(employee2["name"]);*/

//STEP FOURTEEN
/*var index;
var employees = ["employee1", "employee2"];
    
var employee1 = [];
employee1["id"] = 0123;
employee1["name"] = "Raquel Mendoza";
employee1["title"] = "Zen Ninja";
employee1["department"] = "Universe";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 3210;
employee2["name"] = "Carly Matsumoto";
employee2["title"] = "Pro Volleyball Player";
employee2["department"] = "USA Team";
employee2["isCurrent"] = true;

for (index in employees) {
    window.console.log(employees[index]);
}*/

//STEP FIFTEEN --> STUCK
/*var employees = ["employee1", "employee2", "employee3"];

var employee1 = [];
employee1["id"] = 0123;
employee1["name"] = "Raquel Mendoza";
employee1["title"] = "Zen Ninja";
employee1["department"] = "Universe";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 3210;
employee2["name"] = "Carly Matsumoto";
employee2["title"] = "Pro Volleyball Player";
employee2["department"] = "USA Team";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 0000;
employee3["name"] = "Claire Gosen";
employee3["title"] = "Marathon Champ";
employee3["department"] = "Encinitas";
employee3["isCurrent"] = false;

for (i = 0; i < employees.length; i =+ 1) {
    if (employees[i]["isCurrent"] === true);
    window.console.log(employees[i]["name"]);
}*/

//STEP SIXTEEN
/*var movies = [["Movie1", 1], ["Movie2", 2], ["Movie3", 3], ["Movie4", 4], ["Movie5", 5]];
movies.forEach(function (item) {
    "use strict";
    window.console.log(item[0] + " " + item[1]);
});*/

//STEP SEVENTEEN
/*var i;
var employees = [];
employees[0] = "Employees:";
employees[1] = " ";
employees[2] = "ZAK";
employees[3] = "JESSICA";
employees[4] = "MARK";
employees[5] = "FRED";
employees[6] = "SALLY";
for (i = 0; i < employees.length; i += 1) {
    window.console.log(employees[i]);
}*/

//STEP EIGHTEEN --> NOT MINE, REFERENCE, STUCK
/*var values = [58, '', 'abcd', true, null, false, 0];

var filterValues = values.filter(function (item) {
    "use strict";
    if (item === 58 || item === 'abcd' || item === true)
    return values.slice(item);
});
window.console.log(filterValues);*/
                                 
//STEP NINETEEN
/*function random_item(items) {
    "use strict";
    return items[Math.floor(Math.random() * items.length)]; }
var items = [8, 77, 14, 35, 2, 90];
window.console.log(random_item(items));*/

//STEP TWENTY
/*var array = [1, 3, 9, 7, 2];
window.console.log(Math.max(...array));*/




//The Product Inventory Management System 
var inventory;

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System. What would you like to do? View - Update - Exit");
    window.console.log("");
    window.console.log("view - View all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory_list) {
    "use strict";
    var i = 1;
    inventory_list.forEach(function (inventory) {
        window.console.log(String(i) + " " + inventory);
        i += 1;
    });
    window.console.log("");
}
function add(inventory_list) {
    "use strict";
    var employee = window.prompt("Update Stock");
    inventory_list.push(inventory);
    window.console.log(inventory + " has been updated.");
    window.console.log("");
}

function main() {
    "use strict";
    var inventory_list, command;
    
    display_menu();
    
    inventory_list = [(3223, 0), "Hat", (12, 10), parseFloat($14.99)];
    [(7624, 1), "Socks", (36, 10), parseFloat($9.99)];
    [(8832, 2), "Shirt", (10, 10), parseFloat($15.99)];
    [(6343, 3), "Jeans", (22, 10), parseFloat($39.99)];
    [(9383, 4), "Jacket", (5, 10), parseFloat($49.99)];
    
    var inventory = ["inventoryHat", "inventorySocks", "inventoryShirt", "inventoryJeans", "inventoryJacket"];
                                              
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory_list);
            } else if (command === "add") {
                add(inventory_list);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();

/*var inventory = [];
inventory[0] = "2233 Hat (12) $14.99";
inventory[1] = "3223 Socks (36) $9.99";
inventory[2] = "4824 Shirt (10) $39.99";
inventory[3] = "6343 Jeans (22) $39.99";
inventory[4] = "9382 Jacket (5) $49.99";

inventory.forEach(function (item) {
    "use strict";
    window.document.write(item[0] + " " + item[1]);
});*/

//FIVE PRODUCTS
/*var inventory = ["inventoryHat", "inventorySocks", "inventoryShirt", "inventoryJeans", "inventoryJacket"];
    
var inventoryHat = [];
inventoryHat["sku"] = 2233;
inventoryHat["product"] = "Hat";
inventoryHat["quantity"] = " ";
inventoryHat["cost"] = "$14.99";

var inventorySocks = [];
inventorySocks["sku"] = 3223;
inventorySocks["product"] = "Socks";
inventorySocks["quantity"] = " ";
inventorySocks["cost"] = "$9.99";

var inventoryShirt = [];
inventoryShirt["sku"] = 4824;
inventoryShirt["product"] = "Shirt";
inventoryShirt["quantity"] = " ";
inventoryShirt["cost"] = "$15.00";

var inventoryJeans = [];
inventoryShirt["sku"] = 6343;
inventoryShirt["product"] = "Jeans";
inventoryShirt["quantity"] = " ";
inventoryShirt["cost"] = "$39.00";

var inventoryJacket = [];
inventoryJacket["sku"] = 9382;
inventoryJacket["product"] = "Jacket";
inventoryJacket["quantity"] = " ";
inventoryJacket["cost"] = "$49.00";

for (index in inventory) {
    window.console.log(inventory[index]);
}*/


