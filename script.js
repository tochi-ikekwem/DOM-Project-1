document.addEventListener('DOMContentLoaded', function () {  
    const products = document.querySelectorAll('.card');  
    let totalPrice = 0;  

    function updateTotalPrice() {  
        // Reset the total price  
        totalPrice = 0;  

        products.forEach(product => {  
            const quantity = parseInt(product.querySelector('.quantity').textContent);  
            const unitPrice = parseFloat(product.querySelector('.unit-price').textContent);  
            totalPrice += (quantity * unitPrice);  
        });  

        document.querySelector('.total').textContent = totalPrice + ' $';  
    }  

    products.forEach(product => {  
        const addBtn = product.querySelector('.fa-plus-circle');  
        const subtractBtn = product.querySelector('.fa-minus-circle');  
        const deleteBtn = product.querySelector('.fa-trash-alt');  
        const likeBtn = product.querySelector('.fa-heart');  
        const quantityDisplay = product.querySelector('.quantity');  
        const priceDisplay = product.querySelector('.unit-price');  

        let quantity = 0;  

        addBtn.addEventListener('click', function () {  
            quantity++;  
            quantityDisplay.textContent = quantity;  
            updateTotalPrice();  
        });  

        subtractBtn.addEventListener('click', function () {  
            if (quantity > 0) {  
                quantity--;  
                quantityDisplay.textContent = quantity;  
                updateTotalPrice();  
            }  
        });  

        deleteBtn.addEventListener('click', function () {  
            // Remove the product card from the DOM  
            product.remove();  
            updateTotalPrice();  
        });  

        likeBtn.addEventListener('click', function () {  
            likeBtn.classList.toggle('liked');  
        });  
    });  
});