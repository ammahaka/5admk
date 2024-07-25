document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username and password (you can customize this)
    if (username === "1" && password === "1") {
      // If login is successful, hide the login form and show the code form
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("codeForm").classList.remove("hidden");
    } else {
      alert("The username or password is incorrect. Please try again.");
    }
  });

document.getElementById("codeAdd").addEventListener("click", function () {
  var code = document.getElementById("code").value;
  var link = document.getElementById("link").value;

  // Prepare data object to save
  var dataToSave = {
    code: code,
    link: link,
    // Add more fields as needed
  };

  // Send data to server to save as JSON
  fetch("/saveData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSave),
  })
    .then((response) => response.json())
    .then((data) => {
      // Data saved successfully, show confirmation
      alert("Code and link added successfully!");
      // Optionally, update the table if you're displaying data
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while saving. Please try again.");
    });
});

function redirectToHome() {
  window.location.href = "index.html"; // Redirect to home page
}

function redirectToPage2() {
  window.location.href = "page2.html"; // Redirect to another page
}
