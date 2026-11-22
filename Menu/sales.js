function addToCart(imgSrc, productName, price, quantityElementId) {
    const quantity = parseInt(document.getElementById(quantityElementId).value, 10) || 1;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += quantity;
        if(existingProduct.quantity <= 0) {
            cart = cart.filter(item => item.name !== productName); 
        } else {
            existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
        }
    } else {
        if(quantity > 0) { 
            cart.push({
                img: imgSrc,
                name: productName,
                price: price,
                quantity: quantity,
                totalPrice: price * quantity
            });
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(cart);
}

document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart(cart);
});

function displayCart(cart) {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';
    let totalAmount = 0;

    cart.forEach(item => {
        totalAmount += item.totalPrice;

        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        // Image Container
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        const imgElement = document.createElement('img');
        imgElement.src = item.img;
        imgElement.alt = item.name;
        imgElement.style.width = '131.5px';
        imgElement.style.height = '100px';
        imgContainer.appendChild(imgElement);
        productDetails.appendChild(imgContainer);

        // Name Container
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        const name = document.createElement('span');
        name.innerHTML = `${item.name}`;
        nameContainer.appendChild(name);
        productDetails.appendChild(nameContainer);
        productDetails.style.width = "825px";


        // QUantity Container
        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity-container');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 0 ;
        
        
        quantityInput.style.width = "55px";
  
        quantityInput.style.marginRight = "10px";
        quantityInput.style.marginLeft = "10px";
        quantityInput.addEventListener('input', function () {
     
            item.quantity = parseInt(quantityInput.value, 10);

            //When the quantity is 0 it will remove
            if (item.quantity <= 0) {
                cart = cart.filter(cartItem => cartItem.name !== item.name);
            } else {
                item.totalPrice = item.price * item.quantity;
            }

            displayCart(cart);

            localStorage.setItem('cart', JSON.stringify(cart));
        });
        quantityContainer.appendChild(quantityInput);
        productDetails.appendChild(quantityContainer);

productDetails.appendChild(quantityContainer);


        //Amount Container
        const amountContainer = document.createElement('div');
        amountContainer.classList.add('amount-container');
        const amountText = document.createElement('div');
        amountText.innerHTML = `RM${item.price}`;
        amountContainer.appendChild(amountText);
        productDetails.appendChild(amountContainer);

        // Price Container
        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');
        const priceText = document.createElement('span');
        priceText.innerHTML = `Total Price: RM${item.totalPrice}`;
        priceContainer.appendChild(priceText);
        productDetails.appendChild(priceContainer);
        

        cartContainer.appendChild(productDetails);
    });

     //Total Amount Container
    const totalAmountContainer=document.createElement('div');
    totalAmountContainer.classList.add('total-amount-container');
    const totalAmountText=document.createElement('span');
    totalAmountText.innerHTML=`Total Amount: RM${totalAmount}`;
    totalAmountContainer.appendChild(totalAmountText);
cartContainer.appendChild(totalAmountContainer);
}



//description the menu
function toggleDescription(menuItemId) {
    const detailsElement = document.getElementById(menuItemId + 'Description');
    if (detailsElement.style.display === 'block' || detailsElement.style.display === '') {
        detailsElement.style.display = 'none';
    } else {
        detailsElement.style.display = 'block';
    }
}


window.onload = init; 
function init() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("Data passes initial validation tests");
       return false;
    }
    
    document.getElementById("delivery").onclick = turnOnDelivery;
    document.getElementById("pickup").onclick=turnOnPickup;
 }
 
 function turnOnDelivery() {
    document.getElementById("addressBox").disabled=false;
    document.getElementById("delBox").disabled=false;
    document.getElementById("pickupBox").disabled=true;
 }
 
 function turnOnPickup() {
    document.getElementById("addressBox").disabled=true;
    document.getElementById("delBox").disabled=true;
    document.getElementById("pickupBox").disabled=false;
 }
    
