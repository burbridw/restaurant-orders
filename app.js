let currentOrder = 0
let currentTotal = 0

const mainWindow = document.querySelector(".main-window")
const selectionWindow = document.querySelector(".selection-window")
const menuWindow = document.querySelector(".menu-window")
const menuImageGrid = document.querySelector(".menu-image-grid")
const orderDisplay = document.querySelector(".order-display")
const orderImageGrid = document.querySelector(".order-image-grid")
const finalOrderImageGrid = document.querySelector(".final-order-image-grid")
const checkOutWindow = document.querySelector(".check-out-window")
const priceNumbers = document.querySelector(".price-numbers")

const foodMenuBtn = document.querySelector(".food-menu-button")
const drinkDessertMenuBtn = document.querySelector(".drink-dessert-menu-button")
const menuBackBtn = document.querySelector(".menu-back-button")
const mainResetBtn = document.querySelector(".main-reset-button")
const finishBtn = document.querySelector(".finish-button")

foodMenuBtn.addEventListener("click",function() {
    openMenu(foodsArr)
})
drinkDessertMenuBtn.addEventListener("click",function() {
    openMenu(drinksDessertsCombo)
})
menuBackBtn.addEventListener("click",function() {
    selectionWindow.classList.remove("back")
    menuWindow.classList.add("back")
    menuImageGrid.innerHTML = ""
})
mainResetBtn.addEventListener("click",function() {
    orderImageGrid.innerHTML = ""
    currentOrder = 0
    currentTotal = 0
})
finishBtn.addEventListener("click",function() {
    checkOut()
})


const foodsArr = ["./images/foods/img1.png","./images/foods/img2.png", "./images/foods/img3.png", "./images/foods/img4.png", "./images/foods/img5.png", "./images/foods/img6.png", "./images/foods/img7.png", "./images/foods/img8.png", "./images/foods/img9.png", "./images/foods/img10.png", "./images/foods/img11.png", "./images/foods/img12.png", "./images/foods/img13.png", "./images/foods/img14.png", "./images/foods/img15.png", "./images/foods/img16.png", "./images/foods/img17.png", "./images/foods/img18.png", "./images/foods/img19.png"]
const foodsTextArr = ["rice", "rice ball", "curry and rice", "grilled fish", "bread", "sandwich", "pancakes", "pizza", "hamburger", "hot dog", "french fries", "fried chicken", "sausage", "steak", "omelet", "spaghetti", "pie", "salad", "soup"]
const foodsPriceArr = [130, 120, 490, 470, 160, 180, 300, 500, 570, 290, 260, 250, 190, 630, 410, 560, 330, 240, 270]
const dessertsArr = ["./images/desserts/img1.png","./images/desserts/img2.png", "./images/desserts/img3.png", "./images/desserts/img4.png", "./images/desserts/img5.png", "./images/desserts/img6.png", "./images/desserts/img7.png", "./images/desserts/img8.png"]
const dessertsTextArr = ["cake", "parfait", "pudding", "ice cream", "shaved ice", "chocolate", "popcorn", "snack food"]

const drinksArr = ["./images/drinks/img1.png","./images/drinks/img2.png", "./images/drinks/img3.png", "./images/drinks/img4.png", "./images/drinks/img5.png", "./images/drinks/img6.png", "./images/drinks/img7.png", "./images/drinks/img8.png"]
const drinksTextArr = ["coffee", "tea", "green tea", "orange juice", "soda", "milk", "water", "mineral water"]

const fruitsvegetablesArr = ["./images/fruitsvegetables/img1.png","./images/fruitsvegetables/img2.png", "./images/fruitsvegetables/img3.png", "./images/fruitsvegetables/img4.png", "./images/fruitsvegetables/img5.png", "./images/fruitsvegetables/img6.png", "./images/fruitsvegetables/img7.png", "./images/fruitsvegetables/img8.png", "./images/fruitsvegetables/img9.png", "./images/fruitsvegetables/img10.png", "./images/fruitsvegetables/img11.png", "./images/fruitsvegetables/img12.png", "./images/fruitsvegetables/img13.png", "./images/fruitsvegetables/img14.png", "./images/fruitsvegetables/img15.png", "./images/fruitsvegetables/img16.png", "./images/fruitsvegetables/img17.png", "./images/fruitsvegetables/img18.png", "./images/fruitsvegetables/img19.png", "./images/fruitsvegetables/img20.png", "./images/fruitsvegetables/img21.png", "./images/fruitsvegetables/img22.png", "./images/fruitsvegetables/img23.png", "./images/fruitsvegetables/img24.png", "./images/fruitsvegetables/img25.png", "./images/fruitsvegetables/img26.png", "./images/fruitsvegetables/img27.png"]
const fruitsvegetablesTextArr = ["apple", "banana", "bean", "brocolli", "cabbage", "carrot", "cherry", "corn", "cucumber", "eggplant", "grapes", "green pepper", "kiwi fruit", "lemon", "lettuce", "melon", "mushroom", "nut", "onion", "orange", "peach", "pineapple", "potato", "spinach", "strawberry", "tomato", "watermelon"]
const tastesArr = ["./images/tastes/img1.png","./images/tastes/img2.png", "./images/tastes/img3.png", "./images/tastes/img4.png", "./images/tastes/img5.png", "./images/tastes/img6.png", "./images/tastes/img7.png", "./images/tastes/img8.png", "./images/tastes/img9.png", "./images/tastes/img10.png"]
const tastesTextArr = ["bitter", "sweet", "salty", "sour", "spicy", "delicious", "soft", "hard", "cold", "hot"]

