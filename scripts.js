// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        event.preventDefault();  // Prevent form submission
    } else {
        alert("Thank you for contacting me!");
    }
});
