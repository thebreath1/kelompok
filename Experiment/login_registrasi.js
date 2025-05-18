function showForm(formId) {
  document.querySelectorAll(".form-box").forEach(form => {
    form.classList.remove("active");
  });
  document.getElementById(formId).classList.add("active");
}

document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevents the default form submission
  /*LogBut();*/ // Calls your function
  alert("Login successful!"); // Displays an alert
  window.location.href = "index.html"; // Redirects to index.html
});