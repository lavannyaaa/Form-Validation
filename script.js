const nameField = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-no");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const form = document.getElementById("form");
const error = document.getElementById("error");
const success = document.getElementById("success");

form.addEventListener("submit", function(event) {
   event.preventDefault();  // Prevent default form submission
   let errorMessages = [];
   error.innerText = "";    // Clear previous error messages
   success.innerText = "";  // Clear previous success message

   // Name must not be less than 5 characters
   if (nameField.value.length < 5) {
      errorMessages.push("Name must be at least 5 characters");
   }

   // Email should have @ character in it
   if (!email.value.includes("@")) {
      errorMessages.push("Enter a valid email");
   }

   // Phone Number should not be 123456789 and must be a 10-digit number.
   if (phone.value === 123456789 || phone.value.length < 10) {
      errorMessages.push("Phone Number should not be 123456789 and must be a 10-digit number");
   }

   // Password must be greater than 8 characters and cannot be 'password' or the user's name
   if (password.value.length < 8) {
      errorMessages.push("Password must be greater than 8 characters");
   }

   if (password.value === "password" || password.value === nameField.value) {
      errorMessages.push("Password cannot be 'password' or the name of the user");
   }

   // Password and confirm password should match
   if (password.value !== confirmPassword.value) {
      errorMessages.push("Passwords do not match");
   }

   if (errorMessages.length > 0) {
      error.innerText = errorMessages.join(" , ");
   } else {
      success.innerText = "Your form has been submitted!!";
      form.reset();  // Clear the form after successful submission
   }
});
