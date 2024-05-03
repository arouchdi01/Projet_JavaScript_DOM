
//const { log } = require("console");
document.addEventListener("DOMContentLoaded", function() {
    const plusBtns = document.querySelectorAll(".plus-btn");
    const minusBtns = document.querySelectorAll(".minus-btn");
    const deleteBtns = document.querySelectorAll(".btn-primary");
    const likeBtns = document.querySelectorAll(".like-btn");
    const quantityTexts = document.querySelectorAll(".quantity-text");
    const itemPrices = document.querySelectorAll(".item-price");
    //console.log(itemPrices)
    const totalPriceElement = document.querySelector(".price");
    //console.log(totalPriceElement);
    const prix =document.querySelector(".prix")
    //console.log(prix);

    let Total = parseFloat(prix.textContent)
    console.log(Total)

    let totalPrice = parseFloat(totalPriceElement.textContent);

    plusBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let quantity = parseInt(quantityTexts[index].textContent);
            quantity++;
            quantityTexts[index].textContent = quantity;
            updateTotalPrice();
        });
    });

    minusBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            let quantity = parseInt(quantityTexts[index].textContent);
            if (quantity > 1) {
                quantity--;
                quantityTexts[index].textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    deleteBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const itemTotalPrice = parseFloat(itemPrices[index].textContent);
            const itemTotal = parseFloat(itemPrices[index].textContent)
            Total-=itemTotal
            console.log(itemPrices)
            totalPrice -= itemTotalPrice;
            totalPriceElement.textContent = totalPrice;
            btn.closest("tr").remove();
        });
    });

    likeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("liked");
        });
    });

    function updateTotalPrice() {
        totalPrice = 0;
        itemPrices.forEach((price, index) => {
            const itemTotalPrice = parseFloat(price.textContent) * parseInt(quantityTexts[index].textContent);
            totalPrice += itemTotalPrice;
        });
        totalPriceElement.textContent = totalPrice;
    }

});
