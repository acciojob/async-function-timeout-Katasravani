const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Async function to wait for a specified time and resolve with a message
async function waitForMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// When the button is clicked, display the message after the delay
button.addEventListener("click", async () => {
  const message = textInput.value;
  const delay = parseInt(delayInput.value);

  try {
    const delayedMessage = await waitForMessage(message, delay);
    outputDiv.textContent = delayedMessage;
  } catch (error) {
    console.error("Error:", error);
    outputDiv.textContent = "An error occurred. Please check the input values.";
  }
});