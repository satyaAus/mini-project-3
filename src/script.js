document.addEventListener("DOMContentLoaded", function () {
    console.log(`${Date()} :: This is a starter template for a simple web app.`);
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
