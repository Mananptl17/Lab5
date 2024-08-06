// script.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    header.innerHTML = `
        <img src="sample-logo.png" alt="Logo" class="logo">
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <input type="text" placeholder="Search">
        </nav>
    `;

    footer.innerHTML = `
        <img src="sample-logo.png" alt="Logo" class="logo">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    `;
});
