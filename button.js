// Function to prompt user for their name and display it in a specified HTML element
function promptForName() {
    var userName = prompt("Please enter your name:");
    var nameDisplay = document.getElementById("nameDisplay");
    if (userName != null && userName != "") {
        nameDisplay.textContent = "Welcome, " + userName + "!";
    }
}

// Function to enlarge an image when clicked
function enlargeImage() {
    var image = document.getElementById("myImage");
    image.style.width = "200px"; // Adjust the size as needed
}

// Function to shrink an image when clicked
function shrinkImage() {
    var image = document.getElementById("myImage");
    image.style.width = "100px"; // Adjust the size as needed
}

// Function to handle mouseover event for navigation items
function mouseOverNav() {
    this.style.backgroundColor = "#ccc"; // Change background color on mouseover
}

// Function to handle mouseout event for navigation items
function mouseOutNav() {
    this.style.backgroundColor = ""; // Restore original background color on mouseout
}

// Add event listeners when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Create button to prompt for name
    var button = document.createElement("button");
    button.textContent = "Enter Your Name";
    button.onclick = promptForName;
    document.body.appendChild(button);

    // Create clickable image
    var image = document.createElement("img");
    image.src = "C:\\Users\\abdul\\OneDrive\\Pictures\\Screenshots\\Screenshot 2023-11-18 000532.png"; // Replace with actual path to your image
    image.id = "myImage";
    image.style.width = "100px"; // Initial size of the image
    image.onclick = enlargeImage;
    image.ondblclick = shrinkImage; // Shrink image on double click
    document.body.appendChild(image);

    // Add event listeners to navigation menu items
    var navItems = document.querySelectorAll("nav ul li a");
    navItems.forEach(function (navItem) {
        navItem.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            var targetId = navItem.getAttribute("href").substring(1); // Get the target section ID
            var targetSection = document.getElementById(targetId); // Find the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section
            }
        });

        navItem.addEventListener("mouseover", mouseOverNav);
        navItem.addEventListener("mouseout", mouseOutNav);
    });
});
