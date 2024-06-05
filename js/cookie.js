function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

function displayWelcomeMessage() {
    const username = getCookie("username");
    const currentDate = new Date().toLocaleString();

    if (!username) {
        // First time visit
        alert('Welcome to my site!');
        setCookie("username", "YOURusername", 1); // Set the cookie for 1 day
        setCookie("lastVisitDate", currentDate, 1); // Set the last visit date
    } else {
        // Revisit
        const lastVisitDate = getCookie("lastVisitDate");
        alert('Welcome back! Your last visit was ' + lastVisitDate);
        setCookie("lastVisitDate", currentDate, 365); // Update the last visit date
    }
}

// Display welcome message on page load
window.onload = displayWelcomeMessage;