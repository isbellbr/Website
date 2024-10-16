let body = document.body;
let dark_mode_button = document.getElementById("dark_mode_button");

dark_mode_button.addEventListener('click', function() {
    //If in dark mode, change to light mode
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        dark_mode_button.innerText = "Dark Mode";
    }
    //If in light mode, change to dark mode
    else {
        body.classList.add("dark-mode");
        dark_mode_button.innerText = "Light Mode";
    }
})
