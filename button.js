document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");
    var clearButton = document.getElementById("clearButton");

    // Function to handle form submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(contactForm);

        // Convert FormData to JSON object
        var formObject = {};
        formData.forEach(function (value, key) {
            formObject[key] = value;
        });

        // Store form data in local storage
        localStorage.setItem("formData", JSON.stringify(formObject));

        // Clear form fields
        contactForm.reset();

        alert("Form submitted successfully!");
    });

    // Function to handle clear button click
    clearButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default button behavior

        // Clear form fields
        contactForm.reset();

        // Remove stored form data
        localStorage.removeItem("formData");
    });

    // Check if there is stored form data and populate the form
    var storedData = localStorage.getItem("formData");
    if (storedData) {
        var parsedData = JSON.parse(storedData);
        Object.keys(parsedData).forEach(function (key) {
            var inputElement = contactForm.querySelector('[name="' + key + '"]');
            if (inputElement) {
                inputElement.value = parsedData[key];
            }
        });
    }
});
