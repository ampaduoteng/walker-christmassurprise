// JavaScript for Interactivity

// Start Celebration - Navigate from input page to celebration page
document.getElementById("startBtn").addEventListener("click", function () {
  const userName = document.getElementById("nameInput").value.trim();

  if (userName === "") {
    alert("Please enter your name!");
    return;
  }

  // Hide the greeting page and show the celebration page
  document.getElementById("greetingPage").style.display = "none";
  document.getElementById("celebrationPage").style.display = "block";

  // Update the message with the user's name
  document.getElementById("userName").textContent = userName;
  document.getElementById("message").textContent = `Merry Christmas, ${userName}!`;
});

// Show surprise when clicking the "Click for a Surprise" button
document.getElementById("surpriseBtn").addEventListener("click", function () {
  document.getElementById("giftBox").style.display = "block";
});
