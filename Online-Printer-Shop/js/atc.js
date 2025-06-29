
//function add to cart
function addToCart() {
    alert('Your product has been added to cart!');
}
document.addEventListener('DOMContentLoaded', function () {
    var addToCartBtns = document.querySelectorAll('.cart-btn');
    
    if (addToCartBtns.length > 0) {
        addToCartBtns.forEach(function (btn) {
            btn.addEventListener('click', addToCart);
        });
    }
});