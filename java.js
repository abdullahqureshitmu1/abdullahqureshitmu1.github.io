document.addEventListener("DOMContentLoaded", function () {
    var resumeButton = document.createElement("button"); // Create the Resume button
    resumeButton.textContent = "Resume"; // Set button text
    resumeButton.id = "resumeButton"; // Set button id
    document.body.insertBefore(resumeButton, document.querySelector("main")); // Insert the button before main

    var increaseFontButton = document.createElement("button"); // Create the Increase Font Size button
    increaseFontButton.textContent = "Increase Font Size"; // Set button text
    increaseFontButton.id = "increaseFontButton"; // Set button id
    document.body.insertBefore(increaseFontButton, document.querySelector("main")); // Insert the button before main

    var decreaseFontButton = document.createElement("button"); // Create the Decrease Font Size button
    decreaseFontButton.textContent = "Decrease Font Size"; // Set button text
    decreaseFontButton.id = "decreaseFontButton"; // Set button id
    document.body.insertBefore(decreaseFontButton, document.querySelector("main")); // Insert the button before main

    var darkModeButton = document.createElement("button"); // Create the Dark Mode button
    darkModeButton.textContent = "Dark Mode"; // Set button text
    darkModeButton.id = "darkModeButton"; // Set button id
    document.body.insertBefore(darkModeButton, document.querySelector("main")); // Insert the button before main

    var mainContent = document.querySelector("main");
    var originalContent = mainContent.innerHTML;
    var currentFontSize = 16; // Initial font size

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

    // Function to handle increase font size button click
    increaseFontButton.addEventListener("click", function () {
        currentFontSize += 2; // Increase font size by 2px
        mainContent.style.fontSize = currentFontSize + "px";
    });

    // Function to handle decrease font size button click
    decreaseFontButton.addEventListener("click", function () {
        currentFontSize -= 2; // Decrease font size by 2px
        mainContent.style.fontSize = currentFontSize + "px";
    });

    // Function to handle dark mode button click
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Function to handle keyboard shortcuts
    document.addEventListener("keydown", function (event) {
        if (event.key === "d" || event.key === "D") {
            // Toggle dark mode on pressing D
            document.body.classList.toggle("dark-mode");
        } else if (event.key === "f" || event.key === "F") {
            // Increase font size on pressing F
            currentFontSize += 2;
            mainContent.style.fontSize = currentFontSize + "px";
        } else if (event.key === "g" || event.key === "G") {
            // Decrease font size on pressing G
            currentFontSize -= 2;
            mainContent.style.fontSize = currentFontSize + "px";
        }
    });
});
