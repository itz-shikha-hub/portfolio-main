// contact.js

// Select the form element
const form = document.getElementById("contactForm");

// Listen for form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Stop page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if fields are filled
  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  try {
    // Send data to backend
    const response = await fetch("https://portfolio-backend-jd5w.onrender.com/contact", {
      method: "POST",
      headers: {
        
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    // Parse the response
    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message. Try again!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server not responding. Please check backend!");
  }
});
