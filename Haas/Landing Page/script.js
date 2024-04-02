document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var carType = document.getElementById('carType').value.trim();
    var pickupDate = document.getElementById('pickupDate').value.trim();
    var returnDate = document.getElementById('returnDate').value.trim();

    var namePattern = /^[A-Z][a-z]*$/;
    if (!namePattern.test(name)) {
        alert('Name must start with a capital letter and contain only alphabets.');
        return;
    }

    var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|in)$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be 10 digits without any spaces or special characters.');
        return;
    }

    if (new Date(returnDate) <= new Date(pickupDate)) {
        alert('Return date must be after pickup date.');
        return;
    }

    // Display booking details
    alert(`Booking Details:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Car Type: ${carType}
    Pickup Date: ${pickupDate}
    Return Date: ${returnDate}`);
});
