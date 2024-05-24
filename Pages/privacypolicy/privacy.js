document.addEventListener('DOMContentLoaded', (event) => {
    const lastUpdatedElement = document.querySelector('header p');
    const lastUpdatedDate = new Date().toLocaleDateString();
    lastUpdatedElement.textContent = `Last updated: ${lastUpdatedDate}`;
});
