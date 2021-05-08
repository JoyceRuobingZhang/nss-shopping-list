const list = [{
            id: 1,
            name: "milk",
            price: 2.99
        },
        {
            id: 2,
            name: "eggs",
            price: 1.99
        },
        {
            id: 3,
            name: "chicken breast",
            price: 6.99
        }
    ]
    // console.log(list)

//  Write a function named addToShoppingList that will add a new grocery item to your array. The function should 
//  add an id property to the grocery object that you provide as an argument when the function is invoked.

//  Also add a dateCreated property to the object whose value will be the current date and time.

//  Use your function to add 5 new items to your shopping list with a variety of prices ranging from $4 to $16.

const addToShoppingList = (newItem) => {
    newItem.id = list[list.length - 1].id + 1
    newItem.dateCreated = Date(Date.now())
    list.push(newItem)
}

const itemOne = {
    name: "bagel",
    price: 4.00
}

const itemTwo = {
    name: "shampoo",
    price: 8.99
}

const itemThree = {
    name: "sparkling water",
    price: 5.99
}

const itemFour = {
    name: "beef",
    price: 10.99
}

const itemFive = {
    name: "shrimp",
    price: 15.99
}

addToShoppingList(itemOne)
addToShoppingList(itemTwo)
addToShoppingList(itemThree)
addToShoppingList(itemFive)
    // console.log(list)

// Use a for..of loop and an if() condition inside it to only display the items that cost more than $8 (if you don't 
// have any items currently more expensive than that, go change a couple).


for (const item of list) {
    if (item.price > 8) {
        console.log(item)
    }
}