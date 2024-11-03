const roasts = [
    "You're like a software update. Whenever I see you, I think, 'Not now.'",
    "If I wanted to hear from an a**hole, I would have farted.",
    "You're proof that even evolution makes mistakes.",
    "I'd explain it to you, but I left my English-to-Dingbat dictionary at home.",
    "You're like a cloud. When you disappear, it's a beautiful day.",
    "I'd agree with you, but then we'd both be wrong.",
    "You're about as useful as a screen door on a submarine.",
    "You bring everyone so much joy when you leave the room.",
    "You're like a candle in the wind. Useless.",
    "You're the reason God created the middle finger.", "Your So Fat You Brought A Spoon To The Super Bowl"
];

// Function to generate a random roast
function generateRoast() {
    const randomIndex = Math.floor(Math.random() * roasts.length);
    document.getElementById("roast-display").textContent = roasts[randomIndex];
}
