document.addEventListener("DOMContentLoaded", function () {
    var resumeButton = document.createElement("button"); // Create the Resume button
    resumeButton.textContent = "Resume"; // Set button text
    resumeButton.id = "resumeButton"; // Set button id
    document.body.insertBefore(resumeButton, document.querySelector("main")); // Insert the button before main

    var mainContent = document.querySelector("main");
    var originalContent = mainContent.innerHTML;

    // Function to handle resume button click
    resumeButton.addEventListener("click", function () {
        // Toggle content between original and "Resume"
        if (mainContent.innerHTML === originalContent) {
            mainContent.innerHTML = "<h2>WIP</h2>";
            resumeButton.textContent = "Original"; // Change button text
        } else {
            mainContent.innerHTML = originalContent;
            resumeButton.textContent = "Resume"; // Change button text
        }
    });
});