const drinksDessertsCombo = ["./images/drinks/img1.png","./images/drinks/img2.png", "./images/drinks/img3.png", "./images/drinks/img4.png", "./images/drinks/img5.png", "./images/drinks/img6.png", "./images/drinks/img7.png", "./images/drinks/img8.png", "./images/desserts/img1.png","./images/desserts/img2.png", "./images/desserts/img3.png", "./images/desserts/img4.png", "./images/desserts/img5.png", "./images/desserts/img6.png", "./images/desserts/img7.png", "./images/desserts/img8.png"]
const drinksDessertsPriceArr = [150, 140, 0, 200, 130, 110, 0, 100, 250, 320, 210, 220, 170, 110, 190, 120]

const prices = {
    "./images/foods/img1.png": 130,
    "./images/foods/img2.png": 120, 
    "./images/foods/img3.png": 490, 
    "./images/foods/img4.png": 470, 
    "./images/foods/img5.png": 160, 
    "./images/foods/img6.png": 180, 
    "./images/foods/img7.png": 300, 
    "./images/foods/img8.png": 500, 
    "./images/foods/img9.png": 570, 
    "./images/foods/img10.png": 290, 
    "./images/foods/img11.png": 260, 
    "./images/foods/img12.png": 250, 
    "./images/foods/img13.png": 190, 
    "./images/foods/img14.png": 630, 
    "./images/foods/img15.png": 410, 
    "./images/foods/img16.png": 560, 
    "./images/foods/img17.png": 330, 
    "./images/foods/img18.png": 240, 
    "./images/foods/img19.png": 270,
    "./images/drinks/img1.png": 150,
    "./images/drinks/img2.png": 140, 
    "./images/drinks/img3.png": 0, 
    "./images/drinks/img4.png": 200, 
    "./images/drinks/img5.png": 130, 
    "./images/drinks/img6.png": 110, 
    "./images/drinks/img7.png": 0, 
    "./images/drinks/img8.png": 100, 
    "./images/desserts/img1.png": 250,
    "./images/desserts/img2.png": 320, 
    "./images/desserts/img3.png": 210, 
    "./images/desserts/img4.png": 220, 
    "./images/desserts/img5.png": 170, 
    "./images/desserts/img6.png": 110, 
    "./images/desserts/img7.png": 190, 
    "./images/desserts/img8.png": 120 
}

function openMenu(list) {
    for ( let i = 0; i < list.length; i++ ) {
    menuImageGrid.innerHTML += `<div class="menu-image-grid-box"><img class="menu-image" src="${list[i]}"></img></div>`
    selectionWindow.classList.add("back")
    menuWindow.classList.remove("back")

    let menuImages = document.querySelectorAll(".menu-image")
    menuImages.forEach( (x) => {
        x.addEventListener("click",function() {
            if ( currentOrder < 10 ) {
            let thisOrder = x.getAttribute("src")
            orderImageGrid.innerHTML += `<div class="order-image-grid-box"><img class="order-image" src="${thisOrder}"></img></div>`
            currentOrder++
            currentTotal += prices[thisOrder]
            console.log(currentTotal)
            let orderImages = document.querySelectorAll(".order-image-grid-box")
            orderImages.forEach( (y) => {
                y.addEventListener("click",function() {
                    if ( y.innerHTML != "" ) {
                        let thisPrice = prices[y.firstChild.getAttribute("src")]
                        y.remove()
                        currentOrder--
                        currentTotal -= thisPrice
                        console.log(currentTotal)
                    }
                })
            })
            }
        })
    })
    }
}

function checkOut() {
    finalOrderImageGrid.innerHTML = orderImageGrid.innerHTML
    if ( !menuWindow.classList.contains("back") ) {
        menuWindow.classList.add("back")
    }
    if ( !selectionWindow.classList.contains("back") ) {
        selectionWindow.classList.add("back")
    }
    mainWindow.classList.add("back")
    orderDisplay.classList.add("back")
    checkOutWindow.classList.remove("back")
    priceNumbers.textContent = currentTotal
}
