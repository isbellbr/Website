let body = document.body;
let dark_mode_button = document.getElementById("dark_mode_button");

document.addEventListener("DOMContentLoaded", function() {
    let toggleButton = document.getElementById("dark_mode_button");

    // Check for dark mode in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Save the user's preference in local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            dark_mode_button.innerText = "Dark Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            dark_mode_button.innerText = "Light Mode";
        }
    });
});
