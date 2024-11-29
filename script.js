const countdownDate = new Date("January 30, 2025 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Countdown has ended!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

setInterval(updateCountdown, 1000);