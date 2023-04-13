/*ALL THE VARIABLES I WILL NEED MANIPULATE THE DOM*/

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeshopping');
let exitCart = document.querySelector('.exit');
let body = document.querySelector('body');
let listCard = document.querySelector('.listcard');
let list = document.querySelector('.list');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity')


/*FUNCTION FOR THE TOGGLE CART BOX*/

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
   body.style.backgroundColor = "lightgray";
    
});


closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
    body.style.backgroundColor = "white";
    
});


exitCart.addEventListener('click', () =>{
    body.classList.remove('active');
    body.style.backgroundColor = "white";
});



/*AN ARRAY FOR THE LIST PRODUCTS TO BE DISPLAYED ON  THE WEB THEN LATER-ON USE THE 
  ARRAY FOR PUTTING THE ITEMS ON THE SIDE CART WHEN ADDED TO IT, IT ALL STARTS WITH THIS
  ARRAY*/

let products = [
    {
        id: 1,
        name:  "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: '1.jpg',
        price: 1300
    },

    {
        id: 2,
        name:  "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: '2.webp',
        price: 1700
    },

    {
        id: 3,
        name:  "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: '3.jpg',
        price:  1500
    },

    {
        id: 4,
        name:  "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: '4.webp',
        price: 1200
    },

    {
        id: 5,
        name:  "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: '5.webp',
        price: 1300
    },

    {
        id: 6,
        name:  "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: '6.jpg',
        price: 1900
    },

    {
        id: 7,
        name: "Antonio Banderas The Golden Secret",
        image: "7.webp",
        price: 2500
    },

    {
        id: 8,
        name: "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: "8.jpg",
        price: 3300
    },


    {
        id: 9,
        name: "Bulgari Man Glacial Essences",
        image: "9.jpg",
        price: 17100
    },

    {
        id: 10,
        name: "Yves Saint Laurent Y man Parfum",
        image: "10.jpg",
        price: 12000
    },

    {
        id: 11,
        name: "Azzaro Wanted Eau De Toilette",
        image: "11.jpg",
        price: 1430
    },

    {
        id: 12,
        name: "Paco Rabanne 1 Million Parfum",
        image: "12.jpg",
        price: 6000
    },

    {
        id: 13,
        name: "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: "13.jpg",
        price: 9500
    },

    {
        id: 14,
        name: "Coach Blue Eau de Toilette",
        image: "14.jpg",
        price: 13600
    },

    {
        id: 15,
        name: "Emporio Armani Stronger With You Intensely Eau De Parfum",
        image: "15.webp",
        price: 22000
    },
];

/*AN EMPTY ARRAY FOR THE SIDE BAR CART*/

let listCards = [];

/*APPENDING MY ARRAY TO THE WEBSITE, THIS WAY MAKES IT EASEIR FOR ME TO MANIPULATE THE BUTTONS 
 INTO ADDING THE PRODUCTS INTO THE CART*/

function initApp (){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">R ${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

/* A FUNCTIONB  TO TAKE PLACE FOR THE ONLICK('ADD TO CART') BUTTON I CREATED  IN THE NEW DIV*/

function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;

    }

    reloadCart();
}

function reloadCart(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) =>{
        totalPrice =    totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.classList.add('items')
            newDiv.innerHTML = `
            <div><img src="images/${value.image}"></div>
            <div class="incart-name">${value.name}</div>
            <div class="incart-price">R ${value.price.toLocaleString()}</div>
            <div class="incart-items-count">item/s: <span> ${value.quantity}</span></div>
            <div>
            <button class="cart-btn" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            <button class="cart-btn" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerHTML = count;
};

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;

    }
    reloadCart();
}

