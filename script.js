// Set countdown target date
const countdownDate = new Date("January 5, 2025 00:00:00").getTime();

// Countdown Timer Logic
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Countdown has ended!";
        clearInterval(countdownInterval); // Stop the countdown when the timer ends
        return;
    }

    const calculateTimeUnits = (time) => ({
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((time % (1000 * 60)) / 1000)
    });

    const { days, hours, minutes, seconds } = calculateTimeUnits(timeLeft);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Dark Mode Toggle Logic
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Toggle icon between sun and moon with simplified logic
    const icon = document.querySelector("#dark-mode-toggle i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
});
