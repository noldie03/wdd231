document.addEventListener("DOMContentLoaded", () => {
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param) || '';
        }

    document.getElementById("fname").textContent = getQueryParam("fname");
    document.getElementById("lname").textContent = getQueryParam("lname");
    document.getElementById("email").textContent = getQueryParam("email");
    document.getElementById("phone").textContent = getQueryParam("phone");
    document.getElementById("org").textContent = getQueryParam("org");
    document.getElementById("timestamp").textContent = getQueryParam("timestamp");
});