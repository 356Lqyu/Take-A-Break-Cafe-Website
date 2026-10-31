
const responses = {
    "1": "We will open everyday except Thursday, from 8.00am until 8.00 pm.",
    "2": "Our cafe are located at 52,Jalan Genting Kelang, Setapak, 13140, Kuala Lumpur.",
    "3": "All food from our cafe are Halal",
    "4": "Just click the troely button beide the search bar to view your cart.",
    "5": "You can fill in your delivery details in the delivery information form.",
    "default": "Sorry, if you have any question, just call 03-3168-5678 or email to takeabreakcafe.gmail.my to get more information. Thank You!"
};

// Function to handle user input
function handleKeyPress(event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById("user-input").value.toLowerCase();
        const botResponse = document.getElementById("bot-response");

        // Check if there's a predefined response
        if (responses[userInput]) {
            botResponse.textContent = responses[userInput];
        } else {
            botResponse.textContent = responses["default"];
        }

        // Clear user input
        document.getElementById("user-input").value = "";
    }
}