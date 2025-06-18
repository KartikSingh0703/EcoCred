// signin.js
document.getElementById("toggle-form").addEventListener("click", function(event) {
    event.preventDefault();
    let title = document.getElementById("form-title");
    let emailField = document.getElementById("email");
    let toggleText = document.getElementById("toggle-form");

    if (title.innerText === "Login") {
        title.innerText = "Sign Up";
        emailField.style.display = "block";
        toggleText.innerHTML = "Already have an account? <a href='#'>Login</a>";
    } else {
        title.innerText = "Login";
        emailField.style.display = "none";
        toggleText.innerHTML = "Don't have an account? <a href='#'>Sign Up</a>";
    }
});

