// Simulate fetching total price from elsewhere
const totalPrice = 49.99; // example price
document.getElementById('total').value = `$${totalPrice.toFixed(2)}`;

const form = document.getElementById('checkoutForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  if(name && phone && email && address) {
    // Show popup
    popup.style.display = 'block';
    form.reset();
    document.getElementById('total').value = `$${totalPrice.toFixed(2)}`;
  }
});

// Close popup button
closePopup.addEventListener('click', function() {
  popup.style.display = 'none';
});
