let inventory = [
    createProduct("Mobile", 30000, 20),
    createProduct("Laptop", 50000, 30),
    createProduct("Keyboard", 5000, 50)
];
// console.log(inventory);
console.log(JSON.stringify(inventory, null, 2));

let newProduct = createProduct("Mouse", 3000, 0);
addProduct(newProduct);
console.log(JSON.stringify(inventory, null, 2));

removeProduct("Mobile")
console.log(JSON.stringify(inventory, null, 2));

updateQuantity("Mouse", 10);
console.log(JSON.stringify(inventory, null, 2));

console.log("Total value of inventories: ",calculateTotalValue());

listProducts();

function addProduct(product){
    inventory.push(product);
}

function removeProduct(productName){
    let index = 0;
    for(let i = 0 ; i < inventory.length ; i++){
        if(inventory[i].name===productName){
            index = i;
            break;
        }
    }
    inventory.splice(index, 1);
}

function updateQuantity(name, quantity){
    for(let i = 0 ; i < inventory.length ; i++){
        if(inventory[i].name===name){
            inventory[i].quantity = quantity;
            break;
        }
    }
}

function calculateTotalValue(){
    let totalValue = 0;
    for( let i = 0 ; i<inventory.length ; i++){
        totalValue += (inventory[i].price * inventory[i].quantity);
    }
    return totalValue;
}

function listProducts(){
    for( let i = 0 ; i<inventory.length ; i++){
        console.log(`Name : ${inventory[i].name}    Price : ${inventory[i].price}     Quantity : ${inventory[i].quantity}`);
    }
}
function createProduct(productName, price, quantity){
    return {name : productName, price:  price, quantity: quantity};
};